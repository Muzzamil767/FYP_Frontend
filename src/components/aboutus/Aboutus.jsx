import React from 'react'
import './AboutUs.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import img1 from './images/call-logo.png'
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';


const Aboutus = () => {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <div className='container about-main'>
    <div className='row'>
    <div className='col-lg-7 col-sm-12'>
    <h1 className='about-heading'>SmartRx Special Feature</h1>
    <p className='about-para1'>SmartRX takes pride in offering an array of exceptional features designed to elevate your healthcare experience. We seamlessly integrate cutting-edge technology to provide you with the latest advancements in healthcare solutions. From intelligent prescription management to personalized wellness recommendations, our platform is dedicated to making your health smarter and more accessible. </p>
    <p className='about-para2'>Welcome to SmartRX, where intelligent, compassionate, and patient-focused healthcare is our promise to you. Your health is not just our priority; it's our passion.</p>
    <div className='row'>
    <div className='col-lg-6'>
    <ul className='about-ul'>
      <li>Patient Experience</li>
      <li>Infection Prevention</li>
      <li>Health Check Up</li>
    </ul>

    </div>
    <div className='col-lg-6'>
    <ul className='about-ul'>
      <li>High Risk Procedure</li>
      <li>Emergency Operation</li>
      <li>Standards of Treatments</li>
    </ul>

    </div>

    </div>

    </div>
    <div className='col-lg-5 col-sm-12'>
    <Card className='about-card'>
      
      <Card.Body>
        <Card.Title className='about-card-title'>Walk into Our 24 hour<br/> Open Clinic</Card.Title>
        <Card.Text className='about-card-text'>
          <div style={{marginTop:"10px",marginBottom:"15px"}}>
            Mon-Thu- <span style={{marginLeft:"40px"}}>9:00 AM - 7:00 AM</span>
          </div>
          <div style={{marginTop:"10px",marginBottom:"15px"}}>
            Friday- <span style={{marginLeft:"30px"}}>9:00 AM - 6:00 AM</span>
          </div>
          <div style={{marginTop:"10px",marginBottom:"15px"}}>
            Sat-Sun- <span style={{marginLeft:"40px"}}>Closed</span>
          </div>
        </Card.Text>
       
        <Card.Img className="about-card-image" src={img1}/>
      </Card.Body>
     
    </Card>

    </div>

    </div>

    </div>
    <Footer1/>
    <Footer2/>
    </>
  )
}

export default Aboutus
