import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AimOutlined,
  FolderOpenOutlined,
  HeatMapOutlined,
  SnippetsOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import "antd/dist/antd.css";
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
//
import AlarmMonitor from "./AlarmMonitor";
import Home from "./Home";

const { Header, Content, Footer, Sider } = Layout;

const NavSide: React.FC = () => {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    // let path = `newPath`;
    navigate(`/${path}`);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "#140e0d", height: "8vh" }}>
        <p
          className=""
          style={{ color: "red", textAlign: "left", marginLeft: "20px" }}
        >
          Fire & Security System
        </p>
      </Header>
      <Layout style={{ height: "92vh" }}>
        <Sider style={{ backgroundColor: "dark" }}>
          <p
            className="align-center"
            style={{ color: "white", marginTop: "10px" }}
          >
            Friday, October 21,2022
          </p>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={({ item, key, keyPath, domEvent }) => {
              // let navigate = useNavigate();
              // console.log("menu click");
              console.log(key);
              routeChange(key);
              // navigate(`/${key}`, { replace: true });
              // <Link to={`/${key}`}></Link>;
            }}
            items={[
              {
                key: "",
                icon: <HeatMapOutlined />,
                label: "Map Interface",
              },
              {
                key: "home",
                icon: <AimOutlined />,
                label: "Home",
              },
              {
                key: "3",
                icon: <FolderOpenOutlined />,
                label: "Information Link",
              },
              {
                key: "4",
                icon: <VideoCameraOutlined />,
                label: "Video Wall Integration",
              },
              {
                key: "5",
                icon: <ScheduleOutlined />,
                label: "Event Notification",
              },
              {
                key: "6",
                icon: <SnippetsOutlined />,
                label: "Report",
              },
            ]}
          />
        </Sider>
        <Content style={{ backgroundColor: "black" }}>
          {/* <Layout>
        <Header style={{ height: "25px", backgroundColor: "pink" }}></Header>
        <Content>
          <AlarmMonitor></AlarmMonitor>
        </Content>
      </Layout> */}
          {/* <AlarmMonitor></AlarmMonitor> */}

          <Routes>
            <Route path="/" element={<AlarmMonitor />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavSide;
