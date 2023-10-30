import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, House, TShirt } from 'phosphor-react'
import styles from './navbar.css';

 export const Navbar = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if(window.scrollY > 100) {
            setShow(false)
        }else {
            setShow(true)
        }
    }
    // This is setting to not show navbar after scrolling
    useEffect(() => {
        window.addEventListener('scroll',controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    },[])
    // This add and removes the eventlistner, This may or may not work
  
    return (
    <div>
        <div className={`navbar ${show}`}>
            <div className='links'>
                <Link to="/" className='homelink'>
                    <House size={32} />
                </Link>
                <Link to="/shop" className='shoplink'>
                    <TShirt size={32} />
                </Link>
                <Link to="/cart" className='cartlink'>
                    <ShoppingCart size={32} />  
                </Link>
            </div>
        </div>
    </div>
  )
}


