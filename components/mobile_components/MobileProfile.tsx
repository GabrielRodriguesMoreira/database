import '../../styles/mobilestyles/mobileprofile.css'
import profilepic from '../sources/useless.png'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiVercel } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiCplusplus } from 'react-icons/si';

export function MobileProfile(){
    
    return(
        <div className='mobileprofilecontainer'>
                <img src={profilepic} alt="foto perfil" width={200} />
                <h1>Gabriel Rodrigues</h1>
                <div className='mobilelinks'>
                    <a  target="_blank" href="https://wa.me/+558587373084"><SiWhatsapp /></a> 
                    <a  target="_blank" href='https://github.com/GabrielRodriguesMoreira'><AiFillGithub /></a>
                    <a  target="_blank" href="https://vercel.com/dashboard"><SiVercel /></a> 
                    <a  target="_blank" href="https://www.linkedin.com/in/gabriel-rodrigues-moreira-00a0081a0/"><AiFillLinkedin /></a> 

                </div>
            <section className='mobiledados'>
                    <h1>FORMAÇÃO</h1>
                    <ul>
                        <li> Técnico em informática - IFCE CAMPUS FORTALEZA</li>
                        <li>Superior em ciência da computação (em conclusão)</li>
                    </ul>

                    <h1>Dados</h1>
                    <ul>
                        <li>Telefone: (85) 987373084</li>
                        <li>Email: gabrielrm00220@gmail.com</li>
                        <li>Cidade: Fortaleza/Ce</li>
                        <li>cep: 60356-370</li>
                        <li>Idade: 20 anos</li>
                    </ul>
            </section>

            <section className='mobileconhecimentos'>
                <div className='mobileconhecimentos_icons'>
                    <h1>CONHECIMENTOS</h1>
                <table>
                    <tbody> 
                        <tr>
                            <td onMouseEnter={() => {hoverin('css_description')}} onMouseLeave={() => {hoverout('css_description')}}><FaCss3Alt/></td>
                            <td onMouseEnter={() => {hoverin('javascript_description')}} onMouseLeave={() => {hoverout('javascript_description')}}><DiJavascript1 /></td>
                                        
                        </tr>
                        <tr>
                            <td onMouseEnter={() => {hoverin('react_description')}} onMouseLeave={() => {hoverout('react_description')}}><DiReact /></td>
                            <td onMouseEnter={() => {hoverin('html_description')}} onMouseLeave={() => {hoverout('html_description')}}><AiFillHtml5 /></td>
                        </tr>
                        <tr>
                            <td onMouseEnter={() => {hoverin('next_description')}} onMouseLeave={() => {hoverout('next_description')}}><TbBrandNextjs /></td>
                            <td onMouseEnter={() => {hoverin('cplusplus_description')}} onMouseLeave={() => {hoverout('cplusplus_description')}}><SiCplusplus /></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className= 'mobileconhecimentos_description'>
                    <div id='conhecimentos_description_default'>
                            <h1>Descrição</h1>
                            <p>passe o mouse sobre um icone para saber a descrição</p>
                    </div>
                    <div id='css_description'>
                        <h1>CSS</h1>
                        <p>linguagem usado para estilização de sites</p>
                    </div>
                    <div id='javascript_description'>
                        <h1>JAVASCRIPT</h1>
                            <p>linguagem backend para executar diversas funções</p>
                    </div>
                    <div id='html_description'>
                        <h1>HTML</h1>
                        <p>linguagem de marcação</p>
                    </div>
                    <div id='react_description'>
                        <h1>REACT</h1>
                        <p>framework com muitas utilidades que complemenetam o javascript</p>
                    </div>
                    <div id='next_description'>
                        <h1>NEXT</h1>
                        <p>framework recente que apresenta muitas facilidade principalmente com rotas</p>
                    </div>
                    <div id='cplusplus_description'>
                        <h1>C++</h1>
                        <p>O C++ é uma linguagem de programação de nível médio, baseada na linguagem C</p>
                    </div>
                </div>
            </section>
        </div>
    )


    function hoverin(id){
        let element = document.getElementById(id);
        element!.style.display = 'block'
        let def = document.getElementById('conhecimentos_description_default');
        def!.style.display = 'none'
    }

    function hoverout(id){
        let element = document.getElementById(id);
        element!.style.display = 'none'
        let def = document.getElementById('conhecimentos_description_default');
        def!.style.display = 'block'
    }
}