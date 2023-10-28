import React from 'react'
import { Container } from 'reactstrap'
import SubHeader from '../../components/SubHeader'

 export const Shop = () => {
  return (
    <Container>
      <SubHeader current='shop' />
      <div className='shop'>
        <div className='shopTitle'>
          <h1>Wan's sweatshop</h1>
        </div>
        <div className='products'>

        </div>
      </div>
    </Container>
    
  )
}


