import React from 'react'
import img1 from './images/medicines2.jpg'
const Discout = () => {
  return (
    <>
      <div className="discount_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-5 offset-md-2">
          <div className="detail-box">
            <h2>
              You get <br/>
              any medicine <br/>
              on
              <span>
                10% discount
              </span>

            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
            </p>
            <div>
              <a href="">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-5">
          <div className="img-box">
            <img src={img1} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Discout;
