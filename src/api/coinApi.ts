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

export const getCoinInfoByTimeline = (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`,
  ).then((res) => res.json());
};
