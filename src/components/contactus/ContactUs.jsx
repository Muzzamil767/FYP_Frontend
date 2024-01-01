import React from 'react'
import './ContactUs.css'
import Footer1 from '../footer1/Footer1'
import Footer2 from '../footer2/Footer2'
import Navbar1 from '../navbar1/Navbar1'
import Navbar2 from '../navbar2/Navbar2'

const ContactUs = () => {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
     <section class="contact_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="custom_heading-container ">
          <h2>
            Request A call back
          </h2>
        </div>
      </div>
    </div>
    <div class="container layout_padding2">
      <div class="row">
        <div class="col-md-5">
          <div class="form_contaier">
            <form>
              <div class="form-group">
                <label  style={{fontSize:"large",fontWeight:"bold"}} for="exampleInputName1">Name</label>
                <input  type="text" className="form-control" id="exampleInputName1"  style={{borderRadius:"12px",marginTop:"10px"}} />
              </div>
              <div class="form-group">
                <label style={{fontSize:"large",fontWeight:"bold"}} for="exampleInputNumber1">Phone Number</label>
                <input type="text"  className="form-control contact-input" id="exampleInputNumber1" style={{borderRadius:"12px",marginTop:"10px"}}/>
              </div>

              <div class="form-group">
                <label style={{fontSize:"large",fontWeight:"bold"}} for="exampleInputEmail1">Email </label>
                <input type="email"  className="form-control contact-input" id="exampleInputEmail1"style={{borderRadius:"12px",marginTop:"10px"}}/>
              </div>
              
              <div class="form-group">
                <label style={{fontSize:"large",fontWeight:"bold"}} for="exampleInputMessage">Message</label>
                <input type="text"  className="form-control contact-input" id="exampleInputMessage" style={{borderRadius:"12px",marginTop:"10px"}}/>
              </div>
              <button type="submit" class="">Send</button>
            </form>
          </div>
        </div>
        <div class="col-md-7">
          <div class="detail-box">
           
           
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer1/>
  <Footer2/>
    </>
  )
}

export default ContactUs
