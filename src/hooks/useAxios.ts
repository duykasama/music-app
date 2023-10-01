import axios, {InternalAxiosRequestConfig} from "axios";
import {useEffect} from "react";
import {AuthState} from "@/redux/authSlice";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import useAccessToken from "@/hooks/useAccessToken";

// type Params = {
//     url: string
// }

export default function useAxios(url: string) {
    const axiosInstance = axios.create({baseURL: url})
    const auth = useSelector((state: RootState) => state.auth)
    const getAccessToken = useAccessToken()

    useEffect(() => {
        const requestIntercept = axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                if (!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`
                }
                return config
            },
            error => Promise.reject(error)
        )
        const responseIntercept = axiosInstance.interceptors.response.use(
            config => config,
            async error => {
                const prevRequest = error.config
                if ((error.config.status === 401 || error.config.status === 400) && !prevRequest.sent){
                    prevRequest.sent = true
                    const newAccessToken = await getAccessToken()
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return axiosInstance(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axiosInstance.interceptors.request.eject(requestIntercept)
            axiosInstance.interceptors.response.eject(responseIntercept)
        }
    }, [auth.accessToken, axiosInstance, getAccessToken]);


    return axiosInstance
}