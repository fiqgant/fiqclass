import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>TRPL Store</h1>
          <nav>
            <Link to="/">Products</Link>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
