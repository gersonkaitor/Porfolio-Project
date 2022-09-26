import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeader";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";

import { skillsData } from "./utils";
import "./styles.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />

      <div className="skills-content-wrapper">
        {skillsData.map((item, key) => (
          <div key={key} className="skills-content-wrapper-inner-content">
            <Animate
              play={true}
              duration={1}
              delay={0}
              start={{
                transform: "translateX(-600px)",
              }}
              end={{
                transform: "translateX(0)",
              }}
            >
              <h3 className="skills-content-wrapper-inner-content-category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((dataItem, index) => (
                  <div className="progressBar-wrapper" key={index}>
                    <p>{dataItem.skillName}</p>
                    <div className="progressBar-wrapper-percentage">
                      <AnimateKeyframes
                        play={true}
                        duration={1}
                        keyframes={[`opacity : 1`, `opacity : 0`]}
                        iterationCount="1"
                      >
                        <Line
                          percent={dataItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--selected-theme-main-color"
                          strokeLineCap="square"
                          trailWidth="2"
                        />
                      </AnimateKeyframes>
                      <p>{dataItem.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
