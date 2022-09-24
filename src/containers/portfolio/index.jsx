import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { VscProject } from "react-icons/vsc";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<VscProject size={40} />}
      />
    </section>
  );
};

export default Portfolio;
