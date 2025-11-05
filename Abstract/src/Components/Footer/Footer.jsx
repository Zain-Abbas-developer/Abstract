import React from 'react'
import './Footer.css'
import footer_logo from "../../assets/svg/9b0b5f4d-e303-4b8e-8316-7c7b364b4332.svg";
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="about-footer">
        <h2>Abstract</h2>
        <Link to='start-trial'>Start Trial</Link>
        <a href="">Pricing</a>
        <a href="">Download</a>
      </div>
      <div className="resource-footer">
        <h2>Resources</h2>
        <a href="">Blog</a>
        <a href="">Help Center</a>
        <a href="">Release Notes</a>
        <a href="">Status</a>
      </div>
      <div className="community-footer">
        <h2>Community</h2>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
        <a href="">Facebook</a>
        <a href="">Dribbble</a>
        <a href="">Podcast</a>
      </div>
      <div className="company-footer">
        <h2>Company</h2>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Legal</a>
        <div className="bottom-content">
          <h3>Contact Us</h3>
          <a href="">zainabbasllc2@gmail.com</a>
        </div>
      </div>
      <div className="logo-footer">
        <img src={footer_logo} alt="" />
        <p>© Copyright 2025</p>
        <p>Abstract Studio Design, Inc. <br />All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer
