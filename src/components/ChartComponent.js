import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ChartComponent({ historyData }) {
  if (!historyData || historyData.length === 0) {
    return <p>No chart data available.</p>;
  }

  const labels = historyData.map(item => item.date);
  const prices = historyData.map(item => item.price);

  const data = {
    labels,
    datasets: [
      {
        label: "Price Over Time",
        data: prices,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };

  return <Line data={data} />;
}
