"use client";

import { Bar } from "react-chartjs-2";
import { Chart, ChartOptions, ChartData, registerables } from "chart.js";
import { useEffect, useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { AppsCountPerYearMonth } from "@/app/lib/definitions";

Chart.register(...registerables, ChartDataLabels);

export default function ApplicationsPerMonthBarChart({ result }: { result: AppsCountPerYearMonth[] }) {
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  });

  console.log(result);

  useEffect(() => {
    if (result.length === 0) return;

    setChartData({
      labels: result.map(s => `${s.year}, ${s.mon}`),
      datasets: [
        {
          data: result.map(s => s.count),
          backgroundColor: '#FFFDE7',
          borderColor: '#FFFDE7',
          borderWidth: 1,
        },
      ],
    });
  }, [result]);

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#FFFDE7',
        },
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFDE7',
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: '#FFFDE7',
        },
      },
    },
  };

  return (
    <div className="flex w-full flex-col">
      <h2 className="text-lg font-semibold mb-4">Applications Created Per Year, Month</h2>
      <div className="w-full h-full">
        <Bar data={chartData} options={options} />
      </div>

    </div>
  );
};