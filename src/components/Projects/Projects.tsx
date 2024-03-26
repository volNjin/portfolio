import { projects } from "../../constants";
import { github } from "../../assets";
import "./Projects.css";
import { motion } from "framer-motion";
interface Tag {
  name: string;
  color: string;
}
const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="project-item"
          >
            <div className="project-image">
              <img src={project.image} alt="project thump" />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <span className="project-description">{project.description}</span>
            </div>
            <div className="tags">
              {project.tags.map((tag: Tag) => (
                <p
                  key={tag.name}
                  style={{ fontSize: "14px", color: tag.color }}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <div
              onClick={() =>
                project.source_code_link &&
                window.open(project.source_code_link, "_blank")
              }
              className={`code-button ${
                project.source_code_link ? "enabled" : "disabled"
              }`}
            >
              <img src={github} alt="github" className="github-icon" />
              Code
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
