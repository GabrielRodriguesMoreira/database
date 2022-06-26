import{useState, useEffect, createElement} from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../styles/fut.css'



const apiSecret = import.meta.env.VITE_APP_CONVERTKIT_API_SECRET;
const options = {
    
	method: 'GET',
	headers: {
		'Authorization': `Bearer ${apiSecret}`
	}   
};


export function Fut(){

    const [teams,setteam] = useState({})
    const [time, settime] = useState(0)
    
useEffect(() =>{
    fetch('https://api.api-futebol.com.br/v1/campeonatos', options)
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
            for (let curgame=0;curgame<5;curgame++){
                let gameparent = (document.getElementById("lastgamestr") as HTMLInputElement);
                let gametd = document.createElement('li');
                let gameh2 = document.createElement('h2');
                gameh2.innerHTML = response?.[0]?.ultimos_jogos[curgame];
                switch(response?.[time]?.ultimos_jogos[curgame]){
                    case 'v':
                        gametd.style.cssText =   'background-color: #1cf540;'
                        break
                    case 'd':
                        gametd.style.cssText =   'background-color: #b80101;'
                        break

                    case 'e':
                        gametd.style.cssText =   'background-color: #f4ce26;'
                        break
                        
                    default:
                        gametd.style.cssText =   'border-bottom: 5px solid white;'
                }
                gametd.appendChild(gameh2);
                gameparent.appendChild(gametd);
            }
        }
    })
    .catch(err => console.error(err));
}, []);

function searchteam(){
    var shownVal = (document.getElementById("answer") as HTMLInputElement).value;
    var value2send = (document.querySelector("#answers option[value='"+shownVal+"']") as HTMLInputElement).dataset.value;
    settime(Number(value2send));
    }
    return(
        <div className='futparent'>
            <section className='searchsection'>
                <input list="answers" id="answer" placeholder='Pesquise o time' />
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
                    <h1 id='lastgamestitle'>Ultimos jogos</h1>
                    <div className='lastgames'>
                        <ul id='lastgamestr'>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )


}

