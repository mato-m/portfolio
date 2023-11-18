import React from "react";

const ProjectsTitle = ({ selectedType, setSelectedType }) => {
  const types = [
    { label: "All", value: "" },
    { label: "Web & Mobile App", value: "Web & Mobile App" },
    { label: "Deep Learning", value: "Deep Learning" },
    { label: "Classification", value: "Classification" },
    { label: "Clustering", value: "Clustering" },
    { label: "Regression", value: "Regression" },
  ];

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
      {types.map((type, index) => (
        <React.Fragment key={type.value}>
          {index > 0 && " / "} {/* Add a "/" after the first type */}
          <span
            onClick={() => setSelectedType(type.value)}
            className={selectedType === type.value ? "selectedToolType" : ""}
          >
            {type.label}
          </span>
        </React.Fragment>
      ))}
    </h2>
  );
};

export default ProjectsTitle;
