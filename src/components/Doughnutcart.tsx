"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function YourChartComponent() {

let data= [
  {
    label: "Label 1",
    value: 55,
    color: "rgba(0, 43, 73, 1)",
    cutout: "50%",
  },
  {
    label: "Label 2",
    value:15,
    color: "rgba(0, 103, 160, 1)",
    cutout: "50%",
  },
  {
    label: "Label 3",
    value: 80,
    color: "rgba(83, 217, 217, 1)",
    cutout: "50%",
  },
]

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        innerWidth:'10%',
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

 return <Doughnut data={finalData} options={options} width={'30%'} height={'30%'} />;
}
export default YourChartComponent;