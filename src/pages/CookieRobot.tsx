import '../styles/cookierobot.css'
import React, { useState, useEffect } from 'react'
import typewritesound from '../componenets/typewrite.wav'
import spr1 from '../componenets/roboto.gif'


export function CookieRobot() {
    const [action, setaction] = useState(0)
    const [fillspace, setfillspace] = useState(<></>)
    const [infos, setinfos] = useState({
        name: '',
        charname: '',
        video: ''
    })
    var i = 0;
    var speed = 30;
    useEffect(() => {
        console.log(document.cookie);
        if (document.cookie.length > 0) {
            setaction(-50);
            setinfos(() => {
                var obj = JSON.parse(document.cookie)
                return obj
            })
            console.log(infos)
            typeWriter(`Bem vindo de volta ${JSON.parse(document.cookie).name}`);
        } else {

            typeWriter('Olá visitante');
        }
    }, [])


    function nextaction() {
        i = 0;
        //tirar botão
        (document.getElementById("nextbutton") as HTMLInputElement).style.display = 'none';

        //limpar caixa de texto
        (document.getElementById("type") as HTMLInputElement).innerHTML = '';

        //proxima ação
        setaction(action + 1)

        //ações
        switch (action) {
            //primeiro acesso
            case 0:
                typeWriter('Parece que é sua primeira vez aqui.');
                break;
            case 1:
                typeWriter('Poderia me dizer seu nome?');
                setfillspace((<input type="text" id='username' autoComplete='off' placeholder='type here' />));
                break;
            case 2:
                setinfos({
                    name: (document.getElementById('username') as HTMLInputElement).value,
                    charname: '',
                    video: '',
                })
                typeWriter(`Obrigado ${(document.getElementById('username') as HTMLInputElement).value}`);
                setfillspace((<></>));
                break;
            case 3:
                typeWriter('Mas parece que eu também não tenho um nome. Poderia me dar um?');
                setfillspace((<input type="text" id='charname' autoComplete='off' placeholder='type here' />));
                break;
            case 4:
                setinfos({
                    name: infos.name,
                    charname: (document.getElementById('charname') as HTMLInputElement).value,
                    video: '',
                })
                setfillspace((<></>));
                typeWriter('Perfeito!')
                break;
            case 5:
                typeWriter('Antes de ir me responda apenas uma pergunta. De que tipo de música você mais gosta?');
                setfillspace(<div className='animalbutton'>
                    <button onClick={() => {
                        setinfos({
                            name: infos.name,
                            charname: infos.charname,
                            video: 'https://www.youtube.com/embed/1V_xRb0x9aw'
                        });
                    }}>Rock</button>

                    <button onClick={() => {
                        setinfos({
                            name: infos.name,
                            charname: infos.charname,
                            video: 'https://www.youtube.com/embed/pXRviuL6vMY'
                        });
                    }}>Pop</button>
                    <button onClick={() => {
                        setinfos({
                            name: infos.name,
                            charname: infos.charname,
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        });
                    }}>????</button>
                </div>);
                break;
            case 6:
                typeWriter('Ótimo, agora me da só um segundo para que eu possa memorizar tudo.');
                setfillspace((<></>));
                document.cookie = JSON.stringify(infos);
                break;
            case 7:
                typeWriter('tudo pronto, da próxima vez que você recarregar a página terei novidades. Dê uma olhada nos outros projetos depois volte aqui.');
                break;
            case 8:
                (document.getElementById('textbox') as HTMLInputElement).style.display = 'none';
                break;


            //segundo acesso
            case -50:
                typeWriter('Agora lembra da pergunta que fiz?');
                break;
            case -49:
                typeWriter("Aqui vai uma surpresa! Espero que goste.");
                break;
            case -48:
                document.getElementById('robotbox')?.setAttribute('class', 'minimize')
                setfillspace(
                    <div className='videobox'>
                        <iframe className='videoframe' src={`${JSON.parse(document.cookie).video}?autoplay=1`} frameBorder="0" allow="autoplay" allowFullScreen></iframe>
                    </div>
                )
                break;
        }

    }
    function typeWriter(falo) {
        if (i < falo.length) {
            (document.getElementById('typewritesound') as HTMLAudioElement).play();
            (document.getElementById("type") as HTMLInputElement).innerHTML += falo.charAt(i);
            i++;
            setTimeout(() => { typeWriter(falo) }, speed);
        } else {
            (document.getElementById('typewritesound') as HTMLAudioElement).pause();
            //colocar botão de volta
            (document.getElementById("nextbutton") as HTMLInputElement).style.display = 'block';
        }
    };

    return (
        <div className='main_cookierobot_cotainer'>
            <audio id='typewritesound' src={typewritesound} ></audio>
            <div className='robotbox' id='robotbox'>
                <img src={spr1} alt="robo" />
            </div>
            <div className='textbox' id='textbox'>
                <div className='charname'>{infos.charname}</div>
                <span className='typewriter' id='type'></span>
                {fillspace}
                <button id='nextbutton' onClick={nextaction}>next</button>
            </div>
        </div>
    )

}