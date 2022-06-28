import {useState, useEffect} from 'react'

import logo from '../sources/logo.png'
import '../../styles/mobilestyles/mobilenavbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';

export function MobileNavbar(){

    useEffect(() => {
        

        //remover barra
        var ignoreClickOnMeElement = (document.getElementById('sidelinks') as HTMLInputElement);
        var ignoreClickOnMeElement2 = (document.getElementById('mobilenavmenu') as HTMLInputElement);
        document.addEventListener('click', function(event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        var isClickInsideElement2 = ignoreClickOnMeElement2.contains(event.target);
        if (!isClickInsideElement && !isClickInsideElement2) {
            sidecontrol('goodbye 1s forwards')
        }   
    });

    })
    return(
        <div className='mobilenavcontainer'>
            <img src={logo} alt="logo" width={120}  />
                <div onClick={() => {sidecontrol('hello 1s forwards')}}  className='mobilenavmenu' id='mobilenavmenu'><GiHamburgerMenu /></div>
            <div  id='sidelinks' className='sidelinks' >
                <a className='selected' >PROFILE</a>
                <a >PROJECT 1</a>
                <a >PROJECT 2</a>
                <a >PROJECT 3</a>
            </div>
        </div>
    )

    function sidecontrol(control){
        var elem = (document.getElementById("sidelinks") as HTMLInputElement);
            elem.style.animation = control;
        console.log(elem.style.display)
    }
}