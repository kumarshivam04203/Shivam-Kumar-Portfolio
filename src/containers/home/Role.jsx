import React, { useEffect } from "react";
import Typed from 'typed.js';

const Role = () => {
    useEffect(() => {
        var typeData = new Typed(".role",{
            strings: [
                "FrontEnd Developer",
        "React Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "MERN Stack Developer",
            ],
            loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
        } );
        return () => {
            typeData.destroy();
        };
    },[])

    return(
        <div>
            I am a <span className="role"></span>
        </div>
    )
}

export default Role;