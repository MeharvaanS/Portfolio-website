import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaPython, FaAws, FaGitAlt } from 'react-icons/fa';
import { 
  SiJavascript, SiMysql, SiDotnet, 
  SiExpress, SiSpring, SiGooglecloud,
  SiMongodb, SiApachekafka, SiSelenium, SiApachehadoop, 
  SiJenkins, SiPostman, SiFirebase, SiJira, SiFigma, 
  SiAdobexd, SiVirtualbox
} from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const techCategories = [
    {
      title: "Full Stack",
      icons: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiDotnet />, name: ".NET Core" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpring />, name: "Spring boot" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiFigma />, name: "Figma" },
        { icon: <SiAdobexd />, name: "Adobe XD" }
      ]
    },
    {
      title: "Database and Cloud",
      icons: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <SiApachekafka />, name: "Kafka" },
        { icon: <SiApachehadoop />, name: "Hadoop" },
        { icon: <SiVirtualbox />, name: "VirtualBox" }
      ]
    },
    {
      title: "Software Quality Assurance",
      icons: [
        { icon: <SiSelenium />, name: "Selenium" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiJira />, name: "Jira" },
        { icon: <FaGitAlt />, name: "Git" }
      ]
    }
  ];

  return (
    <section className="about-section">
      <motion.h2 
        className="about-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="accent">Me</span>
      </motion.h2>
      
      <div className="about-content">
        <div className="about-image">
          <img 
            src="/images/about1.png" 
            alt="Meharvaan Singh" 
            className="profile-img"
          />
        </div>
        <div className="about-info">
          <h3>Hi, I'm Meharvaan Singh</h3>
          <div className="social-links-ab">
            <a href="https://github.com/MeharvaanS" target="_blank" rel="noopener noreferrer" className="social-icon-ab">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/meharvaansingh/" target="_blank" rel="noopener noreferrer" className="social-icon-ab">
              <FaLinkedin />
            </a>
            <a href="mailto:sahimeharvaan@gmail.com" className="social-icon-ab">
              <FaEnvelope />
            </a>
          </div>
          
          <div className="intro-text">
            <p>
              I'm a passionate software developer who thrives on solving complex problems and building efficient, scalable applications. With a strong foundation in both development and networking, I've worked on various projects, contributing to both frontend and backend development.
            </p>
          </div>

          {/* Tech categories with icons */}
          <div className="tech-categories">
            {techCategories.map((category, index) => (
              <div key={index} className="tech-category">
                <h4 className="category-title">{category.title}</h4>
                <div className="category-icons">
                  {category.icons.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-icon-container" title={tech.name}>
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;