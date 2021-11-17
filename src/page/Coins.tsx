import Coin from 'components/coin';
import { CoinInterface } from 'interface/Coin';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coinStyle from 'styles/components/coin.module.scss';

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();

      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <div className={coinStyle.coinPage}>
      <div className={coinStyle.header}>코인</div>

      {!isLoading ? (
        <ul className={coinStyle.coinlist}>
          {coins.map((coin) => (
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
