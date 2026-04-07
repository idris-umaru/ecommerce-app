import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);   // ← stores placed orders

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

  const clearCart = () => setCartItems([]);

  // Saves current cart as a new order then clears cart
  const placeOrder = () => {
    const newOrder = {
      id: Date.now(),
      items: [...cartItems],
      total: totalPrice + (totalPrice >= 50 ? 0 : deliveryFee),
      date: new Date().toLocaleDateString(),
      status: 'Order Placed',
    };
    setOrders(prev => [...prev, newOrder]);
    clearCart();
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
    clearCart,
    placeOrder,   // ← use this instead of clearCart in PlaceOrder.jsx
    orders,       // ← use this in Orders.jsx
    totalItems,
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