import React, { useState } from "react";
import { PiSignature } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
          <PiSignature size={50}/>
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "" : "active"}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link to={item.to} className="navbar_container_menu_item_links">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <FaBars size={30} /> : <RxCross2 size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
