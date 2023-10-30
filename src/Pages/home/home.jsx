import React from 'react'
import SubHeader from '../../components/SubHeader'
import { Container } from 'reactstrap'
import Lottie from "lottie-react";
import phone from '../../assets/animation/phone.json'
import './home.css'


export const Home = () => {
  return (
    <Container>
      <SubHeader current='' />
      <div className='banner'>
        <h1>homet</h1>
        <div className='centeredLottie'>
          <Lottie animationData={phone} style={{ width: 300, height: 300 }} />
        </div>
      </div>
    </Container>
  
  )
}


