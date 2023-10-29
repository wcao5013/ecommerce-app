import React, { useState } from 'react'
import { MagnifyingGlass, XSquare } from 'phosphor-react'
import { Link } from 'react-router-dom'

import styles from './SearchBar.css'


function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState('')

    const handleFilter= ( e ) => {
        const searchWord = e.target.value
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.productName.toLowerCase().includes(searchWord.toLowerCase())
        })
        if ( searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
        
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered('')
    }

    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            window.location.href = '/shop'
            console.log('Entered key pressed')
        }
    }

  return (
    <div className='Search'>
        <div className='searchInputs'>
            <input type='search' placeholder={placeholder} value={wordEntered} onChange={handleFilter}  onKeyDown={handleKeyDown}/>
            <div className='searchIcon'>
                {filteredData.length === 0 ? <MagnifyingGlass size={22} color="#f90101" weight="bold" /> : (
                    <XSquare size={22} color="#f90101" weight='bold' id="clearBtn" onClick={clearInput} />
                )}
                
            </div>
        </div>
        {filteredData.length != 0 && (
            <div className='dataResult'>
            {filteredData.slice(0, 5).map((value, key) => {
                return <Link to="/shop" className='dataItem'> {value.productName} </Link>
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar
