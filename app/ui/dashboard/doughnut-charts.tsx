"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ChartOptions, ChartData, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { CountByStage } from "@/app/lib/definitions";

Chart.register(...registerables);

export default function StageDoughnutChart({ result }: { result: CountByStage[] }) {
  const [chartData, setChartData] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (result.length === 0) return;

    setChartData({
      labels: result.map(s => s.stage),
      datasets: [
        {
          label: "",
          data: result.map(s => s.count),
          backgroundColor: result.map(s => s.color_hex),
          borderColor: '#FFFDE7',
          borderWidth: 1,
          hoverOffset: 4,
        },
      ],
    });
  }, [result]);

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#FFFDE7',
        },
        display: true,
      },
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  };

  return (
    <div className="flex w-full h-auto flex-col">
      <h2 className="text-lg font-semibold mb-4">Applications Count per Stage</h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};