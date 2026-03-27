import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate('/collection')  // go to collection page to show results
    }
  }

  if (!showSearch) return null  // hidden until search icon is clicked

  return (
    <div className='searchbar-wrapper'>
      <form className='searchbar-form' onSubmit={handleSearch}>
        <FaSearch size={16} className='searchbar-icon' />
        <input
          type='text'
          placeholder='Search products...'
          className='searchbar-input'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <button
          type='button'
          className='searchbar-close'
          onClick={() => {
            setShowSearch(false)
            setSearch('')
          }}
        >
          <FaTimes size={16} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar