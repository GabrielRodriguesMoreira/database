import '../styles/profile.css'
import profilepic from '../componenets/pictures/bg2.png'
import curriculo from '../componenets/Gabriel_Rodrigues_Curriculo.pdf'
import React, { useEffect, useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandJavascript, TbH1 } from 'react-icons/tb';
import { DiReact } from 'react-icons/di';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_CONVERTKIT_API_SECRET_DATABASE,
    authDomain: "unique-caldron-362117.firebaseapp.com",
    projectId: "unique-caldron-362117",
    storageBucket: "unique-caldron-362117.appspot.com",
    messagingSenderId: "458607624724",
    appId: import.meta.env.VITE_APP_CONVERTKIT_API_SECRET_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var rate = 0
export function Profile() {


    function hoverin(id) {
        let nodes = (document.getElementById('conhecimentos_description')?.childNodes);
        for (let i = 0; i < nodes!.length; i++) {
            (nodes![i] as HTMLElement).style.display = 'none';
        }

        let element = document.getElementById(id);
        element!.style.display = 'block'
        let def = document.getElementById('conhecimentos_description_default');
        def!.style.display = 'none'

    }

    function hoverout(id) {
        if (window.innerWidth > 700) {
            let element = document.getElementById(id);
            element!.style.display = 'none'
            let def = document.getElementById('conhecimentos_description_default');
            def!.style.display = 'block'
        }
    }


    //carregar comentários
    var [comentarios, setcomentarios] = useState<Object[]>([])
    async function load_comments() {
        const querySnapshot = await getDocs(collection(db, "comments"));
        querySnapshot.forEach((doc) => {
            setcomentarios(comentarios => [...comentarios, doc.data()]);
        });
    }

    useEffect(() => {
        load_comments()
    }, []);


    //votação estrelas
    const [star, setstar] = useState([false, false, false, false, false])
    function starfunction(id) {
        rate = id + 1;
        let tempo = [...star]
        for (let i = 0; i <= id; i++) {
            tempo[i] = true
        }
        for (let o = 5; o > (5 - (5 - id)); o--) {
            tempo[o] = false
        }
        setstar(tempo)
    }


    //escrever novo comentário
    async function send_comment() {
        let commment = (document.getElementById("comment_text") as HTMLInputElement);
        let name = (document.getElementById("comment_name") as HTMLInputElement);
        addDoc(collection(db, "comments"), {
            name: name.value,
            comment: commment.value,
            rate: rate
        });
        commment.value = ''
        name.value = ''
        load_comments()
    }

    return (
        <div className='main_profile_container'>
            <section className='profile_infos'>
                <div className='profilepic'><img src={profilepic} alt="" /></div>
               <h2>Gabriel Rodrigues</h2>
               <h3>Front-end Developer</h3>
               <button>Baixar CV</button>
                <div className='profile_links'>
                    <a target="_blank" href='https://github.com/GabrielRodriguesMoreira'> <AiOutlineGithub /></a>
                    <a target="_blank" href="https://codepen.io/gabrielrodriguesmoreira"> <FiCodepen /></a>
                    <a target="_blank" href="https://wa.me/+558587373084"> <BsWhatsapp /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/gabriel-rodrigues-moreira-00a0081a0/"> <AiOutlineLinkedin /></a>
                </div>

            </section>
        </div>
    )

}
