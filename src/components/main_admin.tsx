import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
type Props = {}

const Main_admin = (props: Props) => {

    const data = {
        datasets: [
          {
            label: '# of Votes',
            data: [1, 4],
            backgroundColor: [  
                '#4f73ed',
                '#333333',
            ],
            borderWidth: 0,
            datalabels:{
                color:'#FFF',
                labels:{
                    title:null
                },
            }
          }, 
          { 
            data: [],
            weight: 1
          },
          {
            label: '# of Votes',
            data: [1, 2],
            backgroundColor: [  
                '#f0263f',
                '#333333',
            ],
            borderWidth: 0,
            datalabels:{
                color:'#FFF',
                labels:{
                    title:null
                },
            }
          },
          { 
            data: [],
            weight: 1
          },
          {
            label: '# of Votes',
            data: [2, 1],
            backgroundColor: [  
                '#ffba1f',
                '#333333',
            ],
            borderWidth: 0,
            datalabels:{
                color:'#FFF',
                labels:{
                    title:null
                },
            }
          },
          { 
            data: [],
            weight: 1
          },
          {
            label: '# of Votes',
            data: [3, 1],
            backgroundColor: [  
                '#1aa1f9',
                '#333333',
            ],
            borderWidth: 0,
            datalabels:{
                color:'#FFF',
                labels:{
                    title:null
                },
            }
          },
        ],
      };  

  return (
        <Doughnut 
            data={data}
            options={{
              cutout:30,
            //   radius: 50
            }}
        />
  )
}

export default Main_admin