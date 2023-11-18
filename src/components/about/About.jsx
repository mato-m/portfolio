import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowY: "hidden",
      }}
    >
      <h2 style={{ textAlign: "center", width: "100%" }}>About me</h2>
      <p className="aboutMeText">
        Hello, my name is Mato. 👋
        <br />
        I'm a web & mobile app developer, as well as an AI enthusiast. I'm
        constantly working on gaining and improving my skills, as well as
        creating new and improving my existing projects.
      </p>
      <h3 style={{ textAlign: "center", width: "100%", fontSize: "1.5rem" }}>
        Career 💼
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="December 2022 - October 2023"
          dateClassName="dateTimeline"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<BiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Web developer</h3>
          <h4 className="vertical-timeline-element-subtitle">DigitalSmart</h4>
          <p>
            📍 Location: Podgorica, Montenegro
            <br />
            📝 Summary:
            <ul>
              <li>
                Part of FishEUTrust, project funded under the Horizon Europe
                programme
              </li>
              <li>Developed a scalable, high-performing web application</li>
              <li>Ensured fast and secure connection to REST API routes</li>
              <li>
                Enabled geographic data management, visualization and processing
                using OpenStreetMap
              </li>
              <li>
                Enabled geographic data management, visualization and processing
                using OpenStreetMap
              </li>
              <li>
                Enabled sensor data management, visualization and processing
                using ApexCharts
              </li>
              <li>
                Implemented secure processes for user authentication and
                authorization
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="June 2022 - September 2022"
          dateClassName="dateTimeline"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<BiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Associate</h3>
          <h4 className="vertical-timeline-element-subtitle">Walmart</h4>
          <p>
            📍 Location: Myrtle Beach, SC, United States
            <br />
            📝 Summary:
            <ul>
              <li>
                Responsible for inventory management in one of South Carolina's
                largest Supercenters
              </li>
              <li>
                Provided over a 1000 customers with excellent customer service
              </li>
              <li>Participated in many successful direct sales</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="February 2021 - June 2022"
          dateClassName="dateTimeline"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<BiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Web developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Self-employed</h4>
          <p>
            📝 Summary:
            <ul>
              <li>Developed over 15 high-performing web & mobile apps</li>
              <li>
                Developed UI designs that are visually appealing, responsive,
                and user-friendly
              </li>
              <li>
                Oversaw search engine and social media marketing, which resulted
                in a notable increase in traffic
              </li>
              <li>
                Implemented strategies to ensure web apps attain high on-page
                SEO scores
              </li>
              <li>Provided customers with assistance and guidance</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h3 style={{ textAlign: "center", width: "100%", fontSize: "1.5rem" }}>
        Education 🎓
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2022 - 2024"
          dateClassName="dateTimeline"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<LuGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Master of AI</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Donja Gorica
          </h4>
          <p>
            📍 Location: Podgorica, Montenegro
            <br />
            📄 Thesis: Computer Vision in viticulture
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2019 - 2022"
          dateClassName="dateTimeline"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<LuGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of IT</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Donja Gorica
          </h4>
          <p>
            📍 Location: Podgorica, Montenegro
            <br />
            📄 Thesis: Machine learning and cryptocurrency price prediction
            <br />
            🏆 Awards:
            <ul>
              <li>Best student of the class of 2019 (9.64 GPA)</li>
              <li>Scholarship for the best students from Cetinje</li>
              <li>Scholarship for the best students from Montenegro</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;
