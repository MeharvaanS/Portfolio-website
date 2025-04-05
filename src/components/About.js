import React, { useState } from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaHtml5, FaCss3Alt, FaGitAlt} from 'react-icons/fa';
import { 
  SiJavascript, SiMysql, SiKotlin, SiDotnet, SiBlazor, 
  SiExpress, SiSwift, SiSpring, SiGooglecloud,
  SiMongodb, SiApachekafka, SiAndroidstudio, SiSelenium, SiApachehadoop, 
  SiJenkins, SiPostman, SiFirebase, SiJira, SiFigma, 
  SiAdobexd, SiVirtualbox
} from 'react-icons/si';

const About = () => {
  const [fullStackExpanded, setFullStackExpanded] = useState(false);
  const [databaseExpanded, setDatabaseExpanded] = useState(false);
  const [qualityAssuranceExpanded, setQualityAssuranceExpanded] = useState(false);

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
            alt="Me" 
            className="profile-img"
          />
        </div>
        <div className="about-info">
          <h3>Hi, I'm Meharvaan Singh</h3>
          <p>
            I'm a passionate software developer who thrives on solving complex problems and building efficient, scalable applications. With a strong foundation in both development and networking, I've worked on various projects, contributing to both frontend and backend development.
          </p>
          <p>
            These are some of my key technical capabilities:
          </p>
          
          <div className="text-block">
            <p className="inline-paragraph">
              <span className="stack-title">Full Stack Development:</span> I have expertise in building and deploying web applications using modern technologies like React, Express.js,
              {fullStackExpanded && (
                <span> Blazor, .NET Core, and Firebase. I'm proficient in integrating RESTful APIs and leveraging Firebase for real-time database management and authentication.</span>
              )}
            </p>
            <button className="read-more-btn" onClick={() => setFullStackExpanded(!fullStackExpanded)}>
              {fullStackExpanded ? '...Read less' : '...Read more'}
            </button>
          </div>

          <div className="text-block">
            <p className="inline-paragraph">
              <span className="stack-title">Database and Cloud Solutions:</span> I possess strong experience in database management with SQL (Microsoft SQL Server, MySQL)
              {databaseExpanded && (
                <span> and NoSQL (MongoDB), and have worked with cloud platforms such as AWS and Google Cloud to deploy scalable applications and optimize infrastructure.</span>
              )}
            </p>
            <button className="read-more-btn" onClick={() => setDatabaseExpanded(!databaseExpanded)}>
              {databaseExpanded ? '...Read less' : '...Read more'}
            </button>
          </div>

          <div className="text-block">
            <p className="inline-paragraph">
              <span className="stack-title">Software Quality Assurance:</span> I'm skilled in automating testing processes with Python, Bash, and Selenium, which has helped reduce manual testing
              {qualityAssuranceExpanded && (
                <span> time and improve overall test coverage, ensuring the delivery of high-quality software.</span>
              )}
            </p>
            <button className="read-more-btn" onClick={() => setQualityAssuranceExpanded(!qualityAssuranceExpanded)}>
              {qualityAssuranceExpanded ? '...Read less' : '...Read more'}
            </button>
          </div>

          <p>When I'm not coding, I'm exploring new tech trends or building personal projects that push my skills further. I'm always eager to collaborate on projects that make a difference.</p>

          <div className="tech-stack">
            <div className="tech-icons-scrollable">
              <div className="tech-icons-container">
                {/* Languages */}
                <SiJavascript className="tech-icon-ab" title="JavaScript" />
                <FaJava className="tech-icon-ab" title="Java" />
                <FaPython className="tech-icon-ab" title="Python" />
                <SiMysql className="tech-icon-ab" title="SQL" />
                <SiKotlin className="tech-icon-ab" title="Kotlin" />
                <FaHtml5 className="tech-icon-ab" title="HTML5" />
                <FaCss3Alt className="tech-icon-ab" title="CSS3" />
                
                {/* Frameworks */}
                <SiDotnet className="tech-icon-ab" title=".NET" />
                <SiBlazor className="tech-icon-ab" title="Blazor" />
                <SiExpress className="tech-icon-ab" title="Express.js" />
                <FaNodeJs className="tech-icon-ab" title="Node.js" />
                <SiSwift className="tech-icon-ab" title="SwiftUI" />
                <SiSpring className="tech-icon-ab" title="Spring Boot" />
                
                {/* Tools and Technologies */}
                <SiGooglecloud className="tech-icon-ab" title="Google Cloud" />
                <SiMysql className="tech-icon-ab" title="MySQL" />
                <SiMongodb className="tech-icon-ab" title="MongoDB" />
                <FaAws className="tech-icon-ab" title="AWS" />
                <SiApachekafka className="tech-icon-ab" title="Kafka" />
                <SiAndroidstudio className="tech-icon-ab" title="Android Studio" />
                <SiSelenium className="tech-icon-ab" title="Selenium" />
                <FaReact className="tech-icon-ab" title="React" />
                <SiApachehadoop className="tech-icon-ab" title="Hadoop" />
                <SiJenkins className="tech-icon-ab" title="Jenkins" />
                <SiPostman className="tech-icon-ab" title="Postman" />
                <SiFirebase className="tech-icon-ab" title="Firebase" />
                <FaGitAlt className="tech-icon-ab" title="Git" />
                <SiJira className="tech-icon-ab" title="Jira" />
                <SiFigma className="tech-icon-ab" title="Figma" />
                <SiAdobexd className="tech-icon-ab" title="Adobe XD" />
                <SiVirtualbox className="tech-icon-ab" title="VirtualBox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;