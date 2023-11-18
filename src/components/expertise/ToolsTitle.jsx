import React from "react";

const ToolsTitle = ({ selectedType, setSelectedType }) => {
  return (
    <h2
      style={{
        textAlign: "center",
        padding: "0 30px",
        fontSize: "1.3rem",
        cursor: "pointer",
        color: "#c0c0c0",
      }}
    >
      <span
        onClick={() => setSelectedType("")}
        className={selectedType === "" ? "selectedToolType" : ""}
      >
        All
      </span>{" "}
      /{" "}
      <span
        onClick={() => setSelectedType("languages")}
        className={selectedType === "languages" ? "selectedToolType" : ""}
      >
        Languages
      </span>{" "}
      /{" "}
      <span
        onClick={() => setSelectedType("frontend")}
        className={selectedType === "frontend" ? "selectedToolType" : ""}
      >
        Frontend
      </span>{" "}
      /{" "}
      <span
        onClick={() => setSelectedType("backend")}
        className={selectedType === "backend" ? "selectedToolType" : ""}
      >
        Backend
      </span>{" "}
      /{" "}
      <span
        onClick={() => setSelectedType("ml")}
        className={selectedType === "ml" ? "selectedToolType" : ""}
      >
        Machine Learning
      </span>{" "}
      /{" "}
      <span
        onClick={() => setSelectedType("other")}
        className={selectedType === "other" ? "selectedToolType" : ""}
      >
        Other Tools
      </span>
    </h2>
  );
};

export default ToolsTitle;
