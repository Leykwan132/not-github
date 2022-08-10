import React from "react";
import { Radar } from "react-chartjs-2";
import { defaults } from "chart.js";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
type Props = {};

defaults.color = "#9ca3af";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["Repo", "Commits", "PR", "Visits", "Teammate"],
  datasets: [
    {
      label: "Score",
      data: [2, 9, 3, 5, 0],
      borderColor: "#88ff1a",
      borderWidth: 1,
    },
  ],
};
const options = {
  scales: {
    r: {
      grid: {
        color: "#374151",
      },
      ticks: {
        display: false, // Hides the labels in the middel (numbers)
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const ProfileRadar = (props: Props) => {
  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ProfileRadar;
