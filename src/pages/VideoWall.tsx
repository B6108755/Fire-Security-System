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
      <div className="bg-[#5e2019] w-100 h-20 mt-2 mr-2 ml-2 rounded">
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
      <div className="bg-[#5e2019] w-100 h-20 mt-1 mr-2 ml-2 rounded">
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
        {/* <div className="w-50">
          
        </div> */}
      </div>
    </>
  );
};

export default VideoWall;
