import { frontendSkills, backendSkills, toolSkills } from "../../constants";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsComponents = {
    Frontend: frontendSkills,
    Backend: backendSkills,
    Tools: toolSkills,
  };
  return (
    <div className="container">
      <h1 className="title">Skills</h1>
      <div className="content-container">
        {Object.entries(skillsComponents).map(([label, skills]) => (
          <div key={label} className="skills-row">
            <h2 className="label">{label}</h2>
            <ul className="skill-list">
              {skills.map((skill: { name: string; icon: string }) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="skill-item"
                >
                  <img src={skill.icon} alt={skill.name} className="icon" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
