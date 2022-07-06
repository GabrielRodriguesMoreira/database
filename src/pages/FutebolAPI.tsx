import{useState, useEffect, createElement} from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../styles/futebolapi.css'

const apiSecret = import.meta.env.VITE_APP_CONVERTKIT_API_SECRET;
const options = {
	method: 'GET',
	headers: {
		'Authorization': `Bearer ${apiSecret}`
	}   
};


export function FutebolAPI(){

    const [teams,setteam] = useState({})
    const [time, settime] = useState(0)
    
useEffect(() =>{
    fetch('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', options)
    .then(response => response.json())
    .then(response => {
        setteam(response);
         if(response){
            console.log(response);
            /* criando a lista de busca */
            let value = (response?.[0]?.['time']?.nome_popular);
            for (var data_value=0;data_value<response.length;data_value++){
                value = (response?.[data_value]?.['time']?.nome_popular)
                let tag = document.createElement('option');
                tag.setAttribute('data-value', String(data_value));
                tag.setAttribute('value', value);
                let parent = (document.getElementById("answers") as HTMLInputElement);
                parent.appendChild(tag);
            }

            /* pintar borda dependendo (V/D/E) */
            changecolor(response,time)
        }
    })
    .catch(err => console.error(err));
}, []);


function searchteam(){
    var shownVal = (document.getElementById("answer") as HTMLInputElement).value;
    var value2send = (document.querySelector("#answers option[value='"+shownVal+"']") as HTMLInputElement).dataset.value;
    var value = 0
    settime(() =>{ 
        value = Number(value2send)
        changecolor(teams,value)
        return value;
    });
}


function changecolor(resp, statechanger){
    for (let curgame=0;curgame<5;curgame++){
        let gametd = (document.getElementById(`lastgame${curgame}`) as HTMLInputElement);
        switch(resp?.[statechanger]?.ultimos_jogos[curgame]){
            case 'v':
                gametd.style.cssText =   'border-bottom: 3px solid #1cf540;'
                break
            case 'd':
                gametd.style.cssText =   'border-bottom: 3px solid #b80101;'
                break
            case 'e':
                gametd.style.cssText =   'border-bottom: 3px solid #f4ce26;'
                break
            default:
                gametd.style.cssText =   'border-bottom: 3px solid white;'
        }
    }
}


    return(
        <div className='futparent'>
            <section className='searchsection'>
                <input list="answers" id="answer" placeholder='Pesquise o time' onFocus={() => {(document.getElementById('answer') as HTMLInputElement).value = ''}} />
                <datalist id="answers"  ></datalist>
                <button onClick={searchteam}> < AiOutlineArrowRight /></button>
            </section>
            <section className='futcontainer'>
                <div className='futleft_content'>
                    <div className='futimgcontainer'>
                        <img src={teams?.[time]?.['time']?.escudo} alt="escudotime" />
                    </div>    
                    <h1>{teams?.[time]?.['time']?.nome_popular}</h1>
                </div>
                <div className='futright_content' id='right'>
                    <div className='staticstable'>
                        <table>
                            <tbody>
                            <tr>
                                <td> <h2 >posição:</h2></td>
                                <td><h2 >{teams?.[time]?.posicao}</h2></td>
                                <td> <h2 >pontos:</h2></td>
                                <td><h2 >{teams?.[time]?.pontos}</h2></td>
                            </tr>
                            <tr>
                                
                            </tr>
                            <tr>
                                <td> <h2 >aproveitamento:</h2></td>
                                <td><h2 >{teams?.[time]?.aproveitamento}</h2></td>
                                <td> <h2 >jogos:</h2></td>
                                <td><h2 >{teams?.[time]?.jogos}</h2></td>
                            </tr>
                            <tr>
                                <td> <h2 >vitórias:</h2></td>
                                <td><h2 >{teams?.[time]?.vitorias}</h2></td>
                                <td> <h2 >derrotas:</h2></td>
                                <td><h2 >{teams?.[time]?.derrotas}</h2></td>
                            </tr>
                            <tr>
                                <td> <h2 >empates:</h2></td>
                                <td><h2 >{teams?.[time]?.empates}</h2></td>
                                <td><h2>gols:</h2></td>
                                <td><h2>{teams?.[time]?.gols_pro}</h2></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className='lastgames'>
                    <h1 id='lastgamestitle'>Ultimos jogos</h1>
                        <ul id='lastgamestr'>
                            <li id='lastgame0'>{teams?.[time]?.ultimos_jogos[0]}</li>
                            <li id='lastgame1'>{teams?.[time]?.ultimos_jogos[1]}</li>
                            <li id='lastgame2'>{teams?.[time]?.ultimos_jogos[2]}</li>
                            <li id='lastgame3'>{teams?.[time]?.ultimos_jogos[3]}</li>
                            <li id='lastgame4'>{teams?.[time]?.ultimos_jogos[4]}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

    )
}