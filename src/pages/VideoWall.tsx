import { Mentions } from "antd";
import React, { useState } from "react";
import { Col, Divider, Row, Button } from "antd";

type Props = {};
const { Option } = Mentions;

const MOCK_DATA = {
  "@": ["afc163", "zombiej", "yesmeck"],
  "#": ["1.0", "2.0", "3.0"],
};

type PrefixType = keyof typeof MOCK_DATA;

const VideoWall = (props: Props) => {
  const [prefix, setPrefix] = useState<PrefixType>("@");
  const onSearch = (_: string, newPrefix: PrefixType) => {
    setPrefix(newPrefix);
  };
  return (
    <>
      <div
        style={{ width: "80%", marginLeft: "125px" }}
        className="bg-[#5e2019] h-20 mt-2 mr-2  rounded"
      >
        <Row>
          <Col xl={8}>
            <div className="text-white-400 text-left mt-2 ml-10 text-xl">
              Video Wall Integration
            </div>
            <div className="text-left mt-0 ml-10 text-sm italic">
              Video Wall Integration
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{ width: "80%", marginLeft: "125px" }}
        className="bg-[#5e2019] h-20 mt-2 mr-2  rounded"
      >
        <p className="text-left pt-2 ml-10">Network</p>
        <Row>
          <Col xl={16}>
            <Mentions
              className="ml-10 mt-1"
              style={{ width: "100%" }}
              placeholder="Network"
            ></Mentions>
          </Col>
          <Col xl={3} className="text-center ml-10 mt-1">
            <Button type="primary" ghost style={{ width: "130px" }}>
              Cancel
            </Button>
          </Col>
          <Col xl={3} className="mt-1 ">
            <Button type="primary" danger style={{ width: "130px" }}>
              Seach
            </Button>
          </Col>
        </Row>
      </div>
      <div className="mt-8">
        <Row gutter={[32, 8]} style={{ justifyContent: "center" }}>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
        </Row>
        <Row
          gutter={[32, 8]}
          style={{ marginTop: "15px", justifyContent: "center" }}
        >
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
        </Row>
        <Row
          gutter={[32, 8]}
          style={{ marginTop: "15px", justifyContent: "center" }}
        >
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
          <Col xl={5}>
            <img src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"></img>
            <p>1198789/560</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default VideoWall;
