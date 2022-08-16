import React from 'react'
import Label from '../../components/Label'
import Vertical_bar_left from '../../components/Vertical_bar_left'
import { Layout, Button, Menu, Tooltip, Col, Row } from "antd";
import Mini_total_cart_fire_alam from '../../components/Mini_total_cart_fire_alam';
import Mini_Alarm_admin from '../../components/Mini_Alarm_admin';
import Main_admin from '../../components/main_admin';

type Props = {}

const Map_Interface_right = (props: Props) => {
  return (
        <>
             <div>
                    <Label
                      text="The total number of problems with fire alarms."
                      subfix=""
                    />
                    <div style={{width:'100%',marginBottom:'20px'}}>
                      <Row>
                        <Col span={11}>
                          <Mini_total_cart_fire_alam
                            codeColor="#4f73ed"
                            problemNumber={25789}
                            total={100000}
                            zone="A"
                          />
                          <Mini_total_cart_fire_alam
                            codeColor="#f0263f"
                            problemNumber={13016}
                            total={4500}
                            zone="C"
                          />
                          <Mini_total_cart_fire_alam
                            codeColor="#ffba1f"
                            problemNumber={11298}
                            total={4000}
                            zone="F"
                          />
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                          <Mini_total_cart_fire_alam
                            codeColor="#f06426"
                            problemNumber={24097}
                            total={3000}
                            zone="B"
                          />
                          <Mini_total_cart_fire_alam
                            codeColor="#1aa1f9"
                            problemNumber={11678}
                            total={1000}
                            zone="D"
                          />
                          <Mini_total_cart_fire_alam
                            codeColor="#3cda65"
                            problemNumber={12816}
                            total={2000}
                            zone="E"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div >
                    <Label text="Fire alarm administrator." subfix="" />
                    <div style={{width:'100%', marginBottom:'10px',paddingTop:'20px'}}>
                        <Row>
                          <Col span={6}>
                            <div style={{ height:'100%',
                                          
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "space-between",}}>
                            <Mini_Alarm_admin zone='A' num={76} codeColor='#4f73ed'/>
                            <Mini_Alarm_admin zone='C' num={52} codeColor='#f0263f'/>
                            </div>
                          </Col>
                          <Col span={12} style={{
                              // backgroundColor:'grey'
                            }}>
                            <div style={{width:'100%'}}>
                              <Main_admin />
                            </div>
                          </Col>
                          <Col span={6}>
                          <div style={{ height:'100%',
                                          // backgroundColor:'red',
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "space-between",}}>
                            <Mini_Alarm_admin zone='B' num={65} codeColor='#1aa1f9'/>
                            <Mini_Alarm_admin zone='D' num={41} codeColor='#ffba1f'/>
                            </div>
                          </Col>
                        </Row>
                    </div>
                  </div>
                  <div>
                    <Label
                      text="Total number of fire alarm in each year."
                      subfix="Piece"
                    />
                    <div style={{width:'100%'}}>
                      <Vertical_bar_left />
                      {/* <RadarGraph /> */}
                    </div>

                  </div>
        </>
  )
}

export default Map_Interface_right