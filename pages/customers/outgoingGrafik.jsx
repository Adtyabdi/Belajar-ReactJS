import React from "react";
import { useEffect, useRef } from "react";
import Chart from "chart.js";

export default function OutgoingGrafik() {
  const chartRef = useRef();

  useEffect(() => {
    // Data untuk chart
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          //   label: "Penjualan Bulanan",
          backgroundColor: "rgba(0, 128, 0, 0.2)",
          borderColor: "rgba(0, 128, 0, 1)",
          borderWidth: 2,
          data: [30, 60, 45, 50, 75],
        },
      ],
    };

    const options = {
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

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }, []);

  return (
    <>
      <section className="w-full ">
        <div className="flex">
          <div>
            <h1 className="font-bold">Total Outgoing Goods</h1>
            <p className="font-semibold text-gray-500">Last 7 days</p>
            <p className="text-4xl font-semibold mt-10">50K</p>
            <div className="flex">
              <p className="mr-2 text-green-600">12%</p>
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
