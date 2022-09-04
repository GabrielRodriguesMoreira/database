import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from 'axios'

export function useAxios(url, options) {

    const [data, setData] = useState(null)
    const [isFetch, setFetch] = useState(true)
    const [error, setError] = useState(null)
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

