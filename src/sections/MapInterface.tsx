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

//
import Map_Interface_left from './map_Interface/Map_Interface_left';
import Map_Interface_middle from './map_Interface/Map_Interface_middle';
import Map_Interface_right from './map_Interface/Map_Interface_right';
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
      // <Layout style={{ display: "block" }}>
      <div className='h-full'>
            <div style={{ padding: 0 }}>
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
            </div>

            <div style={{ backgroundColor: "#010101" }}>
              <Row style={{}}>
                <Col span={1}></Col>
                <Col span={6}>
                  <Map_Interface_left />
                </Col>
                <Col span={1}></Col>

                <Col span={8}>
                  {/* middle */}
                  <Map_Interface_middle />
                </Col>

                <Col span={1}></Col>
                <Col span={6}>
                    <Map_Interface_right />
                </Col>
                <Col span={1}></Col>
              </Row>
            </div>
          
      </div>
  )
}

export default MapInterface