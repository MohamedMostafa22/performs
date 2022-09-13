import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Fonts } from "../../enums/appEnums";

const PieGraph = ({ graphData, progress }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <text
          x="50%"
          fontWeight={Fonts.MEDIUM}
          fontSize={20}
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {progress}%
        </text>
        <Pie
          data={graphData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={87}
          outerRadius={100}
          fill="#8884d8"
        >
          {graphData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
