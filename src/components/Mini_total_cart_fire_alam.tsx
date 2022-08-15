import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type Props = {
  codeColor: string;
  problemNumber: number;
  total: number;
  zone: string;
};

const Mini_total_cart_fire_alam = (props: Props) => {
  const data = {
    datasets: [
      {
        label: "# of Votes",

        data: [props.problemNumber, props.total],
        backgroundColor: [props.codeColor, "#262626"],
        borderWidth: 0,
        // weight: 1,
        datalabels: {
          color: "#FFF",
          labels: {
            title: null,
          },
        },
      },
    ],
  };

  return (
    <div
      style={{
        marginTop:'15px',
        width: "100%",
        // display: "inline-block",
        // border: "1px solid #8b0000",
        // backgroundColor:'black'
      }}
    >
      <div style={{display:'flex'}}>
        <div
          style={{
            width: "25%",
            backgroundColor: "#000",
            marginRight:'5px'
          }}
        >
          <Doughnut 
            data={data}
            options={{
                cutout:15
            }}
            />
        </div>
        <div style={{width:'75%',display:'flex'}}>
            <div style={{width:'50%',display:'flex', flexDirection:'column',  justifyContent: 'space-between'}}>
                <div style={{fontWeight:700,paddingTop:'10px'}}>{new Intl.NumberFormat("en-US").format(props.problemNumber)}</div>
                <div style={{color:'grey'}}>(Piece)</div>
            </div>
            <div style={{width:'50%',display:'flex',justifyContent: 'right',alignItems: 'flex-end', color: "#4169e1"}}> <span>Zone {props.zone}</span> </div>
        </div>
      </div>
    </div>
  );
};

export default Mini_total_cart_fire_alam;
