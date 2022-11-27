import React from 'react';
import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);
Chart.overrides.doughnut
const DChart = ({data}) => {
    return (
        <Doughnut data={data} />
    )
}

export default DChart;