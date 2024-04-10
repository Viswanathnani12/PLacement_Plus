import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ["Job Report","report"],
    ["CSE", 11],
    ["ECE", 2],
    ["MECH", 2],
    ["CIVIL", 2],
    ["IT", 7],
  ];
  export const options = {
    title: "Job Count",
    is3D: true,
  };

const PieChart = () => {
  return (
    <>
    <div className='min-w-max'>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"90%"}
      height={"400px"}
    />
    </div>
    </>
  )
}

export default PieChart
