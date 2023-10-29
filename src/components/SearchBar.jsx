import React from 'react'
import { MagnifyingGlass, X } from 'phosphor-react'
import { PRODUCTS } from '../products'
import styles from './SearchBar.css'

const SearchBar = ( placeholder, data ) => {
  return (
    <div className='Search'>
        <div className='searchInputs'>
            <input type='text' />
            <div className='searchIcon'></div>
        </div>
        <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar
