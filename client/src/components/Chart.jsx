import React from "react";
import { format, parseISO, subDays } from "date-fns";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" setColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" setColor="#2451B7" stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
          <XAxis dataKey="date" />
          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area dataKey="value" stroke="#DAA520" fill="url(#color)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee d MMM,yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} </p>
      </div>
    );
  }
  return null;
}

export default Chart;
