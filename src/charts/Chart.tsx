import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  date: string;
  shipments: number;
};

type Props = {
  data: DataPoint[];
};

const Chart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ bottom: 30, left: 20 }}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7F56D9" stopOpacity={0.8} />
            <stop offset="95.55%" stopColor="#FFFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="linear"
          dataKey="shipments"
          stroke="#7F56D9"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#color)"
        />
        <XAxis xAxisId="0" dataKey="date" hide={true} />
        <XAxis
          xAxisId="1"
          tickLine={false}
          dataKey="monthDate"
          interval="preserveStartEnd"
          allowDuplicatedCategory={false}
          label={{
            value: "Month",
            angle: 0,
            dy: 30,
            position: "center",
          }}
        />
        <YAxis
          type="number"
          tick={true}
          tickLine={false}
          axisLine={false}
          domain={["auto", "auto"]}
          label={{
            value: "Shipment Volume",
            angle: -90,
            dx: -30,
            position: "center",
          }}
          name="Shipment Volume"
        />
        <CartesianGrid strokeDasharray="1 1 1" vertical={false} />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
