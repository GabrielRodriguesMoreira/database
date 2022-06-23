import{useState, useEffect, createElement} from 'react'
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
    const [time, settime] = useState(0)
    
        useEffect(() =>{
        fetch('https://api.api-futebol.com.br/v1/campeonatos/1/tabela', options)
        .then(response => response.json())
        .then(response => {
            setteam(response);
            console.log(response?.[0]?.['time']?.nome_popular);
            if(response){       
                let value = (response?.[0]?.['time']?.nome_popular);
                for (var data_value=0;data_value<response.length;data_value++){
                    value = (response?.[data_value]?.['time']?.nome_popular)
                let tag = document.createElement('option');
                tag.setAttribute('data-value', String(data_value));
                tag.setAttribute('value', value);
                let parent = (document.getElementById("answers") as HTMLInputElement);
                parent.appendChild(tag);
                }
              }
        })
        .catch(err => console.error(err));
    }, []);

    return(
        <div className='futcontainer'>
            <div className='left_content'>
            <img src={teams?.[time]?.['time']?.escudo} alt="escudotime" />
            <h2>{teams?.[time]?.['time']?.nome_popular}</h2>
            </div>
            <div className='right_content' id='right'>
                <h2 > o o cara ai: {teams?.[time]?.pontos} </h2>
                <h2> pontos: {teams?.[time]?.pontos}</h2>
                <h2> aproveitamento: {teams?.[time]?.aproveitamento}</h2>
                <h2> jogos: {teams?.[time]?.jogos}</h2>
                <h2> vitórias: {teams?.[time]?.vitorias}</h2>
                <h2> derrotas: {teams?.[time]?.derrotas}</h2>
                <h2> empates: {teams?.[time]?.empates}</h2>
                <h2> gols: {teams?.[time]?.gols_pro}</h2>

                <input list="answers" id="answer" />
                <datalist id="answers">
                </datalist>
                <button onClick={runfa}>o o cara ai</button>
  
            </div>

        </div>
    )

    function runfa(){
    var shownVal = (document.getElementById("answer") as HTMLInputElement).value;
    var value2send = (document.querySelector("#answers option[value='"+shownVal+"']") as HTMLInputElement).dataset.value;
    settime(Number(value2send));
    }
}

