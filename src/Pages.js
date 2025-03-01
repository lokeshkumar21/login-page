import React from 'react';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Pages = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <div>
           <Link to="/">Login</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Product">Product</Link>
           
        </div> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Pages;
