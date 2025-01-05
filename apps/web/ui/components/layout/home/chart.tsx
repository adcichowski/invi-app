"use client";
import React, { useEffect, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const generateData = (theme: string | undefined) =>
  ({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "General",
        data: [2800, 5640, 7180, 7000, 8300, 8500, 9300],
        borderColor: "#7D00DF",
        backgroundColor: "#7D00DF",
        pointHoverBackgroundColor: "#7D00DF",
        pointBorderColor: theme === "dark" ? "white" : "black",
      },
      {
        label: "Savings",
        data: [2000, 4000, 5500, 4500, 5000, 5300, 5700],
        borderColor: "#03AA00",
        backgroundColor: "#03AA00",
        pointBorderColor: theme === "dark" ? "white" : "black",
      },
      {
        label: "Stocks",
        data: [800, 1640, 1680, 2500, 3300, 3200, 3600],
        borderColor: "#00A3DF",
        backgroundColor: "#00A3DF",
        pointBorderColor: theme === "dark" ? "white" : "black",
      },
    ],
  }) satisfies ChartData<"line", number[], string>;

const generateOptions = (color: string) =>
  ({
    responsive: true,
    interaction: {
      intersect: true,
    },
    elements: {
      line: {
        tension: 0.35,
      },
    },
    plugins: {
      legend: {
        align: "center",
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          color,
        },
        ticks: {
          color,
        },
      },
      y: {
        grid: {
          color,
        },
        ticks: {
          stepSize: 2000,
          color,
        },
        type: "linear" as const,
        position: "left" as const,
      },
    },
  }) satisfies ChartOptions<"line">;

export function Chart() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#c7c7c7" : "#484848";
  const options = useMemo(() => generateOptions(color), [theme]);
  const data = useMemo(() => generateData(theme), [theme]);
  return (
    <Line className="text-primary-foreground" options={options} data={data} />
  );
}
