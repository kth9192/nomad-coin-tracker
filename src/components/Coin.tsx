import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import coinStyle from 'styles/components/coin.module.scss';

function Coin() {
  const { coinId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const { state } = useLocation();

  return (
    <div className={coinStyle.coinPage}>
      <div className={coinStyle.header}>
        <h1 className={coinStyle.title}>{state?.name || 'loading'}</h1>
      </div>

      {!isLoading ? <span className={coinStyle.loader}>loading...</span> : null}
    </div>
  );
}

export default Coin;
