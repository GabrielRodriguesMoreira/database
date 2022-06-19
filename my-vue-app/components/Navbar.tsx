import '../styles/Navbar.css'
import React from 'react'
import { FiPenTool } from 'react-icons/fi';
import { MdQuiz } from 'react-icons/md';
import { SiExpertsexchange } from 'react-icons/si';
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'


export function  Navbar({stateChanger, ...rest}) {
  return(
    <div className="container">
      <nav className="Header">
        <div className="Logo"> <img src="../components/sources/logo.webp" alt="logo" /></div>
        <div className="navlinks">
          <div className="navlink" onClick={() => stateChanger(<Ppm />)}><div className="navlink_icon"><FiPenTool /></div> <a >PROJECT 1</a></div>
          <div className="navlink"onClick={() => stateChanger(<Quiz />)}><div className="navlink_icon"><MdQuiz /></div> <a >PROJECT 2</a></div>
          <div className="navlink" onClick={() => stateChanger(<Fut />)}><div className="navlink_icon"><SiExpertsexchange /></div> <a >PROJECT 3</a></div>
          <div className="profile_img"><img src="../components/sources/profile.gif" alt="profile pic" /></div>
          <div className="menu"> <img src="../components/sources/menu.svg" alt="" /></div>
        </div>
          

      </nav>
    </div>
  )
}
