import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import SubHeader from '../../components/SubHeader'
import { PRODUCTS } from '../../products'
import { Product } from '../shop/product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'

export const Cart = () => {
  const { cartItems } = useContext(ShopContext)
  
  return (
    <Container>
      <SubHeader current='cart' /> 
      <div className='cart'>
        <h1>Your cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />
            }
        })}
      </div>
    </Container>
   
  )
}


