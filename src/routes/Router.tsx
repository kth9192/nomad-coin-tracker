import Chart from 'article/chart';
import Price from 'article/price';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from '../components/coin';
import Coins from '../page/coins';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path={`price`} element={<Price />} />
          <Route path={`chart`} element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
