import '../styles/header.css'
import logo from '../componenets/logo.webp'
import { HiMenu } from 'react-icons/hi';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom'
type Header = {
    id: string;

}

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
        <div className='main_header_container'>
            <div className='logo'>
                <div className='logo_img'><img src={logo} alt="logo" /></div>
                <text >Gabriel <br /> Rodrigues</text>
            </div>

            <div className='header_content'>
                <div className='navlinks'>
                    <Link to="/Clicker">PROJETO 1</Link>
                    <Link to="/FutebolAPI">PROJETO 2</Link>
                    <Link to="/RandomStore">PROJETO 3</Link>
                    <Link to="/">PERFIL</Link>
                    <label className="switch">
                        <input type="checkbox" id='checkboxcolor' onClick={() => { colormode('checkboxcolor') }} />
                        <span className="slider"></span>
                    </label>
                </div>
                <button className='menu_icon' onClick={togglesidebar}><HiMenu /></button>
            </div>
            <Sidebar />
        </div>
    )

    function Sidebar() {
        return (
            <div className='sidebar' id='sidebar'>
                <section className='sidebar_icons'>
                    <button onClick={togglesidebar} className='close_sidebar_button'><AiOutlineMenuUnfold /></button>
                    <label className="switch">
                        <input type="checkbox" id='checkboxcolor2' onClick={() => { colormode('checkboxcolor2') }} />
                        <span className="slider"></span>
                    </label>
                </section>
                <section className='sidebar_links'>
                    <Link id='project1' to="/Clicker">PROJETO 1</Link>
                    <Link id='project2' to="/FutebolAPI">PROJETO 2</Link>
                    <Link id='project3' to="/RandomStore">PROJETO 3</Link>
                    <Link className='selected' id='profile' to="/">PERFIL</Link>
                </section>
            </div>

        )
    }

}