import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import './Experience.css';

const companyLogos = {
  "Sheridan College": "/images/sheridan_logo.png",
  "Evertz Microsystems": "/images/evertz_logo.png",
  "Health Canada": "/images/hc_logo.png"
};

const experiences = [
  {
    title: "Associate Degree",
    company: "Sheridan College",
    period: "Sept 2021 - Dec 2024",
    location: "Oakville, ON",
    highlights: [
      "Graduated with 3.8/4.0 GPA in Software Development & Networking Engineering",
      "Enterprise application development with multiple languages",
      "Cloud computing with AWS/GCP",
      "Android/IOS app development"
    ],
    skills: ["JAVA", "AWS", "UI/UX", "Big Data"]
  },
  {
    title: "Software QA Engineer",
    company: "Evertz Microsystems",
    period: "Dec 2022 - Apr 2023",
    location: "Burlington, ON",
    highlights: [
      "Automated testing with Python/Selenium",
      "Network protocol testing (SNMP/TCP/IP)",
      "Developed efficiency tools",
      "Reduced testing time by 40%"
    ],
    skills: ["Python", "Selenium", "SNMP", "Bash"]
  },
  {
    title: "Full Stack Developer",
    company: "Health Canada",
    period: "Aug 2023 - Current",
    location: "Ottawa, ON",
    highlights: [
      "20k+ lines of Blazor/.NET Core code",
      "Optimized SQL queries by 20%",
      "98% bug resolution rate",
      "Reduced post-launch issues by 15%"
    ],
    skills: ["Blazor", ".NET Core", "SQL Server", "JS"]
  }
];

export default function Experience() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(containerRef);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const startAnimation = useCallback((initialProgress = 0) => {
    controls.start({
      x: [`${initialProgress}%`, `${initialProgress - 100}%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear"
        }
      }
    });
  }, [controls]);

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (isPaused) {
      startAnimation(progress);
    } else {
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const matrix = new DOMMatrix(getComputedStyle(trackRef.current).transform);
      const currentProgress = (matrix.m41 / (trackWidth - containerWidth)) * 100;
      setProgress(currentProgress);
      controls.stop();
    }
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (isInView && !isPaused) {
      startAnimation();
    }
  }, [isInView, isPaused, startAnimation]);

  return (
    <section id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical <span className="highlight-exp">Experience</span>
      </motion.h2>

      <div className="scrolling-container" ref={containerRef}>
        <motion.div 
          className="scrolling-track"
          ref={trackRef}
          animate={controls}
        >
          {[...experiences, ...experiences].map((exp, index) => (
            <motion.div
              key={`${index}-${exp.company}`}
              className={`experience-card ${isPaused ? 'paused' : ''}`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(20, 0, 20, 0.76)'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={handleCardClick}
            >
              <div className="card-front">
                <div className="company-logo">
                  <img 
                    src={companyLogos[exp.company]} 
                    alt={`${exp.company} logo`} 
                  />
                </div>
                <h3>{exp.title}</h3>
                <div className="period">{exp.period}</div>
                {exp.location && <div className="location">{exp.location}</div>}
              </div>
              
              <div className="card-details">
                <div className="company-header">
                  <img 
                    className="detail-logo" 
                    src={companyLogos[exp.company]} 
                    alt={`${exp.company} logo`} 
                  />
                  <span className="company">{exp.company}</span>
                </div>
                <ul className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="bullet">▹</span> {highlight}
                    </motion.li>
                  ))}
                </ul>
                <div className="skills-container">
                  {exp.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="skill-tag"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { 
                          delay: 0.3 + i * 0.1,
                          y: { 
                            type: "spring", 
                            stiffness: 300,
                            damping: 10
                          }
                        }
                      }}
                      whileHover={{ y: -3 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}