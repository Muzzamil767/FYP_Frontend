import React from 'react'
import Card1 from './Card1'
import Discout from './Discout'
import PopularProducts from './PopularProducts'
import Feedback from './Feedback'
import TimmingCard from './TimmingCard'
import Intro from './Intro'
import Partners from './Partners'
import Card0 from './Card0'
import  product from '../products/ProductData'
import Navbar1 from '../navbar1/Navbar1'
import Navbar2 from '../navbar2/Navbar2'
import Footer1 from '../footer1/Footer1'
import Footer2 from '../footer2/Footer2'

const Home = () => {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <Card0/>
      <Card1/>
      <PopularProducts data={product}/>
      <Discout/>
      
      <TimmingCard/>
      <Intro/>
      <Partners/>
      <Footer1/>
      <Footer2/>
    </>
  )
}

export default Home
