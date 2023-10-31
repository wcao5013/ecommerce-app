import React, { useContext} from 'react'
import { Button, Card } from 'react-bootstrap'
import { Input } from 'reactstrap'
import { ShopContext } from '../../context/shop-context'
import styles from './cart.css'


export const CartItem = (product) => {
    const { id, productName, price, productImage, category} = product.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
    
    return (
        <div className='cartItemCard'>
            <Card >
                <Card.Img  variant='top' src={productImage} className='image' />
                <Card.Body className='description'>
                    <Card.Title><b>{productName}</b></Card.Title>
                    <Card.Text className='text' >
                    Price: $ {price}
                    </Card.Text>
                    <div className='countHandler'>
                        <Button onClick={() => removeFromCart(id)}> - </Button>
                        <Input  value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                        <Button onClick={() => addToCart(id)}> + </Button>
                    </div>
                </Card.Body>
            </Card>
      </div>
      
  )
}
// style={{display: 'flex', flexDirection: 'row'}}


