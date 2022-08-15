import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  zone: string;
  num: number;
  total: number;
  code_color: string;
};

const Total_fire_Alam = (props: Props) => {
  const [stateNum, setSateNum] = useState<number>(0);
  const [stateTotal, setSateTotal] = useState<number>(0);

  useEffect(() => {
    setSateNum(props.num);
    setSateTotal(props.total);
  });

  const data = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        label: "# of Votes",
        data: [stateNum, stateTotal],
        backgroundColor: [props.code_color, "#262626"],
        borderColor: [
          //   'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 0,
        datalabels:{
          labels:{
            title:null
          }
        }
      },
    ],
  };
  return (
    <div
      style={{
        width: "160px",
        color: "black",
        // backgroundColor: "#84B9B6",
        display: "inline-block",
        margin: "10px",
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            // backgroundColor: "blue",
            width: "60px",
          }}
        >
          <Pie options={{}} data={data} />
        </div>

        <div style={{ color: "#FFF", margin: 5, fontSize: "10px" }}>
          <div style={{ fontSize: "16px" }}>
            {new Intl.NumberFormat("en-US").format(stateNum)}
          </div>
          <div>Arrival Hall</div>
          <div style={{ color: "#4169e1" }}>Zone: {props.zone}</div>
        </div>
      </div>
    </div>
  );
};

export default Total_fire_Alam;
