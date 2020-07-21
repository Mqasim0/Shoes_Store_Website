import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import ProductItem from './Components/ProductItem';
import Footer from './Components/Footer';

const RoutesConfig = () => {
  const [cart, setCart] = useState([]);

  const handleChangeHandler = (val) => {
    setCart([...cart, val]);

    alert('Add to the Cart');
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home handleChangeHandler={(val) => handleChangeHandler(val)} />
          }
        />
        <Route
          path='/product'
          element={
            <Products handleChangeHandler={(val) => handleChangeHandler(val)} />
          }
        />
        <Route
          path='/:slug'
          element={
            <ProductItem
              handleChangeHandler={(val) => handleChangeHandler(val)}
            />
          }
        />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RoutesConfig;
