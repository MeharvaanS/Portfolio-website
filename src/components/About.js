import React, { useRef, useState, useEffect } from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaHtml5, FaCss3Alt, FaGitAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { 
  SiJavascript, SiMysql, SiKotlin, SiDotnet, SiBlazor, 
  SiExpress, SiSwift, SiSpring, SiGooglecloud,
  SiMongodb, SiApachekafka, SiAndroidstudio, SiSelenium, SiApachehadoop, 
  SiJenkins, SiPostman, SiFirebase, SiJira, SiFigma, 
  SiAdobexd, SiVirtualbox
} from 'react-icons/si';

const About = () => {
  const textBoxRef = useRef(null);
  const techIconsRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScrollDown = () => {
    if (textBoxRef.current) {
      const scrollStep = 150;
      const maxScroll = textBoxRef.current.scrollHeight - textBoxRef.current.clientHeight;
      const currentScroll = textBoxRef.current.scrollTop;
      
      if (currentScroll + textBoxRef.current.clientHeight >= maxScroll - 10) {
        // Scroll back to top
        textBoxRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Scroll down one step
        textBoxRef.current.scrollTo({
          top: currentScroll + scrollStep,
          behavior: 'smooth'
        });
      }
    }
  };

  // Add scroll event listener to detect when we're at the bottom
  useEffect(() => {
    const textBox = textBoxRef.current;
    
    const handleScroll = () => {
      if (textBox) {
        const maxScroll = textBox.scrollHeight - textBox.clientHeight;
        const currentScroll = textBox.scrollTop;
        setIsAtBottom(currentScroll + textBox.clientHeight >= maxScroll - 10);
      }
    };
    
    if (textBox) {
      textBox.addEventListener('scroll', handleScroll);
      // Check initial position
      handleScroll();
    }
    
    return () => {
      if (textBox) {
        textBox.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
          
          {/* Text box with scrollable content */}
          <div className="text-box-container">
            <div className="text-box" ref={textBoxRef}>
              <div className="text-content">
                <p>
                  I'm a passionate software developer who thrives on solving complex problems and building efficient, scalable applications. With a strong foundation in both development and networking, I've worked on various projects, contributing to both frontend and backend development.
                </p>
                
                <p className="large-text">
                  These are some of my key technical capabilities:
                </p>
                
                <p>
                  <span className="stack-title">Full Stack Development:</span> I have expertise in building and deploying web applications using modern technologies like React, Express.js, Blazor, .NET Core, and Firebase. I'm proficient in integrating RESTful APIs and leveraging Firebase for real-time database management and authentication.
                </p>

                <p>
                  <span className="stack-title">Database and Cloud Solutions:</span> I possess strong experience in database management with SQL (Microsoft SQL Server, MySQL) and NoSQL (MongoDB), and have worked with cloud platforms such as AWS and Google Cloud to deploy scalable applications and optimize infrastructure.
                </p>

                <p>
                  <span className="stack-title">Software Quality Assurance:</span> I'm skilled in automating testing processes with Python, Bash, and Selenium, which has helped reduce manual testing time and improve overall test coverage, ensuring the delivery of high-quality software.
                </p>

                <p className="large-text">When I'm not coding, I'm exploring new tech trends or building personal projects that push my skills further. I'm always eager to collaborate on projects that make a difference.</p>
              </div>
              <div className="gradient-overlay"></div>
            </div>
            <button 
              className={`scroll-down-btn ${isAtBottom ? 'rotate-up' : ''}`}
              onClick={handleScrollDown}
            >
              {isAtBottom ? (
                <FaChevronUp className="scroll-icon" />
              ) : (
                <FaChevronDown className="scroll-icon" />
              )}
            </button>
          </div>

          {/* Tech icons */}
          <div className="tech-stack">
            <div className="tech-icons-scrollable" ref={techIconsRef}>
              <div className="tech-icons-container">
                <FaReact className="tech-icon-ab" title="React" />
                <SiExpress className="tech-icon-ab" title="Express.js" />
                <SiMysql className="tech-icon-ab" title="SQL" />
                <SiSpring className="tech-icon-ab" title="Spring Boot" />
                <SiJavascript className="tech-icon-ab" title="JavaScript" />
                <FaJava className="tech-icon-ab" title="Java" />
                <FaPython className="tech-icon-ab" title="Python" />
                <SiGooglecloud className="tech-icon-ab" title="Google Cloud" />
                <SiMysql className="tech-icon-ab" title="MySQL" />
                <SiMongodb className="tech-icon-ab" title="MongoDB" />
                <FaAws className="tech-icon-ab" title="AWS" />
                <SiKotlin className="tech-icon-ab" title="Kotlin" />
                <FaHtml5 className="tech-icon-ab" title="HTML5" />
                <FaCss3Alt className="tech-icon-ab" title="CSS3" />
                <SiDotnet className="tech-icon-ab" title=".NET" />
                <SiBlazor className="tech-icon-ab" title="Blazor" />
                <FaNodeJs className="tech-icon-ab" title="Node.js" />
                <SiSwift className="tech-icon-ab" title="SwiftUI" />
                <SiSpring className="tech-icon-ab" title="Spring Boot" />
                <SiApachekafka className="tech-icon-ab" title="Kafka" />
                <SiAndroidstudio className="tech-icon-ab" title="Android Studio" />
                <SiSelenium className="tech-icon-ab" title="Selenium" />
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