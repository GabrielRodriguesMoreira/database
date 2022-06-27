import '../styles/mobilestyles/mobileapp.css'
import React,{ useState } from 'react'
import {MobileNavbar} from '../components/mobile_components/MobileNavbar'
import {MobileProfile} from '../components/mobile_components/MobileProfile'



export default function  MobileApp() { 
    return (
      <div>
            <MobileNavbar />
            <div className='navbarspacing'></div>
            <MobileProfile />
      </div>
    )
}


