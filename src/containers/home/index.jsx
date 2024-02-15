import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Role from "./Role";
import MyPdf from "../../resume/Shivam_Kumar-Resume.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  function handleNavigateLinkedin() {
    window.open("https://www.linkedin.com/in/shivamkumar02517/", "_blank");
  }

  function handleNavigateGithub() {
    window.open("https://github.com/kumarshivam04203", "_blank");
  }

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Shivam Kumar
          <br />
          <Role />
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={0.8}
        start={{
          transform: "translateY(500px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home_contact-me">
          <div className="home_contact-me_buttons-wrapper">
            <a href={MyPdf} download="Shivam_Kumar.pdf">
              Download resume
            </a>
          </div>
          <div className="home_contact-me_socials-wrapper">
            <FaLinkedin onClick={handleNavigateLinkedin} size={32} />
            <FaGithub onClick={handleNavigateGithub} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
