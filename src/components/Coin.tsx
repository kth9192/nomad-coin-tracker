import { CoinInfo, CoinPrice } from 'interface/coin';
import Chart from 'article/chart';
import Price from 'article/price';
import React, { useEffect, useState } from 'react';
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from 'react-router';
import { Helmet } from 'react-helmet';
import coinStyle from 'styles/components/coin.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { getCoinInfoData, getCoinPriceData } from 'api/coinApi';
import { useQuery } from 'react-query';
import CoinRoute from 'routes/coinRoute';

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation();

  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInfo>(
    ['getCoinInfo', coinId],
    () => getCoinInfoData(coinId ?? ''),
  );

  const { isLoading: priceLoading, data: priceData } = useQuery<CoinPrice>(
    ['getCoinPrice', coinId],
    () => getCoinPriceData(coinId ?? ''),
    {
      refetchInterval: 10000,
    },
  );

  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  useEffect(() => {
    (async () => {})();
  }, [coinId]);

  const isLoading = infoLoading || priceLoading;
  return (
    <div className={coinStyle.coinPage}>
      <Helmet>
        <title>
          {state?.name ? state.name : isLoading ? 'loading...' : infoData?.name}
        </title>
      </Helmet>
      <div className={coinStyle.header}>
        <h1 className={coinStyle.title}>
          {state?.name ? state.name : isLoading ? 'loading...' : infoData?.name}
        </h1>
      </div>

      {isLoading ? (
        <span className={coinStyle.loader}>loading...</span>
      ) : (
        <>
          <div className={coinStyle.overview}>
            <div className={coinStyle.overviewItem}>
              <span>순위</span>
              <span>{infoData?.rank}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>티커</span>
              <span>{infoData?.symbol}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>가격</span>
              <span>${priceData?.quotes.USD.price}</span>
            </div>
          </div>
          <div className={coinStyle.desc}>{infoData?.description}</div>
          <div className={coinStyle.overview}>
            <div className={coinStyle.overviewItem}>
              <span>Total Supply:</span>
              <span>{priceData?.total_supply}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </div>
          </div>
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
          {/* <Outlet /> */}
          <CoinRoute coinId={coinId ?? ''} />
        </>
      )}
    </div>
  );
}

export default Coin;
