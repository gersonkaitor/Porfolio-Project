import React from "react";
import { Animate } from "react-simple-animate";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import "./styles.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text-wrapper">
        <Animate
          play={true}
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-800px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <h2>Hello, I'm</h2>
        </Animate>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString("GERSON")
                .pauseFor(5000)
                .deleteAll(0.5)
                .typeString("GERSON")
                .pauseFor(5000)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h1>
        <Animate
          play={true}
          duration={1}
          delay={0}
          start={{
            transform: "translateX(1000px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <h2>
            A Self-taught{" "}
            <span className="home-text-wrapper-text-color">
              Front End Developer
            </span>
          </h2>
        </Animate>
      </div>
      <Animate
        play={true}
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me-buttons-wrapper">
            <button>Hire me</button>
            <a>Resume</a>
          </div>
          <div className="contact-me-social-wrapper">
            <FaLinkedin size={32} />
            <FaGithub size={32} />
            <FaFacebook size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
