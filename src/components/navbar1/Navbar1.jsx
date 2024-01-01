import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './Navbar1.css'


const Navbar1 = () => {
  return (
    <>
       <nav className="navbar">
      <div className="left-icons"  style={{marginLeft:"30px"}}>
      <FontAwesomeIcon icon={faPhone} />
        <span className="phone-number" style={{fontSize:"larger"}}>+92 111-865-865</span>
      </div>
      <div className="right-icons">
      <FontAwesomeIcon icon={faFacebookF} style={{fontSize:"larger"}} className='mx-1'/>
    
     <FontAwesomeIcon icon={faTwitter} style={{fontSize:"larger"}} className='mx-1'/>
     <FontAwesomeIcon icon={faInstagram} style={{fontSize:"larger"}} className='mx-1'/>
     
      
       
      </div>
    </nav>
    </>
  )
}

export default Navbar1
