// Resturant.jsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Menu from '../menu/Menu';

function Resturant() {
  return (
    <div>
      <div>
        <Link className='mx-2 fs-5 text-decoration-none text-secondary' to="pizza">Pizza</Link>
        <Link className='mx-2 fs-5 text-decoration-none text-secondary' to="salad">Salad</Link>
        <Link className='mx-2 fs-5 text-decoration-none text-secondary' to="onion">Onion</Link>
      </div>

      <Routes>
        <Route path="/pizza" element={<Menu qa="pizza"/>} />
        <Route path="/salad" element={<Menu qa="salad"/>} />
        <Route path="/onion" element={<Menu qa="onion"/>} />
      </Routes>
    </div>
  );
}

export default Resturant;