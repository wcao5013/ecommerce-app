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
        <Lottie animationData={phone} style={{ width: 300, height: 300, }}/>
      </div>
    </Container>
  
  )
}


