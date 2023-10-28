import React from 'react'
import { Container } from 'reactstrap'
import SubHeader from '../../components/SubHeader'
import { PRODUCTS } from '../../products'
import { Product } from './product'

 export const Shop = () => {
  return (
    <Container>
      <SubHeader current='shop' />
      <div className='shop'>
        <div className='shopTitle'>
          <h1>Wan's sweatshop</h1>
        </div>
        <div className='products' >
          {' '}
          { PRODUCTS.map((product) => (
            <Product key= {product.id} data={product}/>
          ))}

        </div>
      </div>
    </Container>
    
  )
}


