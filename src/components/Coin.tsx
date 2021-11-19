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
import coinStyle from 'styles/components/coin.module.scss';
import { Link } from 'react-router-dom';
import { getCoinInfoData, getCoinPriceData } from 'api/coinApi';
import { useQuery } from 'react-query';

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
  );

  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  useEffect(() => {
    (async () => {})();
  }, [coinId]);

  const isLoading = infoLoading || priceLoading;
  return (
    <div className={coinStyle.coinPage}>
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
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? 'Yes' : 'No'}</span>
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
            <nav
              className={`${coinStyle.tab} ${
                chartMatch !== null && `${coinStyle.isActive}`
              } `}
            >
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </nav>
            <nav
              className={`${coinStyle.tab} ${
                priceMatch !== null && `${coinStyle.isActive}`
              } `}
            >
              <Link to={`/${coinId}/price`}>Price</Link>
            </nav>
          </div>

          <Outlet />
        </>
      )}
    </div>
  );
}

export default Coin;
