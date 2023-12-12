import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';

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
      <BrowserRouter>
        {isLoggedIn ? (
          <>
            <Navbar cart={cart} handleLogout={handleLogout} />
            <Toolbar />
            <Routes>
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
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              />
              <Route
              path="*"
              element={<h1>page not found</h1>}
            />
            </Routes>
          </>
        ): (
          <Routes>
            <Route
              path="/"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path='/reset password' element={<ResetPassword/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
