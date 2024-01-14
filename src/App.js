import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import PageDetail from "./pages/PageDetail";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import ResetPassword from "./components/ResetPassword";
import StartingPop from "./pages/StartingPop";
import CheckoutForm from "./pages/CheckoutForm";
import Footer from "./components/Footer";
import { HashLoader, PacmanLoader } from "react-spinners";
import FeaturedProducts from "./pages/FeaturedProducts";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleLogoutDialog = () => {
    setLogoutAlert(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLogoutAlert(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Router>
      {loading ? (
        <HashLoader
          size={130}
          color="white"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
        />
      ) : (
        <>
          <StartingPop />
          <Navbar
            cart={cart}
            handleLogout={handleLogout}
            handleLogoutDialog={handleLogoutDialog}
            isLoggedIn={isLoggedIn}
            logoutAlert={logoutAlert}
            setLogoutAlert={setLogoutAlert}
          />
          <Routes>
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/product"
              element={<Product addToCart={addToCart} />}
            />
            <Route
              path="/productDetails/:id"
              element={<PageDetail addToCart={addToCart} />}
            />
            <Route path="/featured-products" element={FeaturedProducts} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />
              }
            />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </>
      )}
      <Footer />
    </Router>
  );
}

export default App;
