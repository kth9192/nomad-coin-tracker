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

function Coin() {
  const { coinId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const { state } = useLocation();

  const [coinInfo, setCoinInfo] = useState<CoinInfo>();
  const [price, setPrice] = useState<CoinPrice>();
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      console.log(infoData, priceData);

      setCoinInfo(infoData);
      setPrice(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <div className={coinStyle.coinPage}>
      <div className={coinStyle.header}>
        <h1 className={coinStyle.title}>
          {state?.name ? state.name : isLoading ? 'loading...' : coinInfo?.name}
        </h1>
      </div>

      {isLoading ? (
        <span className={coinStyle.loader}>loading...</span>
      ) : (
        <>
          <div className={coinStyle.overview}>
            <div className={coinStyle.overviewItem}>
              <span>Rank:</span>
              <span>{coinInfo?.rank}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>Symbol:</span>
              <span>${coinInfo?.symbol}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>Open Source:</span>
              <span>{coinInfo?.open_source ? 'Yes' : 'No'}</span>
            </div>
          </div>

          <div className={coinStyle.desc}>{coinInfo?.description}</div>

          <div className={coinStyle.overview}>
            <div className={coinStyle.overviewItem}>
              <span>Total Supply:</span>
              <span>{price?.total_supply}</span>
            </div>
            <div className={coinStyle.overviewItem}>
              <span>Max Supply:</span>
              <span>{price?.max_supply}</span>
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
