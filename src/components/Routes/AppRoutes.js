import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/landingPage';
import Auth from '../../pages/Auth/Auth';
import ProductList from '../../pages/ProductList/ProductList';
import Product from '../../pages/Product/Product';
import Cart from '../../pages/Cart/Cart';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/login' element={<Auth/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id/detail" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
