import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import PageDetail from './pages/PageDetail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './pages/Cart';
import ResetPassword from './components/ResetPassword';
import Footer from './components/Footer';
import StartingPop from './pages/StartingPop';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    console.log(product);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <StartingPop />
      <BrowserRouter>
        <Navbar cart={cart} handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path='/reset password' element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product"
            element={<Product addToCart={addToCart} />}
          />
          <Route
            path="/productDetails/:id"
            element={<PageDetail addToCart={addToCart} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="*"
            element={<h1>page not found</h1>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
