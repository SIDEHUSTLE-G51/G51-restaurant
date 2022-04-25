import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Subscribe for the G-51 newsletter to be the first to receive our latest deals
            </p>
            <p className="footer-subscription-text">You can subscribe at any time.</p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <button className="btn" >Subscribe</button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to="/">How it works</Link>
                    <Link to="/">Testimonials</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to="/">Contact</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">Sponsorships</Link>
                    <Link to="/">Locations</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Youtube</Link>
                    <Link to="/">Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                   
                </div>
                    <small className='website-rights'> &copy;{new Date().getFullYear()} G-51 RESTAURANT | All RIGHTS RESERVED | PRIVACY</small>
                    <div className="social-icons">
                        <Link to='/' className="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </Link>
                        <Link to='/' className="social-icon-link instagram" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </Link>
                        <Link to='/' className="social-icon-link linkedin" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </Link>
                        <Link to='/' className="social-icon-link twitter" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </Link>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;

 // <div className="footer__col1">
        // <img src={require("../../images/logo.png")} alt="logo" className="logo"/>
        // </div>