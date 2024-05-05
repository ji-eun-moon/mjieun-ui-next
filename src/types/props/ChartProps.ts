export interface IPieChartData {
  value: number;
  name: string;
}

export interface PieChartProps {
  title: string;
  pieColors: string[];
  chartData: IPieChartData[];
}

export interface BarChartProps {
  title: string;
  chartDataValue: number[];
  chartDataName: string[];
  barColors: string[];
}

export interface UsageChartProps {
  isSmooth: boolean;
  chartColor: string;
  chartDataValue: number[];
  chartDataName: string[];
}

export interface ResponseTimeChartProps {
  isSmooth: boolean;
  chartColor: string;
  chartDataValue: number[];
  chartDataName: string[];
  responseCodeList: number[];
}

export interface DataPoint {
  x: number;
  y: number;
}

export interface DataSeries {
  name: string;
  data: DataPoint[];
}

export interface ScatterChartProps {
  chartData: DataSeries[];
}
