import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from '../components/Coin';
import Coins from '../page/Coins';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
