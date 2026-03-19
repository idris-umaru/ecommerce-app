import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const [cartItems, setCartItems] = useState([]);

  // Add to cart — increases quantity if already exists
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find(item => item._id === product._id);
      if (exists) {
        return prevItems.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== productId));
  };


  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const value = {
    currency,
    deliveryFee,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;