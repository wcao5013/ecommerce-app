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
      </div>
    </Container>
  
  )
}


