import React from 'react'
import "./components/about.css"
import bg from './components/AboutImages/header-bg.png'

const About = () => {
  return (
    <main className='big-container'>
        <header className='about-bg' style={{backgroundImage: `url(${bg})`}}>
          <h1>About</h1>
        </header>
        <section className='container'>
          <section className='first'>
            <p>G-51 has nowadays become the no 1’ choice for customers and tourist visiting Nigeria for world wide cuisines. Standing out from the competition by having a buffet option, for those who want to try different types of dishes, apart from the typical a la carte selection.</p>
            <p>Now G-51 has also ventured in international cuisine keeping the much acclaimed buffet option. We will strive to keep our high standards in the kitchen by always opting for the best ingredients and produce, while maintain our unique restaurant style and décor.</p>
            <p>Should you opt to dine at one of our G-51 Restaurants. We will do our best to make your experience is unforgettable. Should you also require, we can also cater for private parties and function.</p>
            <p>Our goal is to be the most sought after experience within our sectors of play and we are guided by our core values of INNOVATION, QUALITY, UNPARALLELED AMBIENCE & CONSISTENCY</p>
          </section>
          <section className='second'>
            <ul className='list-box'>
              <li>Our Restaurants</li>
              <li>Reservation</li>
              <li>Our Menu</li>
              <li>Contact</li>
            </ul>
          </section>
        </section>
    </main>
  )
}

export default About







