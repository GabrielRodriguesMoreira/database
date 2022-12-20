import '../styles/header.css'
import logo from '../componenets/logo.webp'
import { BsFillPersonFill } from 'react-icons/bs';
import { MdFilterFrames } from 'react-icons/md';
import { BiFootball } from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export function Header() {

    function colormode(id) {
        var r = (document.querySelector(':root') as HTMLInputElement);
        if ((document.getElementById(id) as HTMLInputElement).checked) {
            r.style.setProperty('--bgcolor', '#0e0e0e')
            r.style.setProperty('--txtcolor', '#f5fffa')
        } else {
            r.style.setProperty('--bgcolor', '#f5fffa')
            r.style.setProperty('--txtcolor', '#0e0e0e')
        }
    }

    function togglesidebar() {
        let elem = (document.getElementById('sidebar') as HTMLInputElement);
        if (elem.style.display == '' || elem.style.display == 'none') {
            elem.style.display = 'flex'
        } else {
            elem.style.display = 'none'
        }
    }

    return (
        <div>
            <header>
                <ul>
                <Link id='project1' to="/"><li><BsFillPersonFill></BsFillPersonFill></li></Link>
                <Link id='project1' to="/Guessgame"><li><MdFilterFrames></MdFilterFrames></li></Link>
                <Link id='project1' to="/FutebolAPI"><li><BiFootball></BiFootball></li></Link>
                <Link id='project1' to="/RandomStore"><li><FaPaintBrush></FaPaintBrush></li></Link>
                </ul>
            </header>
        </div>
    )

}