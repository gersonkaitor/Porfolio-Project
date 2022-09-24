import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiReact, DiNodejsSmall, DiMongodb, DiNpm } from "react-icons/di";
import { FaSass, FaGitAlt } from "react-icons/fa";
import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about-content">
        <div className="about-content-personal-wrapper">
          <h3 className="developer-content">Front End Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="personal-content">Personal Information</h3>
          <ul>
            {personalData.map((item, key) => (
              <li key={key}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-content-service-wrapper">
          <div className="about-content-service-wrapper-inner-content">
            <div>
              <DiNodejsSmall
                size={40}
                color="var(--selected-theme-main-color)"
              />
            </div>
            <div>
              <DiMongodb size={40} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <DiReact size={40} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaSass size={40} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <DiNpm size={40} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaGitAlt size={40} color="var(--selected-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
