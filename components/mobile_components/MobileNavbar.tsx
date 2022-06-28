import {useState, useEffect} from 'react'
import logo from '../sources/logo.png'
import '../../styles/mobilestyles/mobilenavbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export function MobileNavbar(){

    return(
        <div className='mobilenavcontainer'>
            <img src={logo} alt="logo" width={120}  />
                <div onClick={ () => {sidecontrol('hello 1s forwards')}} className='mobilenavmenu' id='mobilenavmenu'><GiHamburgerMenu /></div>
            <div  id='sidelinks' className='sidelinks' >
                <button onClick={ () => {sidecontrol('goodbye 1s forwards')}} className='sidelinks_close_button'> <AiOutlineClose /></button>
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
    }
}