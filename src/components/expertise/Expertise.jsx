import React from "react";

import Tool from "./Tool";
import ToolsTitle from "./ToolsTitle";
import { Bubble } from "@seesea2021/react-bubble-ui-v2";
import tools from "./Tools";
import { useState } from "react";

const Expertise = () => {
  const options = {
    size: 150,
    minSize: 80,
    gutter: 15,
    numCols: 3,
    fringeWidth: 150,
    yRadius: 100,
    xRadius: 100,
    gravitation: 5,
  };
  const [selectedType, setSelectedType] = useState("");
  const filteredTools = tools.filter((tool) =>
    selectedType ? tool.type === selectedType : true
  );
  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <ToolsTitle
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Bubble options={options} className="myBubbleUI">
        {filteredTools &&
          filteredTools.map((v) => (
            <Tool
              key={v.txt}
              txt={v.txt}
              bgColor={v.bgColor}
              logo={v.logo}
              txtColor={v.txtColor}
            />
          ))}
      </Bubble>
    </div>
  );
};

export default Expertise;
