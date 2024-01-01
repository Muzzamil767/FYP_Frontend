import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
    <div className='container' style={{marginBottom:"20px"}}>
      <h2 style={{marginTop:"20px"}}><span>REQ</span>UEST A CALL BACK</h2>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-6 col-md-12 col-sm-12'>
      <form>
        <label>Name</label><br/>
        <input type='text' className='name'/><br/>
        <label>Phone</label><br/>
        <input type='text' className='number'/><br/>
        <label>Email</label><br/>
        <input type='email' className='email'/><br/>
        <label>Message</label><br/>
        <textarea type='text' className='message'/><br/>
        <button type='button' className='btn btn-dark btn-lg'>Send</button>
      </form>
      
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12'>
      <div class="box">
  <div class="box-content">
    <h2>Get Now Medicines</h2>
  </div>
</div>

      
      </div>

      </div>

      </div>
      </div>
    </>
  )
}

export default Feedback
