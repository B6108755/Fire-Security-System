import React from 'react'
import FIre_Alam_Overview from '../FIre_Alam_Overview'
import Total_fire_Alam from '../Total_fire_Alam'
import Total_problem_Alam from '../Total_problem_Alam'

type Props = {}

const Map_Interface_left = (props: Props) => {
  return (
    <>
        <div
                    style={{
                      height: "100%",
                      // backgroundColor:'gray',
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          backgroundColor: "#3d0c02",
                          border: "1px solid #8b0000",
                          paddingLeft: "25px",
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>
                          Total amount of fire alarm.
                        </span>{" "}
                        <span style={{ fontWeight: 100, marginLeft: "10px" }}>
                          (Piece)
                        </span>
                      </div>
                      <div>
                        <Total_fire_Alam
                          zone="B"
                          num={13950}
                          total={55800}
                          code_color="#f0263f"
                        />
                        <Total_fire_Alam
                          zone="C"
                          num={24009}
                          total={36000}
                          code_color="#ffba1f"
                        />
                        <Total_fire_Alam
                          zone="D"
                          num={8035}
                          total={16070}
                          code_color="#1aa1f9"
                        />
                        <Total_fire_Alam
                          zone="A"
                          num={65789}
                          total={200000}
                          code_color="#4f73ed"
                        />
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          backgroundColor: "#3d0c02",
                          border: "1px solid #8b0000",
                          paddingLeft: "25px",
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>
                          The total number of problems with fire alarms.
                        </span>
                      </div>
                      <Total_problem_Alam />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          backgroundColor: "#3d0c02",
                          border: "1px solid #8b0000",
                          paddingLeft: "25px",
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>
                          Fire alarm overview.
                        </span>
                        <span style={{ fontWeight: 100, marginLeft: "10px" }}>
                          (%)
                        </span>
                      </div>
                      <FIre_Alam_Overview />
                    </div>
                  </div>
    </>
  )
}

export default Map_Interface_left