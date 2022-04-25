import React from 'react'
import Button from '../Button/Button'
import food from './../images/food (1).svg'
import './home.css'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <div className='sectionOne'>
        <div>
          <h1>G-51 </h1>
          <h1>RESTAURANT</h1>
         <Link  to="/products"> <Button  props={'Explore our dishes'}/></Link>
        </div>
        <div>
        <img src={food} alt="food" className="food"/>
        </div>
      </div>

      
    </div>
    
  )
}

export default Home