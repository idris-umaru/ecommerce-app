import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState([]);

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

  // Total number of items in cart — use this for the cart icon badge
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const value = {
    currency,
    deliveryFee,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalItems,   // ← use this in your cart icon
    totalPrice,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;