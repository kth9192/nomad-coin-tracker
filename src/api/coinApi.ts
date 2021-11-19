export const getCoinAll = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/coins`).then((res) => {
    return res.json();
  });
};

export const getCoinInfoData = (coinId: string) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/coins/${coinId}`).then(
    (res) => res.json(),
  );
};

export const getCoinPriceData = (coinId: string) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/tickers/${coinId}`).then(
    (res) => res.json(),
  );
};
