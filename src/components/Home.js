import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const name = "SINGH";

  useEffect(() => {
    // Start typing animation after 1 second
    const timer = setTimeout(() => {
      setShowTitle(true);
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < name.length) {
          setTypedText(name.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150); // Adjust typing speed here
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const createParticles = () => {
      const particles = [];
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `rgba(146, 30, 146, ${Math.random() * 0.5 + 0.1})`
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles that are close to each other or to mouse
        const dx = mousePosRef.current.x - particle.x;
        const dy = mousePosRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(146, 30, 146, ${1 - distance / 150})`;
          ctx.lineWidth = 0.25;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosRef.current.x, mousePosRef.current.y);
          ctx.stroke();
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="https://videos.pexels.com/video-files/7898649/7898649-sd_640_360_15fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      {/* Canvas Animation */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-shape"
            initial={{ 
              y: Math.random() * 100 - 50,
              x: Math.random() * 100 - 50,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="home-content"
      >
        <motion.h1 
          className="home-title"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          MEHARVAAN {showTitle && <span className="highlight">{typedText}</span>}
        </motion.h1>
        
        <motion.h2 
          className="home-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full stack Developer | UI/UX Enthusiast
        </motion.h2>
        
        <motion.p 
          className="home-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I create beautiful, responsive websites with cutting-edge technologies.
  Experienced in full-stack development with a versatile skillset.
        </motion.p>
        
        <motion.div 
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.button 
            className="primary-btn"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button 
            className="secondary-btn"
            onClick={() => {
              // Create a temporary anchor element
              const link = document.createElement('a');
              link.href = '/Meharvaan_Singh_Resume.pdf'; // Update this path to your actual CV file
              link.download = 'Meharvaan_Singh_Resume.pdf'; // This will be the suggested filename for download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;