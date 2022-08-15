import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  num: number;
  total: number;
  period: string;
};

function Chart_middle_bottom({ num, total, period }: Props) {
  const data = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        label: "# of Votes",
        data: [num, total],
        backgroundColor: ["#f0263f", "#262626"],
        borderColor: [
          //   'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 0,
        datalabels: {
          labels: {
            title: null,
          },
        },
      },
    ],
  };
  return (
    <div style={{ width: "180px", height: "100%" }}>
      <div style={{display:'flex'}}>
        <div style={{width:'50px'}}>
          <Pie options={{}} data={data} />
        </div>
        <div>
            <div style={{fontWeight:500, fontSize:'20px'}}>{new Intl.NumberFormat("en-US").format(num)}</div>
            <div style={{color: "#4169e1", fontSize:'10px'}}> Fire alarm signal {period}.</div>
        </div>
      </div>
    </div>
  );
}

export default Chart_middle_bottom;
