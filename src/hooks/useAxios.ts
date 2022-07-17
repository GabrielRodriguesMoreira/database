import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from 'axios'




export function useAxios<T = unknown>(url: string, options?: AxiosRequestConfig) {

    const [data, setData] = useState<T | null>(null)
    const [isFetch, setFetch] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        axios.get(url, options)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => { setFetch(false) })


    }, []);

    return { data, error, isFetch }
}

