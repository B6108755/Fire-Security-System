import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type Props = {}

function FIre_Alam_Overview({}: Props) {

    const data = {
        datasets: [
          {
            label: '# of Votes',
            cutoff:100,
            data: [37, 13, 50],
            backgroundColor: [  
                '#f0263f',
                '#4f73ed',
                '#ffba1f',
            ],
            borderColor: [
              '#FFF',
              '#4f73ed',
              '#ffba1f',
            ],
            borderWidth: 0,
            // spacing: 20,
            // hoverOffset: 7,
            // weight: 0.22,
            datalabels:{
                color:'#FFF',
                labels:{
                    title:{
                        font:{
                            size:10   
                        }
                    }
                },
                formatter: function(value:number, context:any) {
                    return value.toString()+'%';
                }
            }
          }, 
        ],
      };  


  return (
    <div style={{display:'flex'}}>
        <div style={{width:'10%'}}></div>
        <div style={{width:'30%'}}>
          <Doughnut 
            data={data}
            options={{
              cutout:35,
              radius: 50
            }}
          /></div>
        <div style={{width:'40%'}}>
            <div>Active {data.datasets[0].data[0]}%</div>
            <div>Mulfucntion {data.datasets[0].data[0]}%</div>
            <div>Not working {data.datasets[0].data[0]}%</div>
        </div>
    </div>
  )
}

export default FIre_Alam_Overview