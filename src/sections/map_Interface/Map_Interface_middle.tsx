import React from 'react'

import { Layout, Button, Menu, Tooltip, Col, Row } from "antd";
import Box_header_main from '../../components/Box_header_main';
import Chart_middle_bottom from '../../components/Chart_middle_bottom';
type Props = {}
const { Header, Footer, Sider, Content } = Layout;
const Map_Interface_middle = (props: Props) => {
  return (
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
  )
}

export default Map_Interface_middle