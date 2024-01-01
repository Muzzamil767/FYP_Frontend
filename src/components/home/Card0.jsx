import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from './images/gel.png'
import img2 from './images/mask.png'
import './Card0.css'
const Card0 = () => {
  return (
    <>
      <div className='container'>
      <div className='row card-container2'>
      <div className='col-lg-4 col-sm-12'>
      <Card className="card-14"> 
              <Card.Body>
                <Card.Title style={{color:"white", marginTop:"30px",fontWeight:"bolder",fontSize:"xx-large",marginLeft:"30px"}}>Save 20% <br/>On Sanitizer</Card.Title>
                <Card.Text style={{marginRight:"170px",marginTop:"30px",color:"#07236f",fontWeight:"bolder",fontSize:"x-large"}}>
                 99.9% Germ  Protection
                </Card.Text>
                <Button className="button-14">Buy Now</Button>
              </Card.Body>
              <img className="custom-card-img3" src={img1} alt="Image" />
            </Card>

      </div>
      <div className='col-lg-8 col-sm-12'>
      <Card className="card-15"> 
              <Card.Body>
                <Card.Title style={{color:"white", marginTop:"30px",fontWeight:"bolder",fontSize:"xx-large",marginLeft:"30px"}}>Covid Protection <br/> Face Mask</Card.Title>
                <Card.Text className='text-card' style={{marginTop:"30px",color:"#28e5dd",fontWeight:"bolder",fontSize:"x-large"}}>
                 Save Upto 15%
                </Card.Text>
                <Button className="button-15">Buy Now</Button>
              </Card.Body>
              <img className="custom-card-img3" src={img2} alt="Image" />
            </Card>

</div>

      </div>

      </div>
    </>
  )
}

export default Card0
