import React from 'react'
import { Container } from 'reactstrap'
import SubHeader from '../../components/SubHeader'

export const Cart = () => {
  return (
    <Container>
      <SubHeader current='cart' /> 
      <div>
        <h1>cart</h1>
    </div>
    </Container>
   
  )
}


