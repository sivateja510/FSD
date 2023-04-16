import React from 'react';
import { Link } from 'react-router-dom';
import './Foot.css';

function Foot() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link className="footer__link" to="/">Home</Link>
          <Link className="footer__link" to="/Login">Login</Link>
          <Link className="footer__link" to="/contact">Contact Us</Link>
          <Link className="footer__link" to="/faq">FAQ</Link>
        </div>
        <div className="footer__social">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; 2023 Resume Builder. All rights reserved.
      </div>
    </footer>
  );
}

export default Foot;
