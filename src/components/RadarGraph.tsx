import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Filler, RadialLinearScale } from 'chart.js';

ChartJS.register(LineController, RadialLinearScale, LineElement, PointElement, LinearScale, Filler, Title);

const labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'];
const chartData = [5, 3, 4, 5, 2, 4];

const data = {
  labels: labels,
  datasets: [
    {
      data: chartData, 
      fill: true,
      backgroundColor: 'pink',
      borderColor: 'transparent',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },
  ],
};

const options = {
  scales: {
    r: {
      grid: {
        lineWidth: 2,
      },
      angleLines: {
        lineWidth: 2,
      },
      gridLines: {
        display: false
      },
      ticks: {
        display: false,
        maxTicksLimit: 1
      },
    }
  }
}

const RadarGraph = () => {
    
  return (
      <Chart type="radar" data={data} options={options}/>
  )
}

export default RadarGraph;