import React, { useState } from 'react'
import { MagnifyingGlass, X } from 'phosphor-react'
import { Link } from 'react-router-dom'

import styles from './SearchBar.css'


function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])

    const handleFilter= ( e ) => {
        const searchWord = e.target.value
        const newFilter = data.filter((value) => {
            return value.productName.includes(searchWord)
        })
        setFilteredData(newFilter)
    }

  return (
    <div className='Search'>
        <div className='searchInputs'>
            <input type='text' placeholder={placeholder} onChange={handleFilter}/>
            <div className='searchIcon'>
                <MagnifyingGlass size={22} color="#f90101" weight="bold" />
            </div>
        </div>
        {filteredData.length != 0 && (
            <div className='dataResult'>
            {filteredData.map((value, key) => {
                return <Link to="/shop" className='dataItem'> {value.productName} </Link>
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar
