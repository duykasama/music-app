import {useEffect, useState} from "react";
import useAxios from "@/hooks/useAxios";
import {BASE_URL} from "@/lib/api/apiInfo";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

type CategoriesResponse = {
    categories: {
        href: string,
        items: Category[]
    }
}

export default function useFetch(endpoint: string) {
    const [data, setData] = useState<CategoriesResponse>()
    const axios = useAxios(BASE_URL)
    const auth = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(endpoint,{
                    headers: {
                        'Authorization': `Bearer ${auth.accessToken}`
                    }
                })
                setData(response.data)
            } catch (e) {
                // ignored
            }
        }

        getData()
    }, []);

    console.log('data: ', data)

    return {data}
}