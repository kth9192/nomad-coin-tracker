import Chart from 'components/chart/lineChart';
import Price from 'components/price';
import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

interface CoinRouteProps {
  coinId: string;
}

function CoinRoute({ coinId }: CoinRouteProps) {
  return (
    <Routes>
      <Route path={`price`} element={<Price />} />
      <Route path={`chart`} element={<Chart coinId={coinId ?? ''} />} />
    </Routes>
  );
}

export default CoinRoute;
