import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './PopularProducts.css';
import img1 from './images/q1.png'
import img2 from './images/q2.png'
import img3 from './images/q3.png'
import img4 from './images/q4.png'

const PopularProducts = ({ data }) => {


  return (
    <div className='container  main-popular'>
    <div className='row'>
    <div className='col-lg-6 col-sm-12'>
  
    <h4 className='pharmacy-heading'>Best Quality <br/>Pharmacy Store</h4>
    <div>
    <p className='popular-main-text'>Discover our carefully curated selection of premium pharmacy quality products, crafted to meet the highest standards of safety, efficacy, and customer satisfaction.</p>
      <p className='popular-main-text'>When you choose our pharmacy quality products, you're choosing:</p>
      <ul>
        <li>Products that undergo rigorous quality checks and adhere to strict industry regulations.</li>
        <li>Items that have been recommended by healthcare professionals for their effectiveness and reliability.</li>
        <li>Options that prioritize your health and well-being, providing you with confidence in your purchase.</li>
        <li>A commitment to delivering excellence in every aspect of your shopping experience.</li>
      </ul>
    </div>

    </div>
    <div className='col-lg-6 col-sm-12'>
    <div className='row'>
    <div className='col-lg-6 col-sm-12'>
    <Card className='popular-card1'>
      <Card.Img variant="top" className='popular-card-img' src={img1} />
      <Card.Body>
        <Card.Title className='popular-card-title'>Online Pharmacy</Card.Title>
        <Card.Text className='popular-card-text'>
        Experience the ease of ordering your prescriptions.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </div>
    <div className='col-lg-6 col-sm-12'>
    <Card className='popular-card2'>
      <Card.Img variant="top" className='popular-card-img' src={img2} />
      <Card.Body>
        <Card.Title className='popular-card-title'>Medicine Supply</Card.Title>
        <Card.Text className='popular-card-text'>
        Trust us to deliver high-quality medicines.
        </Card.Text>
       
      </Card.Body>
    </Card>

    </div>

    </div>
    <div className='row'>
    <div className='col-lg-6 col-sm-12'> 
    <Card className='popular-card3'>
      <Card.Img className='popular-card-img' variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='popular-card-title'>Covid 19 medical <br/>supply</Card.Title>
        <Card.Text className='popular-card-text'>
        Browse our collection of COVID-19 related medicines.
        </Card.Text>
       
      </Card.Body>
    </Card></div>
    <div className='col-lg-6 col-sm-12'>
     <Card className='popular-card4'>
      <Card.Img variant="top" className='popular-card-img' src={img4} />
      <Card.Body>
        <Card.Title className='popular-card-title'>Medical Equiqment</Card.Title>
        <Card.Text className='popular-card-text'>
        Discover a wide range of cutting-edge medical.
        </Card.Text>
       
      </Card.Body>
    </Card></div>

    </div>

    </div>

    </div>

    </div>
  );
};

export default PopularProducts;
