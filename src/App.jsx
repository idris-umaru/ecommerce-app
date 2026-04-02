import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Navbar from './components/NavBar/NavBar';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;