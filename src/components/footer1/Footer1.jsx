import React from "react";
import "./Footer1.css";
import {  faFacebookF , faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
const Footer1 = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12 " style={{marginBottom:"40px"}}>
              <h3
                style={{
                  marginTop: "60px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                SmartRx
              </h3>
              <h5
                style={{
                  marginBottom: "40px",
                  color: "white",
                  fontFamily: "serif",
                  marginLeft:"15px"
                }}
              >
                The name of Trust
              </h5>
              <div
                style={{
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "20px",
                  fontSize: "larger",
                }}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-3" />
                11, Zahoor Ehali Road
              </div>
              <div
                style={{
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "20px",
                  fontSize: "larger",
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mx-3" />
                info@email.com
              </div>
              <div
                style={{
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "20px",
                  fontSize: "larger",
                }}
              >
                <FontAwesomeIcon icon={faPhone} className="mx-3" />
                042 111-865-865
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <h3
                style={{
                  marginTop: "60px",
                  marginBottom: "40px",
                  color: "white",
                }}
              >
                Explore
              </h3>
              <ul>
                <li className="footer-li">Home</li>
                <li className="footer-li">Medicine</li>
                <li className="footer-li">Persnol Care</li>
                <li className="footer-li">baby Care</li>

                <li className="footer-li">Health Devices</li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
            <h3
                style={{
                  marginTop: "60px",
                  marginBottom: "40px",
                  color: "white",
                }}
              >
                Links
              </h3>
              <ul>
                <li className="footer-li">Make an Appointment</li>
                <li className="footer-li">Free Consultion</li>
                <li className="footer-li">FAQ</li>
                <li className="footer-li">Privacy Policy</li>

                <li className="footer-li">Term and Condition</li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
            <h3
                style={{
                  marginTop: "60px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Subscribe
              </h3>
              <h5
                style={{
                  marginBottom: "40px",
                  color: "white",
                  marginLeft:"15px"
                 
                }}
              >
                Subscribe to get latest news
              </h5>
              <div>
                <input type="text" placeholder="Enter here.."/>
                <FontAwesomeIcon icon={faPaperPlane} style={{fontSize:"large",color:"white",border:"1px solid orange" , backgroundColor:"orange",width:"10%",height:"25px",marginBottom:"-5px"}}/>
              </div>
              <div style={{marginTop:"30px"}}>
                <FontAwesomeIcon icon={faFacebookF} className="mx-3" style={{fontSize:"xx-large",color:"white"}}/>
                <FontAwesomeIcon icon={faInstagram} className="mx-3" style={{fontSize:"xx-large",color:"white"}}/>
                <FontAwesomeIcon icon={faTwitter} className="mx-3" style={{fontSize:"xx-large",color:"white"}}/>
                <FontAwesomeIcon icon={faYoutube} className="mx-3" style={{fontSize:"xx-large",color:"white"}}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
