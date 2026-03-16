import React, { useContext }from 'react'
import { ShopContext } from '../../context/ShopContext';

     const LatestCollection = () => {

     const { Products } = useContext(ShopContext);
    
     console.log(Products);
      
  
  return (
   <div>
    <h2>Latest Collection</h2>
   </div>
     
  )
}

export default LatestCollection;
