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
                    <a  target="_blank" href='https://github.com/GabrielRodriguesMoreira'><AiFillGithub /></a>
                    <a  target="_blank" href="https://vercel.com/dashboard"><SiVercel /></a> 
                    <a  target="_blank" href="https://www.linkedin.com/in/gabriel-rodrigues-moreira-00a0081a0/"><AiFillLinkedin /></a> 
                    <a  target="_blank" href="https://wa.me/+558587373084"><SiWhatsapp /></a> 
                </div>
            <section className='mobiledados'>
                    <h1>FORMAÇÃO</h1>
                    <ul>
                        <li>IFCE CAMPUS FORTALEZA</li>
                        <li>SUPERIOR EM CIENCIAS DA COMPUTAÇÃO</li>
                    </ul>

                    <h1>Dados</h1>
                    <ul>
                        <li>Telefone: (85) 987373084</li>
                        <li>Email: gabrielrm00220@gmail.com</li>
                    </ul>
            </section>
        </div>
    )
}