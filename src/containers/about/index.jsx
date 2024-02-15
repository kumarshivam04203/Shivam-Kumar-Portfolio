import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Shivam Kumar",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Noida",
  },
  {
    label: "Email",
    value: "shivamkumar02517@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7668955567",
  },
];

const jobSummary =
  "Hi, I'm Shivam Kumar, a dedicated MERN stack developer driven by daily challenges and a passion for problem-solving. I'm currently learning Next.js alongside my expertise in HTML5/CSS3, Tailwind-CSS, SCSS, React.js, Node.js, Express.js, and MongoDB, I've completed numerous projects. Eager to leverage my skills for impactful web development opportunities. Let's create excellence together!"

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.8}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>MERN Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={0.8}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="PersonalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.8}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_servicesWrapper_innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
