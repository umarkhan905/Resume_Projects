import React, { useState } from "react";
import Navbar from "./Components/component/Navbar";
import Home from "./Components/component/Home";
import About from "./Components/component/About";
import Dishes from "./Components/component/Dishes";
import Chefs from "./Components/component/Chefs";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Components/component/Cart";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const cartFunc = (value) => {
    setCartProducts([...cartProducts, value]);
  };
  const removeItems = (id) => {
    const filterdData = cartProducts.filter((_, index) => {
      return id !== index;
    });
    setCartProducts(filterdData);
  };
  console.log(cartProducts);
  return (
    <>
      <Router>
        <Navbar
          logo="Food"
          address="Call Now:+92302-9615132"
          cartProducts={cartProducts}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <About />
                <Dishes setCartProducts={cartFunc} />
                <Chefs />
              </>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart cartProducts={cartProducts} removeItems={removeItems} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/dishes"
            element={<Dishes setCartProducts={cartFunc} />}
          />
          <Route path="/chef" element={<Chefs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
