import React from 'react';
import { NavLink, useMatch, useParams } from 'react-router-dom';
import CoinRoute from 'routes/coinRoute';
import coinStyle from 'styles/components/coin.module.scss';

function CoinTab() {
  const { coinId } = useParams();

  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  return (
    <div>
      <div className={coinStyle.tablist}>
        <NavLink
          to={`/${coinId}/chart`}
          className={`${coinStyle.tab} ${
            chartMatch !== null && `${coinStyle.isActive}`
          } `}
        >
          <nav>Chart</nav>
        </NavLink>
        <NavLink
          to={`/${coinId}/price`}
          className={`${coinStyle.tab} ${
            priceMatch !== null && `${coinStyle.isActive}`
          } `}
        >
          <nav>Price</nav>
        </NavLink>
      </div>
      <CoinRoute coinId={coinId ?? ''} />
    </div>
  );
}

export default CoinTab;
