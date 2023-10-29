import React from 'react'
import { MagnifyingGlass, X } from 'phosphor-react'

import styles from './SearchBar.css'


function SearchBar({ placeholder, data }) {


  return (
    <div className='Search'>
        <div className='searchInputs'>
            <input type='text' placeholder={placeholder}/>
            <div className='searchIcon'>
                <MagnifyingGlass size={22} color="#f90101" weight="bold" />
            </div>
        </div>
        <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar
