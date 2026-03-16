import { createContext } from "react";
import { products } from "../data/Product";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  console.log("ShopProvider is rendering – products count:", products?.length || "undefined");

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