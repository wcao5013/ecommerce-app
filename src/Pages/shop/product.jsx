import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ShopContext} from '../../context/shop-context'

export const Product = (product) => {
    const { id, productName, price, productImage, category} = product.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    return (
    // <div className='product'>
    //   <img src={productImage} />
    //   <div className='description'>
    //     <p><b>{productName}</b></p>
    //     <p>{category}</p>
    //     <p>${price}</p>
    //   </div>
    // </div>
    
    //orginially wanted to use above but decided to use a card
      <div className='product'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body className='description'>
          <Card.Title><b>{productName}</b></Card.Title>
          <Card.Text >
            This {productName} is part of the {category} category<br></br>
            Price: $ {price} 
          </Card.Text>
          <Button variant="primary" className='addToCartBttn' onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          {/* add # next to add cart */}
          </Button>
        </Card.Body>
      </Card>
      </div>
      
  )
}


