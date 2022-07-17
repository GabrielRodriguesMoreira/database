import { useState, useEffect, createElement } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../styles/futebolapi.css'
import axios from 'axios'
import { useAxios } from '../hooks/useAxios';


const apiSecret = import.meta.env.VITE_APP_CONVERTKIT_API_SECRET;
const options = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiSecret}`
    }
};

export function FutebolAPI() {

    const { data: times, isFetch } = useAxios<Array<Object>>('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', options)

    return (
        <div className='main_futebol_container'>

        </div>
    )
}

/*
            {isFetch && <p>loading...</p>}
            <h1>{times?.map(teams => {
                return (
                    <h1>{String(times?.[0].derrotas)}</h1>
                )
            })}</h1>

*/