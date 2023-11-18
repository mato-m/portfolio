import React from "react";

const Project = ({ p }) => {
  return (
    <div key={p.id} className="oneProject">
      <img src="code.jpg" alt={p.name} />
      <p
        style={{
          flexDirection: "column",
          textAlign: "center",
          marginTop: 0,
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
          background: "#2a0845aa",
          backdropFilter: "blur(2px)",
          border: "solid white 1px",
          textShadow: "1px 1px 10px black",
        }}
      >
        {p.name}
        <br />({p.type})
        {p.demo && (
          <a href={p.demo} style={{ color: "#fff" }}>
            Demo
          </a>
        )}
        {p.repo && (
          <a href={p.repo} style={{ color: "#fff" }}>
            Repo
          </a>
        )}
      </p>
    </div>
  );
};

export default Project;
