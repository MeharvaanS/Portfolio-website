import React, { useState } from 'react';
import './Projects.css';
import { FaEye, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { 
  SiReact, SiExpress, SiMongodb, SiFirebase, SiOpenai, SiGit, SiPostman, 
  SiJavascript, SiCss3, SiHtml5, SiGooglecloud,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const getTechIcon = (tech) => {
  switch (tech) {
    case 'React': return <SiReact className="tech-icon" />;
    case 'Express': return <SiExpress className="tech-icon" />;
    case 'MongoDB': return <SiMongodb className="tech-icon" />;
    case 'Open AI': return <SiOpenai className="tech-icon" />;
    case 'REST': return <SiPostman className="tech-icon" />;
    case 'GIT': return <SiGit className="tech-icon" />;
    case 'JS': return <SiJavascript className="tech-icon" />;
    case 'CSS3': return <SiCss3 className="tech-icon" />;
    case 'HTML5': return <SiHtml5 className="tech-icon" />;
    case 'GCP': return <SiGooglecloud className="tech-icon" />;
    case 'Firebase': return <SiFirebase className="tech-icon" />;
    default: return <span>{tech}</span>;
  }
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="project-modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-image-container">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="modal-info">
          <h3>{project.title}</h3>
          
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <div key={tag} className="tech-tag">
                {getTechIcon(tag)}
                <span className="tech-name">{tag}</span>
              </div>
            ))}
          </div>
          
          <p className="modal-description">{project.description}</p>
          
          <div className="modal-buttons">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-primary-btn modal-live-btn"
            >
              <FaExternalLinkAlt className="modal-live-icon" />
              Live Demo
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-primary-btn modal-github-btn"
            >
              <FaGithub className="modal-github-icon" />
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectItem = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div ref={ref} className="project-row">
      {isModalOpen && <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />}
      
      <motion.div 
        className="project-image-container"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ 
          type: 'spring',
          stiffness: 60,
          damping: 15,
          delay: 0,
          mass: 0.7,
          restDelta: 0.001
        }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image-simple" 
        />
      </motion.div>

      <motion.div 
        className="project-info"
        initial={{ x: '100vw', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ 
          type: 'spring',
          stiffness: 60,
          damping: 15,
          mass: 0.7,
          delay: 0,
          restDelta: 0.001
        }}
      >
        <h3>{project.title}</h3>
        <div className="tags">
          {project.tags.map((tag) => (
            <div key={tag} className="tech-tag">
              {getTechIcon(tag)}
              <span className="tech-name">{tag}</span>
            </div>
          ))}
        </div>
        <div className="project-buttons">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="primary-btn demo-btn"
          >
            <FaEye className="button-icon" />
            View
          </button>
          <button 
            onClick={() => window.open(project.demoLink, '_blank', 'noopener,noreferrer')}
            className="primary-btn live-btn"
          >
            <FaExternalLinkAlt className="live-icon" />
            Live
          </button>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-logo-button"
          >
            <FaGithub className="github-icon" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mac Autos",
      description: "A responsive dark-themed website for MAC Auto Company featuring a futuristic UI with real-time customer reviews. Developed with React.js frontend, Express.js backend, and MongoDB database to showcase their automotive services with modern aesthetics.",
      tags: ["React", "Express", "MongoDB", "GIT"],
      image: process.env.PUBLIC_URL + "/images/p1.png",
      githubLink: "https://github.com/MeharvaanS/AutoServ",
      demoLink: "https://drive.google.com/file/d/1d665DcfXvV9vAQHPt5HzyP0Jyb6xp1bs/view?usp=sharing"
    },
    {
      id: 2,
      title: "LifeLine",
      description: "A productivity platform integrating meeting management and AI-powered note-taking. Developed by a 4-person team, combining a React/Express web app with Chrome extension for meeting capture, OpenAI for automation and Firebase for realtime sync.",
      tags: ["React", "Express", "Open AI", "Firebase"],
      image: process.env.PUBLIC_URL + "/images/p2.png",
      githubLink: "https://github.com/MeharvaanS/Lifeline",
      demoLink: "https://youtu.be/Y4pcPdBb6Uk"
    },
    {
      id: 3,
      title: "Flash OTP",
      description: "A Chrome extension that securely fetches verification codes for various online services from Gmail with a click, eliminating manual copying during logins. Leverages Google Cloud Platform for OAuth authentication and Gmail API for email processing.",
      tags: ["JS", "CSS3", "HTML5", "GCP"],
      image: process.env.PUBLIC_URL + "/images/p3.png",
      githubLink: "https://github.com/MeharvaanS/Flash-OTP",
      demoLink: "https://chromewebstore.google.com/detail/flash-otp/fnphnodjohmidefopjnpedjdihbmmphe"
    },
    {
      id: 4,
      title: "Live Play",
      description: "A Chrome extension that delivers real-time cricket scores, match updates, and news. Fetches live data through REST APIs to provide up-to-date information on global matches across multiple leagues and tournaments. Features dark mode for comfortable viewing.",
      tags: ["JS", "CSS3", "HTML5", "REST"],
      image: process.env.PUBLIC_URL + "/images/p4.png",
      githubLink: "https://github.com/MeharvaanS/LivePlay",
      demoLink: "https://chromewebstore.google.com/detail/live-play/ppdcjfooclbikiiadjmcjddiapincihk"
    }
  ];

  return (
    <section className="projects-section">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project <span className="accent-projects">Work</span>
        <img src="/images/3d_hand.png" alt="3D Hand Icon" />
      </motion.h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;