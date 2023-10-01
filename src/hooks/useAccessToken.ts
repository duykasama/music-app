import axios from "axios";
import {useDispatch} from "react-redux";
import {addAuth, AuthState} from "@/redux/authSlice";

const AUTH_URL = "https://accounts.spotify.com/api/token"
// let CLIENT_ID: string | undefined
// let CLIENT_SECRET: string | undefined
//
// export const getServerSideProps = () => {
//
//     CLIENT_ID = process.env.CLIENT_ID
//     CLIENT_SECRET = process.env.CLIENT_SECRET
//     return {
//         props: {
//             env: 'something'
//         }
//     }
// }

export default function useAccessToken() {
    const axiosInstance = axios.create({baseURL: AUTH_URL})
    // const CLIENT_ID = 'ad0249c613804c7aab6cdf1626d7182b'
    // const CLIENT_SECRET = '13d623c89508483da9db5200686d96f7'
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
    const dispatch = useDispatch()

    console.log(CLIENT_ID)

    return async () => {
        try {
            const response = await axiosInstance.post(AUTH_URL,{
                grant_type: 'client_credentials'
            }, {
                headers: {
                    'Authorization': `Basic ${Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            const newAuth: AuthState = {
                accessToken: response.data?.access_token
            }
            dispatch(addAuth(newAuth))
            return newAuth.accessToken
        } catch (e) {
            // ignored
        }
    }
}