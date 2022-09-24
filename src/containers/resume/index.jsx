import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { FaBlackTie } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
    </section>
  );
};

export default Resume;
