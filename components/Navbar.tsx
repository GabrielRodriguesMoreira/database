import '../styles/Navbar.css'
import React from 'react'
import { FiPenTool } from 'react-icons/fi';
import { MdQuiz } from 'react-icons/md';
import { SiExpertsexchange } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'


const helps = ['roboi po', 'eu vou caiir', 'me ajuda aqui vei']

export function  Navbar({stateChanger, estadomudador, ...rest}) {
  return(
    <div className="container">
      <nav className="Header">
        <div className='Logo'><img src="../components/sources/logo.webp" alt="logo" /> </div>
        <div className="navlinks">
          <div className="navlink" onClick={() => {stateChanger(<Ppm />), estadomudador(helps[0])}}><div className="navlink_icon"><FiPenTool /></div> <a >PROJECT 1</a></div>
          <div className="navlink"onClick={() => {stateChanger(<Quiz />), estadomudador(helps[1]) }}><div className="navlink_icon"><MdQuiz /></div> <a >PROJECT 2</a></div>
          <div className="navlink" onClick={() => {stateChanger(<Fut />), estadomudador(helps[2])}}><div className="navlink_icon"><SiExpertsexchange /></div> <a >PROJECT 3</a></div>
          <div className="profile_img" onClick={() => estadomudador('aknsdk')}><img src="../components/sources/profile.gif" alt="profile pic" /></div>
          <div className="menu"> <GiHamburgerMenu /></div>
          <div className='respnavlinks'>
        <div className="respnavlink" onClick={() => {stateChanger(<Ppm />), estadomudador(helps[0])}}> <a >PROJECT 1</a></div>
          <div className="respnavlink"onClick={() => {stateChanger(<Quiz />), estadomudador(helps[1]) }}> <a >PROJECT 2</a></div>
          <div className="respnavlink" onClick={() => {stateChanger(<Fut />), estadomudador(helps[2])}}> <a >PROJECT 3</a></div>
        </div>

        </div>

      </nav>
    </div>
  )
}
