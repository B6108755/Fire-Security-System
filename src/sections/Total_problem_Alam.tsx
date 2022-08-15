import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ScriptableContext
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

type Props = {}

function Total_problem_Alam({}: Props) {

    const options = {
        responsive: true,
        plugins: {
          // fill: 'start',
          // backgroundColor: 'rgba(75,192,192)',
          legend: {
            display:false,
            position: 'top' as const,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };

const labels = [2018, 2019, 2020, 2021, 2022];    

const data = {
    labels,
    datasets: [
      {
        lineTension: 0.6,
        label: 'Dataset 1',
        data: [180,200,500,450,700],
        borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'linear-gradient(to right, #20f08b, #07dfb1)', // not working
        // backgroundColor: 'rgba(255, 99, 132, 0.2)', // working
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(255, 99, 132,0.5)");
          gradient.addColorStop(1, "rgba(255, 99, 132,0)");
          return gradient;
        },
        fill: true,
        // backgroundColor: 'rgba(75,192,192)',
        datalabels:{
          labels:{
            title:null
          }
        }
      },
    ],
  };
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default Total_problem_Alam