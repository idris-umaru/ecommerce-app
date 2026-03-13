import { createContext } from "react";

export const ShopContext = createContext();

const ShopProvider = ({ children}) => {

  const currency = "$";
  const deliveryFee = 10;
  const products = [];   // add your products here later

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