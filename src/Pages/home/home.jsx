import React from 'react'
import SubHeader from '../../components/SubHeader'
import { Container } from 'reactstrap'
import Lottie from "lottie-react";
import phone from '../../assets/animation/phone.json'
import styles from './home.css'


export const Home = () => {
  return (
    <Container>
      <SubHeader current='' />
      <div className='banner'>
        <h1>homet</h1>
        <div className='centeredLottie'>
          <Lottie animationData={phone} style={{ width: 500, height: 500 }} />
        </div>
        <div className='centertext'>
          <p> 
Explore a vibrant world of cutting-edge electronic products at our online store. Immerse yourself in a spectrum of colors, where technology meets style, and discover a range of electronic devices designed to enhance your lifestyle. From sleek smartphones in striking hues to eye-catching laptops and tablets, our ecommerce platform offers a diverse selection of color electronic products that cater to your individual preferences. Whether you're in search of a vivid smartphone that complements your personality or a vibrant smartwatch to add a pop of color to your daily routine, our curated collection ensures you find the perfect blend of functionality and aesthetics. Dive into our colorful array of electronic gadgets, where innovation meets design, and elevate your tech experience with a touch of brilliance. Shop now and infuse your life with the vibrancy of color and the power of advanced technology.</p>
        </div>
      </div>
    </Container>
  
  )
}


