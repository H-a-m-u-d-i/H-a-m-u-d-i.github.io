import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section container contact-section">
      <div className="contact-card glass">
        <div className="contact-info">
          <h2 className="contact-title">Let's build something extraordinary.</h2>
          <p className="contact-desc">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
            my inbox is always open.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <div className="email-text">
              <Mail size={20} className="contact-icon" />
              <span>aduhamud85@gmail.com</span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="https://t.me/hami_du" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Telegram">
                <FaTelegram size={22} />
              </a>
              <a href="https://github.com/H-a-m-u-d-i" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/abdulhamid-ahmed-98a985286/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Replace onSubmit with action="https://formspree.io/f/YOUR_ID" to make it live */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="john@example.com" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows="4" placeholder="Hello..." className="form-input"></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>
          {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
