import { useTheme } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import orderBy from "lodash/orderBy";
import sliceString from "../../utils/sliceString";
import getAnalyticsColor from "../../utils/getAnalyticsColor";

const SaleStaticChart = ({ kpis }) => {
  const formattedKpis = kpis?.map((kpi) => ({
    ...kpi,
    name: sliceString(kpi.name, 8),
  }));

  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={orderBy(formattedKpis, ["progress"], ["desc"])}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 1"
          horizontal={false}
          vertical={true}
        />
        <XAxis
          dataKey="name"
          style={{
            fontSize: 12,
          }}
        />
        <YAxis dataKey="progress" />
        <Tooltip labelStyle={{ color: "black" }} />
        <Bar
          dataKey="progress"
          fill="#F44D50"
          barSize={8}
          style={{
            cursor: "pointer",
          }}
        >
          {orderBy(formattedKpis, ["progress"], ["desc"]).map((metric) => (
            <Cell
              key={metric.id}
              fill={getAnalyticsColor(theme.palette.analytics, metric.progress)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SaleStaticChart;
