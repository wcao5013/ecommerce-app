import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = ( product ) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    //set up deconstruction to set cart ##
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }
    //above are the request to add, remove and updatecart


    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount}

    
    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {product.children}
        </ShopContext.Provider>
    )
}


