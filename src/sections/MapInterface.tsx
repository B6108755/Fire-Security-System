import React, { useState, useEffect } from 'react'

//
import "antd/dist/antd.dark.css";
// import "antd/dist/antd.css";

import { Layout, Button, Menu, Tooltip, Col, Row } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
//
import Total_fire_Alam from "./Total_fire_Alam";
import Total_problem_Alam from "./Total_problem_Alam";
import FIre_Alam_Overview from "./FIre_Alam_Overview";
import Box_header_main from "../components/Box_header_main";
import Chart_middle_bottom from "../components/Chart_middle_bottom";
import Label from "../components/Label";
import Mini_total_cart_fire_alam from "../components/Mini_total_cart_fire_alam";
import Main_admin from "../components/main_admin";
import Vertical_bar_left from "../components/Vertical_bar_left";
import Mini_Alarm_admin from "../components/Mini_Alarm_admin";

const { Header, Footer, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

type Props = {}

const MapInterface = (props: Props) => {
  
    const [date, setDate] = useState<Date>();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    // setInterval(() => {
    //   setDate(new Date());
    // }, 1000);
  });
  return (
    
      <Layout style={{ display: "block" }}>
        {/* <Header
          style={{
            width: "100vw",
            height: "5%",
            backgroundColor: "#2B2C2C",
            padding: 0,
          }}
        >
          <Button type="primary" onClick={toggleCollapsed} style={{}}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header> */}

        <Content style={{ backgroundColor: "#697C79", height: "80%" }}>
          {/* <Menu
          style={{height:"100%"}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={itemMenu}
        /> */}

          <Layout>
            <Header style={{ padding: 0 }}>
              <Row>
                <Col span={2}></Col>
                <Col span={6}>
                  <div>{/* {date?.toString()} */}</div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: "center" }}>
                    <div>MAP INTERFACE</div>
                  </div>
                </Col>
                <Col span={6}>
                  <div style={{ textAlign: "right", fontSize: "25px" }}>
                    <EnvironmentOutlined />
                    Building A,1st floor
                  </div>
                </Col>
                <Col span={2} style={{}}></Col>
              </Row>
            </Header>
            <Content style={{ height: "90vh", backgroundColor: "#010101" }}>
              <Row style={{}}>
                <Col span={1}></Col>
                <Col span={6}>
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
                </Col>
                <Col span={1}></Col>

                <Col span={8}>
                  {/* middle */}
                  <Layout>
                    <Header
                      style={{
                        minHeight: "100px",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 0,
                      }}
                    >
                      <Box_header_main />
                      <Box_header_main />
                      <Box_header_main />
                    </Header>
                    <Layout>
                      <Content style={{ minHeight: "600px" }}></Content>
                      {/* <Sider>Sider</Sider> */}
                    </Layout>
                    <Footer style={{ minHeight: "80px", padding: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: 0,
                          height: "100%",
                        }}
                      >
                        <Chart_middle_bottom
                          num={765789}
                          total={6000000}
                          period="today"
                        />
                        <Chart_middle_bottom
                          num={765789}
                          total={3000000}
                          period="mounth"
                        />
                        <Chart_middle_bottom
                          num={765789}
                          total={1000000}
                          period="year"
                        />
                      </div>
                    </Footer>
                  </Layout>
                </Col>

                <Col span={1}></Col>
                <Col style={{  }} span={6}>
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
                </Col>
                <Col span={1}></Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
    
  )
}

export default MapInterface