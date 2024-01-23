import React from "react";
import { useEffect, useRef } from "react";
import Chart from "chart.js";

export default function IncomGrafik() {
  const chartRef = useRef();

  useEffect(() => {
    // Data untuk chart
    const dataIncom = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          // label: "Penjualan Bulanan",
          backgroundColor: "rgba(0, 128, 0, 0.2)",
          borderColor: "rgba(0, 128, 0, 1)",
          borderWidth: 2,
          data: [40, 65, 50, 50, 80],
        },
      ],
    };

    const chartIn = {
      scales: {
        x: {
          display: false,
        },
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    };

    const inc = chartRef.current.getContext("2d");
    new Chart(inc, {
      type: "line",
      data: dataIncom,
      options: chartIn,
    });
  }, []);

  return (
    <>
      <section className="w-full ">
        <div className="flex">
          <div>
            <h1 className="font-bold">Total Incoming Goods</h1>
            <p className="font-semibold text-gray-500">Last 7 days</p>
            <p className="text-4xl font-semibold mt-10">25.7K</p>
            <div className="flex">
              <p className="mr-2 text-green-600">6%</p>
              <p>vs Last 7 days</p>
            </div>
          </div>
          <div>
            <canvas ref={chartRef} width="225" height="125"></canvas>
          </div>
        </div>
      </section>
    </>
  );
}
