import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:sahimeharvaan@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AReply to: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="contact-heading">Contact <span className="highlight-contact">Me</span></h2>

        <div className="contact-content">
          {/* Image Container with floating animation */}
          <div className="image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/images/contact.png`} 
              alt="Contact Visual"
              className="contact-image floating"
            />
          </div>

          {/* Form */}
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name here"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Enter your message here"
                  required
                />
              </div>

              <button type="submit" className="submit-button primary-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="copyright">
            © {new Date().getFullYear()} All Rights Reserved by Meharvaan Singh
          </div>
          <div className="social-links">
            <a href="https://github.com/MeharvaanS" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="mailto:sahimeharvaan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/meharvaansingh/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
