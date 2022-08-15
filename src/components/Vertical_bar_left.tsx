import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

type Props = {}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Vertical_bar_left = (props: Props) => {
  const labels = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:[1500,1000,1300,1600,1400,1550,1400],
        backgroundColor: '#1aa1f9',
        barThickness: 15,
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
      <Bar options={options} data={data} />
    </div>
  )
}

export default Vertical_bar_left