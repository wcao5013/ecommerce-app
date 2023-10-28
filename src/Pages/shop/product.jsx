import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Product = (product) => {
    const { id, productName, price, productImage, category} = product.data
    return (
    // <div className='product'>
    //   <img src={productImage} />
    //   <div className='description'>
    //     <p><b>{productName}</b></p>
    //     <p>{category}</p>
    //     <p>${price}</p>
    //   </div>
    // </div>
      <div className='product'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body className='description'>
          <Card.Title><b>{productName}</b></Card.Title>
          <Card.Text >
            This {productName} is part of the {category} category
            Price: $ {price} 
          </Card.Text>
          <Button variant="primary">Buy me</Button>
        </Card.Body>
      </Card>
      </div>
      
  )
}


