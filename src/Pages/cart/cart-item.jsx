import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CartItem = (product) => {
    const { id, productName, price, productImage, category} = product.data
  
    return (
        <div className='cartItem'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productImage} />
                <Card.Body className='description'>
                    <Card.Title><b>{productName}</b></Card.Title>
                    <Card.Text >
                    Price: $ {price} 
                    </Card.Text>
                    <Button variant="primary" className='addToCartBttn' >
                    
                    </Button>
                </Card.Body>
            </Card>
      </div>
      
  )
}


