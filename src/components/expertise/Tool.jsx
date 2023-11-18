import React from "react";

const Tool = ({ txt, logo, txtColor, bgColor }) => {
  return (
    <div
      className="toolWrapper"
      style={{
        width: "100%",
        height: "100%",
        background: bgColor,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: txtColor,
        fontSize: "1.2rem",
      }}
    >
      {logo}
      {txt}
    </div>
  );
};

export default Tool;
