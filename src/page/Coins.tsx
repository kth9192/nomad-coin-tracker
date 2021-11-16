import Coin from 'components/coin';
import React from 'react';
import { Link } from 'react-router-dom';
import coinStyle from 'styles/components/coin.module.scss';

function Coins() {
  const coins = [
    {
      id: 'btc-bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      is_new: false,
      is_active: true,
      type: 'coin',
    },
    {
      id: 'eth-ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      rank: 2,
      is_new: false,
      is_active: true,
      type: 'coin',
    },
    {
      id: 'hex-hex',
      name: 'HEX',
      symbol: 'HEX',
      rank: 3,
      is_new: false,
      is_active: true,
      type: 'token',
    },
  ];

  return (
    <div className={coinStyle.coinPage}>
      <div className={coinStyle.header}>코인</div>

      <ul className={coinStyle.coinlist}>
        {coins.map((coin) => (
          <li className={coinStyle.coin} key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coins;
