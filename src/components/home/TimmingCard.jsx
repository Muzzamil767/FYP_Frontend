import React from 'react'
import './TimmingCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const TimmingCard = () => {
  return (
    <>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-4 col-md-12 col-sm-12'>
      <div className='box11'>
      
      <div style={{marginTop:"40px"}} className='mx-2 location-icon'>
      <FontAwesomeIcon icon={faMapMarkerAlt}  /> 

      </div>
      <div style={{marginTop:"40px"}} className='mx-2'>
      11, Zahoor Elahi Road, <br/> Gulberg Lahore
      </div>

      </div>
     
      </div>

      
      <div className='col-lg-4 col-md-12 col-sm-12'>
      <div className='box12'>
      <div style={{marginTop:"40px"}} className='mx-2 location-icon'>
      <FontAwesomeIcon icon={faEnvelope}  /> 

      </div>
      <div style={{marginTop:"40px"}} className='mx-2'>
      +92 111-865-865 <br/> 042 111-865-865
      </div>

      </div>

      </div>
      <div className='col-lg-4 col-md-12 col-sm-12'>
      <div className='box13'>
      <div style={{marginTop:"40px"}} className='mx-2 location-icon'>
      <FontAwesomeIcon icon={faPhone}  /> 

      </div>
      <div style={{marginTop:"40px"}} className='mx-2'>
      SmartRx@gmail.com<br/> SmartRx@hotmail.com
      </div>

      </div>

      </div>

      </div>

      </div>
    </>
  )
}

export default TimmingCard
