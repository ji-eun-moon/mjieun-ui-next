import React, { useEffect, useRef } from "react";
import { ScatterChartProps } from "@/types/props/ChartProps";
import * as echarts from "echarts";

const ScatterChart = ({ chartData }: ScatterChartProps) => {
  const chartRef = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const options: echarts.EChartsOption = {
        grid: {
          top: "10%",
          right: "32%",
          bottom: "10%",
          left: "5%",
        },
        legend: {
          show: true,
          left: "70%",
          top: "middle",
          orient: "vertical",
          type: "scroll",
          scrollDataIndex: 0,
          pageIconColor: "#17468f",
          pageIconInactiveColor: "#9a9a9a",
          pageIconSize: 10,
          pageTextStyle: {
            color: "black",
          },
          pageButtonItemGap: 5,
          formatter(name: any) {
            // 범례 아이템 이름이 너무 길 때 줄 바꿈 처리
            const maxLength = 25;
            if (name.length > maxLength) {
              return `${name.slice(0, maxLength)}\n${name.slice(maxLength)}`;
            }
            return name;
          },
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "time",
        },
        yAxis: {
          type: "value",
          scale: true,
        },
        series: chartData.map((series) => ({
          name: series.name,
          data: series.data.map((point) => [point.x, point.y]),
          type: "scatter",
        })),
      };
      chart.setOption(options);
      return () => {
        chart.dispose();
      };
    }
  }, [chartData]);

  return <div ref={chartRef} style={{ width: "100%", height: "200px" }} />;
};

export default ScatterChart;
