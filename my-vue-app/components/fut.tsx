import{useState, useEffect} from 'react'
import '../styles/fut.css'

type Teams = {
    copa_do_brasil: Object,
    placar: string,
}


const options = {
	method: 'GET',
	headers: {
		'Authorization': 'Bearer test_d07617715160594a9c75ffb7750fc0'
	}   
};

export function Fut(){

    const [teams,setteam] = useState({})

    useEffect(() =>{

        fetch('https://api.api-futebol.com.br/v1/campeonatos/0/tabela', options)
        .then(response => response.json())
        .then((response) => {
            setteam(response);
        })
        .then(response => console.log(response))
        
        .catch(err => console.error(err));

    }, []);
    
    console.log(teams);
    return(
        <div>
            <div className='left_content'>
            <img src={teams?.[0]?.['time']?.escudo} alt="escudotime"/>
            <h2>{teams?.[0]?.['time']?.nome_popular}</h2>
            </div>


        </div>
    )
}

