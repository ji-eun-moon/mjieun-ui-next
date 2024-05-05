import { DataSeries, DataPoint } from "../types/props/ChartProps";

/**
 * 시리즈 데이터 생성 함수
 */
export const generateChartData = (): DataSeries[] => {
  const seriesData: DataSeries[] = [];

  const series1Data: DataPoint[] = generateDataPoints(20);
  seriesData.push({ name: "Series 1", data: series1Data });

  const series2Data: DataPoint[] = generateDataPoints(20);
  seriesData.push({ name: "Series 2", data: series2Data });

  const series3Data: DataPoint[] = generateDataPoints(20);
  seriesData.push({ name: "Series 3", data: series3Data });

  const series4Data: DataPoint[] = generateDataPoints(20);
  seriesData.push({ name: "Series 4", data: series4Data });

  const series5Data: DataPoint[] = generateDataPoints(20);
  seriesData.push({ name: "Series 5", data: series5Data });

  return seriesData;
};

/**
 * 지정된 개수의 데이터 포인트 생성 함수
 * @param count 생성할 데이터 개수
 * @returns
 */
//
export const generateDataPoints = (count: number): DataPoint[] => {
  const dataPoints: DataPoint[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100; // 0부터 100 사이의 랜덤한 x 좌표
    const y = Math.random() * 100; // 0부터 100 사이의 랜덤한 y 좌표
    dataPoints.push({ x, y });
  }

  return dataPoints;
};
