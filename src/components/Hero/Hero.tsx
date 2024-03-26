import { cv, hieu } from "../../assets";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="section-wrapper">
      <div className="content-wrapper">
        <div className="left-column">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="title"
          >
            Hi, I'm <span className="subtitle">HIEU</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="description"
          >
            Frontend Developer
            <br />I develop web applications
          </motion.p>

          <div className="btns">
            <a href="/about" className="btn">
              About Me
            </a>
            <a href={cv} className="btn" download>
              Download CV
            </a>
          </div>
        </div>
        <img src={hieu} alt="avt-hieu" className="image" />
      </div>
    </section>
  );
};

export default Hero;
