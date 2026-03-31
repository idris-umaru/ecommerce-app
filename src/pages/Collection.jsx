import React, { useState, useContext } from 'react'
import { products } from '../data/product'
import { ShopContext } from '../context/ShopContext'   // ← was missing
import './Collection.css'
import Title from '../components/Title/Title'
import ProductItem from '../components/ProductItem/ProductItem'

const categories = ['All', 'Women', 'Men', 'Unisex', 'Accessories']

const Collection = () => {

    const [activeCategory, setActiveCategory] = useState('All')
    const { search, showSearch } = useContext(ShopContext)  
    const filtered = products.filter(p => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className='collection-page'>

      <div className='collection-header'>
        <Title text1={'OUR'} text2={'COLLECTION'} />
        <p className='collection-description'>
          Browse our full range of curated products for every style and occasion.
        </p>
      </div>

     
      <div className='collection-filters'>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className='collection-count'>
        Showing <strong>{filtered.length}</strong> products
      </p>

      <div className='collection-grid'>
        {filtered.map(product => (
          <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

    </div>
  )
}

export default Collection