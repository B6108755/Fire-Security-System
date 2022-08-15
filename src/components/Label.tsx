import React from "react";

type Props = {
    text:string,
    subfix:string
};

function Label({ text,subfix }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#3d0c02",
        border: "1px solid #8b0000",
        paddingLeft: "25px",
      }}
    >
      <span style={{ fontWeight: 500 }}>{text}</span>{" "}
      <span hidden={subfix === ''} style={{ fontWeight: 100, marginLeft: "10px" }}>({subfix})</span>
    </div>
  );
}

export default Label;
