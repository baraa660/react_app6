// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home/Home.jsx';
import Products from './component/products/Products.jsx';
import Resturant from './component/resturant/Resturant.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import PageNotFound from './component/pageNotFound/PageNotFound.jsx';
import Menu from './component/menu/Menu.jsx';

function App() {
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resturant" element={<Resturant />} >
          <Route path="pizza" element={<Menu qa="pizza"/>} />
        <Route path="salad" element={<Menu qa="salad"/>} />
        <Route path="onion" element={<Menu qa="onion"/>} />
            </Route>
          <Route path="/Products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    
  );
}

export default App;