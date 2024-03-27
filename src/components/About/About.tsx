import React from "react";
import { basicInfo, education } from "../../constants";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>About Me</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I&apos;m a student at Hanoi University of Science and Technology
          (HUST) and a software developer with experience in JavaScript, and
          expertise in frameworks like React and Node.js. I&apos;m a quick
          learner and always eager to improve my skills to build efficient,
          scalable, and user-friendly websites that solve real-world problems!
        </motion.p>
      </div>
      <div className="info-container">
        <div className="info-column">
          {basicInfo.slice(0, 3).map((info, index) => (
            <p className="info-item" key={index}>
              <span>{info.name}:</span> {info.value}
            </p>
          ))}
        </div>
        <div className="info-column">
          {basicInfo.slice(3, 6).map((info, index) => (
            <p className="info-item" key={index}>
              <span>{info.name}:</span> {info.value}
            </p>
          ))}
        </div>
        <div className="info-column">
          <p className="info-item">
            <span>Course: </span>
            {education.course}
          </p>

          <p className="info-item">
            <span>Time span: </span>
            {education.timeSpan}
          </p>

          <p className="info-item">
            <span>CPA: </span>
            {education.cpa}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
