import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({data, data1, data2}) => {
    return (
        <Bar data={data} data1={data1} data2={data2} />
    )
}

export default BarChart;