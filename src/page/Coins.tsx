import { getCoinAll } from 'api/coinApi';
import Coin from 'components/coin';
import { ICoin } from 'interface/coin';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import coinStyle from 'styles/components/coin.module.scss';

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', getCoinAll);

  return (
    <div className={coinStyle.coinPage}>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <div className={coinStyle.header}>
        <h1>Coin</h1>
        <button>Toggle Dark Mode</button>
      </div>

      {!isLoading ? (
        <ul className={coinStyle.coinlist}>
          {data?.slice(0, 100).map((coin) => (
            <li className={coinStyle.coin} key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{ name: coin.name }}
                className={coinStyle.coinItemWrapper}
              >
                <img
                  className={coinStyle.coinSymbol}
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                <span>{coin.name} &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span className={coinStyle.loader}>loading...</span>
      )}
    </div>
  );
}

export default Coins;
