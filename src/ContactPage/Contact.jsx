import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp} from 'react-icons/bs'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className="contact_option_icon"/>
            <h4>Email</h4>
            <h5>sidehustleG51@sidehustle.com</h5>
            <a href="maileto:sidehustleG51@sidehustle.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
          <RiMessengerLine className="contact_option_icon"/>
            <h4>Messenger</h4>
            <h5>sidehustle G51 Tutorials</h5>
            <a href="#" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
          <BsWhatsapp className="contact_option_icon"/>
            <h4>WhatsApp</h4>
            <h5>+2349875151</h5>
            <a href="#" target="_blank">Send a Message</a>
          </article>
        </div>
        <form>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact