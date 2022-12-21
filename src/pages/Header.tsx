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
                    <li><Link id='project1' to="/"><i><BsFillPersonFill></BsFillPersonFill></i></Link></li>
                    <li> <Link id='project1' to="/Guessgame"><i><MdFilterFrames></MdFilterFrames></i></Link></li>
                    <li><Link id='project1' to="/FutebolAPI"><i><BiFootball></BiFootball></i></Link></li>
                    <li> <Link id='project1' to="/RandomStore"><i><FaPaintBrush></FaPaintBrush></i></Link></li>
                </ul>
            </header>
        </div>
    )

}