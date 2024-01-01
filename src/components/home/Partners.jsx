import React from 'react'
import img1 from './images/tcs-partner.png'
import img2 from './images/standard-chartered.png'
import img3 from './images/chughtai.png'
import img4 from './images/hbl-partner.png'
import img5 from './images/meezan-partner.png'
import img6 from './images/essa.png'
import './Partners.css'
const Partners = () => {
  return (
    <>
    <div className='container'>
      <h3 >Our Partners</h3>
      <div className='row'>
      <div className='col-lg-4 col-sm-12'>
      <img src={img1}/>

      </div>
      <div className='col-lg-4 col-sm-12'>
      <img src={img2} />

</div>
 <div className='col-lg-4 col-sm-12'>
 <img src={img3} />

</div>
</div>
<div className='row'>
<div className='col-lg-4 col-sm-12'>
      <img src={img4}/>

      </div>
      <div className='col-lg-4 col-sm-12'>
      <img src={img5} />

</div>
 <div className='col-lg-4 col-sm-12'>
 <img src={img6} />

</div>

</div>
      </div>

    </>
  )
}

export default Partners
