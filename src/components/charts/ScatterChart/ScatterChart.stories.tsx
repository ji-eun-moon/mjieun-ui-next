import ScatterChart from ".";
import { generateChartData } from "@/utils/chartDataUtils";

export default {
  title: "chart/ScatterChart",
  tags: ["autodocs"],
  component: ScatterChart,
  argTypes: {
    title: {
      description: "차트 제목",
    },
    chartData: {
      description: "차트에 들어갈 항목",
    },
  },
};

export const Default = {
  args: {
    chartData: generateChartData(),
  },
};
