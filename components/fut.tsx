import{useState, useEffect, createElement} from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
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

                /* pintar borda dependendo (V/D/E) */
                for (let curgame=0;curgame<5;curgame++){
                    let gameparent = (document.getElementById("lastgamestr") as HTMLInputElement);
                    let gametd = document.createElement('td');
                    let gameh2 = document.createElement('h2');
                    gameh2.innerHTML = response?.[0]?.ultimos_jogos[curgame];

                    if (response?.[time]?.ultimos_jogos[curgame] == 'v'){
                        gameh2.style.cssText =   'border-bottom: 5px solid #1cf540;'
                    }else if (response?.[time]?.ultimos_jogos[curgame] == 'd'){
                        gameh2.style.cssText =   'border-bottom: 5px solid #b80101;'
                    }
                    else {
                        gameh2.style.cssText =   'border-bottom: 5px solid #fffb0f;'
                    }
                    gametd.appendChild(gameh2);
                    gameparent.appendChild(gametd);
                }

                }
              }
        })
        .catch(err => console.error(err));

    }, []);


    
    return(
        <div className='futparent'>

            <section className='searchsection'>
                <input list="answers" id="answer" placeholder='seach some team' />
                <datalist id="answers"  ></datalist>
                <button onClick={runfa}> < AiOutlineArrowRight /></button>
            </section>

            <section className='futcontainer'>
                <div className='left_content'>
                    <div className='imgcontainer'>
                        <img src={teams?.[time]?.['time']?.escudo} alt="escudotime" />
                    </div>    
                    <h1>{teams?.[time]?.['time']?.nome_popular}</h1>
                </div>

                <div className='right_content' id='right'>

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
                    <table>
                        <tbody>
                            <tr id='lastgamestr'>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                </div>


            </section>
            
        </div>
    )

    function runfa(){
    var shownVal = (document.getElementById("answer") as HTMLInputElement).value;
    var value2send = (document.querySelector("#answers option[value='"+shownVal+"']") as HTMLInputElement).dataset.value;
    settime(Number(value2send));
    }
}

