import React from 'react'
import { Chart } from "react-google-charts";


export const data = [
    ["Year", "Placements"],
    ["2014", 1000],
    ["2015", 1170],
    ["2016", 660],
    ["2017", 1030],
  ];
  
  export const options = {
    chart: {
      title: "Placements yearly Info",
    },
  };

const BarChart = () => {
  return (
    <div>
      <Chart
      chartType="Bar"
      width="90%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default BarChart
