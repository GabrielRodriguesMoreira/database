import '../styles/header.css'
import logo from '../componenets/logo.png'
import { HiMenu } from 'react-icons/hi';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

type Header = {
    id: string;

}

export function Header(){

    function colormode(id){
        var r = (document.querySelector(':root') as HTMLInputElement);
        if((document. getElementById(id) as HTMLInputElement).checked) {
            r.style.setProperty('--bgcolor', '#0e0e0e')
            r.style.setProperty('--txtcolor', '#f5fffa')
        } else {
            r.style.setProperty('--bgcolor', '#f5fffa')
            r.style.setProperty('--txtcolor', '#0e0e0e')
        }
    }

    function togglesidebar(){
        let elem = (document.getElementById('sidebar') as HTMLInputElement);
        if (elem.style.display==''  || elem.style.display=='none'){
            elem.style.display = 'flex'
        } else {
            elem.style.display = 'none'
        }
    }

    function changeselected(id){
        var selected = document.querySelectorAll('.selected');
            selected.forEach(selected => {
            selected.classList.remove('selected');
    
            var newselected = (document.getElementById(id) as HTMLInputElement);
            newselected.setAttribute('class', 'selected')
            });
    }

    return(
        <div className='main_header_container'>
            <img className='logo' src={logo} alt="logo" />
            <div className='header_content'>
                <div className='navlinks'>
                    <a href="">PROJETO 1</a>
                    <a href="">PROJETO 2</a>
                    <a href="">PROJETO 3</a>
                    <a href="">PERFIL</a>
                    <label className="switch">
                        <input type="checkbox" id='checkboxcolor' onClick={() =>{colormode('checkboxcolor')}}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <button className='menu_icon' onClick={togglesidebar}><HiMenu /></button>  
            </div>
            <Sidebar />
        </div>
    )

    function Sidebar(){
        return(
            <div className='sidebar' id='sidebar'>
                <section className='sidebar_icons'>
                <button onClick={togglesidebar} className='close_sidebar_button'><AiOutlineMenuUnfold /></button>
                <label className="switch">
                        <input type="checkbox" id='checkboxcolor2' onClick={()=>{colormode('checkboxcolor2')}}/>
                        <span className="slider"></span>
                </label>
                </section>
                <section className='sidebar_links'>
                    <a id='project1' onClick={() =>{ changeselected('project1');}}>PROJETO 1</a>
                    <a id='project2' onClick={() =>{ changeselected('project2');}}>PROJETO 2</a>
                    <a id='project3' onClick={() =>{ changeselected('project3');}}>PROJETO 3</a>
                    <a className='selected' id='profile' onClick={() =>{ changeselected('profile');}}>PERFIL</a>
                </section>
            </div>

        )
    }

}