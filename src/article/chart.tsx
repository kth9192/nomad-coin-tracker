import { getCoinInfoByTimeline } from 'api/coinApi';
import { CoinInfoHistorical } from 'interface/coin';
import React from 'react';
import { useQuery } from 'react-query';
import Apexcharts from 'react-apexcharts';
import { format } from 'date-fns';

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<CoinInfoHistorical[]>(
    ['ohlcv', coinId],
    () => getCoinInfoByTimeline(coinId),
    { refetchInterval: 10000 },
  );

  return (
    <article>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <Apexcharts
          type="line"
          series={[{ name: 'sales', data: data?.map((price) => price.close) }]}
          options={{
            chart: {
              id: 'basic-bar',
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },

              categories: data?.map((price) =>
                format(new Date(price.time_close), 'yy.MM.dd'),
              ),
            },
            yaxis: { show: false },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#0fbcf9'],
            theme: {
              mode: 'dark',
            },
            stroke: {
              curve: 'smooth',
              width: 3,
            },
            grid: {
              show: false,
            },
            tooltip: { y: { formatter: (value) => `$${value.toFixed(3)}` } },
          }}
          width="500"
          height="300"
        />
      )}
    </article>
  );
}

export default Chart;
