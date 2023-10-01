'use client'
import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addAuth, AuthState} from "@/redux/authSlice";
import Link from "next/link";
import useAccessToken from "@/hooks/useAccessToken";

export default function Test() {
    const client_id ="ad0249c613804c7aab6cdf1626d7182b"
    const client_secret = "13d623c89508483da9db5200686d96f7"
    const url = "https://accounts.spotify.com/api/token"
    const [status, setStatus] = useState("")
    const dispatch = useDispatch()
    const getToken = useAccessToken()

    const handleAuthorize = async () => {

        // const response = await axios.post(url, {grant_type: 'client_credentials'}, {
        //     headers: {
        //         'Authorization': `Basic ${Buffer.from(client_id + ':' + client_secret).toString("base64")}`,
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     }
        // })
        //
        // if (response.status === 200) {
        //     setStatus("success " + response.data?.access_token)
        //     const newAuth: AuthState = {
        //         accessToken: response.data.access_token
        //     }
        //     dispatch(addAuth(newAuth))
        //     console.log(response.data)
        // } else {
        //     setStatus("failed " + response.statusText)
        // }

        const newAccessToken = await getToken()
        setStatus("Success: " + newAccessToken)

    }

    const handleReset = () => {
        setStatus("")
    }

    return (
        <>
            <h1 className="text-red-500">Test page</h1>
            <button className="active:scale-90" onClick={handleAuthorize}>Authorize</button>
            <button onClick={handleReset}>Reset</button>
            <Link href="/">Go to Home</Link>
            {status && <div>{status}</div>}
        </>
    )
}