import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
    SiCss3,
    SiTailwindcss,
    SiPug,
    SiExpress,
    SiMicrosoftsqlserver,
    SiMongodb,
} from "react-icons/si";
import { FaSass, FaReact, FaPhp, FaNodeJs } from "react-icons/fa";
const skills = {
    frontEnd: [
        { name: "React JS", icon: <FaReact /> },
        { name: "HTML5", icon: <AiFillHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "SASS", icon: <FaSass /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Pug", icon: <SiPug /> },
    ],
    backEnd: [
        { name: "Php", icon: <FaPhp /> },
        { name: "Node Js", icon: <FaNodeJs /> },
        { name: "Express Js", icon: <SiExpress /> },
        { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
        { name: "Mongo Db", icon: <SiMongodb /> },
    ],
};
function Knowledge() {
    return (
        <section className="know" id="knowledge">
            <div className="know__heading">Knowledge</div>
            <div className="know__content">
                <div className="know__content-item">
                    <div className="know__content-item-heading">Front end</div>
                    <div className="know__content-skill">
                        {skills.frontEnd.map((skill, index) => {
                            return (
                                <div className="skill__item" key={index}>
                                    {skill.name} {skill.icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="know__content-item">
                    <div className="know__content-item-heading">Back end</div>
                    <div className="know__content-skill">
                        {skills.backEnd.map((skill, index) => {
                            return (
                                <div className="skill__item" key={index}>
                                    {skill.name} {skill.icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Knowledge;
