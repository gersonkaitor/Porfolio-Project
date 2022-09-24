import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { GiSkills } from "react-icons/gi";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
    </section>
  );
};

export default Skills;
