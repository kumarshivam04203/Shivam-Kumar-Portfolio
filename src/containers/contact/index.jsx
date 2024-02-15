import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import "./style.scss";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact_content_header-text">Get in touch</h3>
          <div className="contact_content_details">
          <p>You can type in the details here, but unfortunately this won't work, But don't worry if I build your form that will work.</p>
          <p>I can use Reactjs in frontend</p>
          <p>For backend - Node.js with Mongodb and nodemailer as well</p>
          </div>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_controlsWrapper">
              <div className="nameWrapper">
                <input required name="name" className="inputName" type="text" />
                <label htmlFor="name" className="namelabel">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input name="email" className="inputEmail" type="text" />
                <label htmlFor="email" className="emaillabel">
                  Email
                </label>
              </div>
              <div className="descriptionWrapper">
                <textarea
                  name="description"
                  className="inputDescription"
                  type="text"
                  rows={"5"}
                  style={{ resize: "nonw" }}
                />
                <label htmlFor="description" className="descriptionlabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
