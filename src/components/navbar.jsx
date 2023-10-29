import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, House, TShirt } from 'phosphor-react'
import styles from './navbar.css';

 export const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='links'>
                <Link to="/">
                    <House size={32} />
                </Link>
                <Link to="/shop">
                    <TShirt size={32} />
                </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />  
                </Link>
            </div>
        </div>
    </div>
  )
}


