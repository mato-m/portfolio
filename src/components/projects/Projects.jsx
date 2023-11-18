import React, { useState } from "react";
import Project from "./Project";
import ProjectsTitle from "./ProjectsTitle";

const Projects = () => {
  const [selectedType, setSelectedType] = useState("");

  const projects = [
    {
      id: 1,
      name: "Movie info site",
      demo: null,
      repo: "https://github.com/mato-m/movie-backend",
      type: "Web & Mobile App",
    },
    {
      id: 2,
      name: "News portal",
      demo: null,
      repo: "https://github.com/mato-m/news-backend",
      type: "Web & Mobile App",
    },
    {
      id: 3,
      name: "Expense tracker",
      demo: "https://play.google.com/store/apps/details?id=com.mato.xo.troskovi",
      repo: "https://github.com/mato-m/troskovi-app",
      type: "Web & Mobile App",
    },
    {
      id: 4,
      name: "Rent a car website",
      demo: "https://rentmne.netlify.app/",
      repo: "https://github.com/mato-m/rent-car-react",
      type: "Web & Mobile App",
    },
    {
      id: 5,
      name: "Crypto tracker",
      demo: "https://crypto-track-react-app.netlify.app/",
      repo: "https://github.com/mato-m/crypto-frontend",
      type: "Web & Mobile App",
    },
    {
      id: 6,
      name: "Kamini Sjekloća",
      demo: "https://kaminisjekloca.me",
      repo: "https://github.com/mato-m/kamini",
      type: "Web & Mobile App",
    },
    {
      id: 7,
      name: "Vehicle counting",
      demo: "https://www.youtube.com/watch?v=MNn9qKG2UFI",
      repo: "https://github.com/mato-m/yolo-vehicle-counting",
      type: "Deep Learning",
    },
    {
      id: 8,
      name: "Grapevine disease classification",
      demo: null,
      repo: "https://github.com/mato-m/resnet-grape",
      type: "Deep Learning",
    },
    {
      id: 9,
      name: "Diabetes prediction",
      demo: null,
      repo: "https://github.com/mato-m/knn-diabetes",
      type: "Classification",
    },
    {
      id: 10,
      name: "Gender classification",
      demo: null,
      repo: "https://github.com/mato-m/gender-classification",
      type: "Classification",
    },
    {
      id: 11,
      name: "Wine clustering",
      demo: null,
      repo: "https://github.com/mato-m/rf-wine",
      type: "Clustering",
    },
    {
      id: 12,
      name: "Bank note authentication",
      demo: null,
      repo: "https://github.com/mato-m/svm-banknote",
      type: "Classification",
    },
    {
      id: 13,
      name: "Car price prediction",
      demo: null,
      repo: "https://github.com/mato-m/regression-cars",
      type: "Regression",
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <ProjectsTitle
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <div className="projectFlex">
        {projects
          .filter(
            (project) => selectedType === "" || project.type === selectedType
          )
          .map((v) => (
            <Project p={v} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
