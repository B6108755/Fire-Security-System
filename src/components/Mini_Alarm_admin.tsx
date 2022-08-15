import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type Props = {
  zone:string
  num:number
  codeColor:string
}



const Mini_Alarm_admin = (props: Props) => {
  const data = {
    datasets: [
      
      {
        label: '# of Votes',
        // cutoff:100,
        
        data: [100, 0],
        backgroundColor: [  
            '#333333',
            '#4f73ed',
        ],
        borderWidth: 0,
        weight: 0.22,
        datalabels:{
            color:'#FFF',
            labels:{
                title:null
            },
            formatter: function(value:number, context:any) {
                return value.toString()+'%';
            }
        }
      }, 
      {
        label: '# of Votes',
        // cutoff:100,
        data: [1,2],
        backgroundColor: [  
            props.codeColor,
            '#000 ',
        ],
        borderWidth: 0,
        // spacing: 20,
        // hoverOffset: 7,
        weight: 0.5,
        datalabels:{
            color:'#FFF',
            labels:{
                title:null
            },
            formatter: function(value:number, context:any) {
                return value.toString()+'%';
            }
        }
      }, 
    ],
  };  
  

  return (
    <div style={{width:'100%'}}>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}><Doughnut 
            data={data}
            options={{
            }}
          />
          </div>
          <div style={{paddingTop:'10px'}}>
            <div> <span style={{fontWeight:700}}>{props.num}</span> <span style={{color:'#A9A9A9'}}> User</span></div>
            <div style={{ color: "#4169e1"}}>Zone {props.zone}</div>
          </div>
        </div>
    </div>
  )
}

export default Mini_Alarm_admin