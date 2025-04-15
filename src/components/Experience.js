import { motion } from 'framer-motion';
import './Experience.css';

const companyLogos = {
  "Sheridan College": "/images/sheridan_logo.png",
  "Evertz Microsystems": "/images/evertz_logo.png",
  "Health Canada": "/images/hc_logo.png"
};

const experiences = [
  {
    title: "IT Technician",
    company: "Health Canada",
    period: "Aug 2023 - Mar 2025",
    location: "Ottawa, ON",
    highlights: [
      "Contributed over 5k lines of Blazor, .NET Core, JavaScript, and SQL code for critical projects in an Agile environment",
      "Developed and optimized complex SQL scripts to create efficient database schemas",
      "Achieved a 98% bug resolution rate, maintaining a post-deployment bug occurrence rate of under 2%",
      "Reduced post-launch issues by 15% through rigorous testing and proactive code reviews"
    ],
    skills: ["Blazor", ".NET Core", "SQL Server", "JS"]
  },
  {
    title: "Software QA Engineer",
    company: "Evertz Microsystems",
    period: "Dec 2022 - Apr 2023",
    location: "Burlington, ON",
    highlights: [
      "Developed and executed automated testing scripts using Python and Selenium",
      "Worked with network protocols like SNMP, TCP/IP, HTTP, DNS, and DHCP for comprehensive testing",
      "Developed console applications and tools, streamlining daily client operations",
      "Reduced manual testing by 40% through automation and increased testing efficiency"
    ],
    skills: ["Python", "Selenium", "SNMP", "Bash"]
  },
  {
    title: "Associate Degree",
    company: "Sheridan College",
    period: "Sept 2021 - Dec 2024",
    location: "Oakville, ON",
    highlights: [
      "Graduated with a 3.78/4.0 GPA in Software Development and Networking Engineering, named to the Dean’s Honours List",
      "Developed enterprise applications using languages like C#, Java, JS, and Python",
      "Worked with cloud platforms like AWS and GCP for scalable and efficient solutions",
      "Gained a year of Coop experience in industry, applying skills in real-world projects"
    ],
    skills: ["JAVA", "AWS", "UI/UX", "Big Data"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical <span className="highlight-exp">Experience</span>
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(20, 0, 20, 0.76)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
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
                    viewport={{ once: true }}
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
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}