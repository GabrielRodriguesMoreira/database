import '../styles/profile.css'
import profilepic from '../componenets/useless.png'

import { AiOutlineGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiCplusplus } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

type Profile = {
    id: string;
}

export function Profile() {


    function hoverin(id) {
        let element = document.getElementById(id);
        element!.style.display = 'block'
        let def = document.getElementById('conhecimentos_description_default');
        def!.style.display = 'none'
    }
    function hoverout(id) {
        let element = document.getElementById(id);
        element!.style.display = 'none'
        let def = document.getElementById('conhecimentos_description_default');
        def!.style.display = 'block'
    }


    return (
        <div className="main_profile_container">
            <section className='profile_left_content'>
                <div className='left_card'>
                    <div className='profile_infos'>

                        <div className='dados'>
                            <h1>Dados</h1>
                            <p><HiOutlineMail />: gabrielrm00220@gmail.com</p>
                            <p><BsTelephoneFill />: (85) 98737-3084</p>
                            <p>Idade: 20 anos</p>
                            <p><GoLocation /> Rua Emília Freitas, 140 - Padre Andrade Fortaleza - CE, 60356-370
                            </p>

                        </div>
                        <div className='formacao'>
                            <h1>Formação</h1>
                            <p>Técnico em Informática pelo IFCE - campus Fortaleza (concluído)</p>
                            <p>Superior em ciência da computação (cursando)</p>
                            <p>Trilha Conectar - Rocketseat</p>
                            <p>Trilha Fundamentar - Rocketseat</p>
                        </div>
                    </div>
                    <div className='profile_conhecimentos'>
                        <div className='conhecimentos_icons'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td onMouseEnter={() => { hoverin('css_description') }} onMouseLeave={() => { hoverout('css_description') }}> <DiCss3 /></td>
                                        <td onMouseEnter={() => { hoverin('html_description') }} onMouseLeave={() => { hoverout('html_description') }}> <AiOutlineHtml5 /></td>
                                        <td onMouseEnter={() => { hoverin('javascript_description') }} onMouseLeave={() => { hoverout('javascript_description') }}><TbBrandJavascript /> </td>
                                    </tr>
                                    <tr>
                                        <td onMouseEnter={() => { hoverin('cplusplus_description') }} onMouseLeave={() => { hoverout('cplusplus_description') }}> <SiCplusplus /></td>
                                        <td onMouseEnter={() => { hoverin('react_description') }} onMouseLeave={() => { hoverout('react_description') }}><DiReact /> </td>
                                        <td onMouseEnter={() => { hoverin('next_description') }} onMouseLeave={() => { hoverout('next_description') }}><TbBrandNextjs /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='conhecimentos_description'>
                            <div id='conhecimentos_description_default' >
                                <h1>DESCRIÇÃO</h1>
                                <p>passe o mouse ou toque sobre um icone para saber a descrição</p>
                            </div>
                            <div id='css_description' style={{ display: 'none' }}>
                                <h1>CSS</h1>
                                <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</p>
                            </div>
                            <div id='javascript_description' style={{ display: 'none' }}>
                                <h1>JAVASCRIPT</h1>
                                <p>É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                            </div>
                            <div id='html_description' style={{ display: 'none' }}>
                                <h1>HTML</h1>
                                <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>
                            </div>
                            <div id='react_description' style={{ display: 'none' }}>
                                <h1>REACT</h1>
                                <p>É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web</p>
                            </div>
                            <div id='next_description' style={{ display: 'none' }}>
                                <h1>NEXT JS</h1>
                                <p>É uma estrutura da web de desenvolvimento front-end React de código aberto criada pela Vercel.</p>
                            </div>
                            <div id='cplusplus_description' style={{ display: 'none' }}>
                                <h1>C++</h1>
                                <p>O C++ é uma linguagem de programação de nível médio, baseada na linguagem C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='profile_right_content'>
                <div className='profile_card'>
                    <div className='profilepic'><img src={profilepic} alt="profile pic" /></div>
                    <h1>Gabriel Rodrigues</h1>
                    <div className='profile_links'>
                        <a target="_blank" href='https://github.com/GabrielRodriguesMoreira'> <AiOutlineGithub /></a>
                        <a target="_blank" href="https://codepen.io/gabrielrodriguesmoreira"> <FiCodepen /></a>
                        <a target="_blank" href="https://wa.me/+558587373084"> <BsWhatsapp /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/gabriel-rodrigues-moreira-00a0081a0/"> <AiOutlineLinkedin /></a>
                    </div>
                    <button className='contact_button'>CONTACT</button>
                </div>
            </section>

        </div>
    )
}