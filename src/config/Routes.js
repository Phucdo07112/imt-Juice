import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Cart from '../page/Cart';
import Home from '../page/Home';
import Product from '../page/Product';
import Search from '../page/Search';
const Routers = () => {
  return (
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/product/:id' exact element={<Product />} />
          <Route path='/search/' exact element={<Home />} />
          <Route path='/search/:slug' exact element={<Search />} />
      </Routes>
  )
};

export default Routers;
