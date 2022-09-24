import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { RiContactsFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact me"
        icon={<RiContactsFill size={40} />}
      />
    </section>
  );
};

export default Contact;
