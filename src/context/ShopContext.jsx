import { createContext } from "react";
import { products } from "../data/product";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

 
  const value = {
    currency,
    deliveryFee,
    products,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;