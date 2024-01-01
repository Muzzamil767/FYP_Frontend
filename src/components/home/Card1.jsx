import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import lab from './images/lab.jpg'
import doctor from './images/doctor.jpg'
import description from './images/description.jpg'
import home from './images/home.jpg'
import Pharmacy from './images/pharmacy.jpg'
import './Card1.css'
import { Link } from 'react-router-dom';

const Card1 = () => {
  return (
    <>
       <div className="container">
        <div className="row card-container">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card className="card-1">
            
              <Card.Body>
                <Card.Title>Upload prescription for Special Medicines.</Card.Title>
                <Card.Text style={{marginRight:"130px",color:"black"}}>
                 
                </Card.Text>
                <Link to="/prescription"><Button className="button-1" variant="warning">Order Now</Button></Link>
              </Card.Body>
              <img className="custom-card-img" src={description} alt="Image" />
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card className="card-2">
           
              <Card.Body>
                <Card.Title>Speak to Specialist</Card.Title>
                <Card.Text  style={{marginRight:"150px",color:"black"}}>
               
                </Card.Text>
                <Button className="button-2" >Book Now</Button>
              </Card.Body>
              <img className="custom-card-img" src={doctor} alt="Image" />
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Card className="card-3" >
              
              <Card.Body>
                <Card.Title>At Home  service</Card.Title>
                <Card.Text style={{marginRight:"200px",color:"black"}}>
                
                </Card.Text>
                <Button className="button-3" >Book Now</Button>
              </Card.Body>
              <img className="custom-card-img" src={home} alt="Image" />
            </Card>
          </div>
         
        </div>
      

      {/*this is second row

      
      <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 ">
      <Card className="card-4"> 
              <Card.Body>
                <Card.Title>Lab At Home</Card.Title>
                <Card.Text>
                 Lab Test & Checkups
                </Card.Text>
                <Button className="button-4">Book Now</Button>
              </Card.Body>
              <img className="custom-card-img" src={lab} alt="Image" />
            </Card>
            </div>
            <div className="col-xl- col-lg-7 col-md-6 col-sm-12 col-xs-12 ">
             <Card className="card-5" >
              <Card.Body>
                <Card.Title>Pharmacy</Card.Title>
                <Card.Text style={{color:"black", marginLeft:"-370px"}}>
                Upload a prescription <br/> we will create order!
                </Card.Text>
                <Button className="button-5">Book Now</Button>
              </Card.Body>
              <img className="custom-card-img2" src={Pharmacy} alt="Image" />
            </Card>
            </div>
      </div>
     
      */ }
      </div>
    </>
  )
}

export default Card1
