// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Product from './Pages/Product';
import Navbar from './Navbar';
import Home from "./Pages/Home"; 
import About from "./Pages/About"; 
import Contact from "./Pages/Contact"; 
import Navigate from "./Pages/Navigate"; 

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navigate" element={<Navigate />} />
      </Routes>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter> </>
  );
}

export default App;
