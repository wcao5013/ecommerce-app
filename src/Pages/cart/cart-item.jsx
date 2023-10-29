import React from 'react'
import { Button, Card } from 'react-bootstrap'


export const CartItem = (product) => {
    const { id, productName, price, productImage, category} = product.data
  
    return (
        <div className='cartItem'>
            <Card style={{display: 'flex', flexDirection: 'row'}}>
                <Card.Img  variant='top' src={productImage} className='image' />
                <Card.Body className='description'>
                    <Card.Title><b>{productName}</b></Card.Title>
                    <Card.Text className='text' >
                    Price: $ {price}
                    </Card.Text>
                    <Button variant="primary" className='addToCartBttn' >
                    
                    </Button>
                </Card.Body>
            </Card>
      </div>
      
  )
}


