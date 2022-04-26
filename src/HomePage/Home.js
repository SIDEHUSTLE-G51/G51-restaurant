import React from "react";
import Button from "../Button/Button";
import food from "./../images/food (1).svg";
import foodOne from "./../images/Frame 2 (1).svg";
import foodTwo from "./../images/Frame 2 (2).svg";
import foodThree from "./../images/Frame 2 (3).svg";
import foodFour from "./../images/Frame 2.svg";

import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="sectionOne">
        <div>
          <h1>G-51 </h1>
          <h1>RESTAURANT</h1>
          <Link to="/products">
            {" "}
            <Button props={"Explore our dishes"} />
          </Link>
        </div>
        <div>
          <img src={food} alt="food" className="food" />
        </div>
      </div>
      <div className="sectionTwo">
        <div>
          <button className="bttn">TOP DISHES</button>
        </div>
        <div className="cardSection">
          <div className="cards">
            <img src={foodFour} alt="food" className="foodOne" />
            <span>
              <h6>Spicy Pizza</h6> <p>&#8358;3500</p>
            </span>
            <p>
              Ingredients: Mushroom, chicken <br />
              cheese, hot mexican jalapeno
            </p>
            <span>
              <Button props={"Order Now"} /> <Button props={"Book a Table"} />
            </span>
          </div>
          <div className="cards">
            <img src={foodOne} alt="food" className="foodOne" />
            <span>
              <h6> Taiwanese Beef </h6> <p>&#8358;3500</p>
            </span>
            <p>
            Ingredients: Noodles, Beef <br/>
Soy sauce, extra vegetables
            </p>
            <span>
              <Button props={"Order Now"} /> <Button props={"Book a Table"} />
            </span>
          </div>
          <div className="cards">
            <img src={foodTwo} alt="food" className="foodOne" />
            <span>
              <h6>Shrimp Risotto</h6> <p>&#8358;3500</p>
            </span>
            <p>
              Ingredients: shrimp, cream <br />
              rice, yorghurt, spring onion
            </p>
            <span>
              <Button props={"Order Now"} /> <Button props={"Book a Table"} />
            </span>
          </div>
          <div className="cards">
            <img src={foodThree} alt="food" className="foodOne" />
            <span>
              <h6>Yellow Curry</h6> <p>&#8358;3500</p>
            </span>
            <p>
              Ingredients: Rice, chicken <br />
              curry, parsley
            </p>
            <span>
              <Button props={"Order Now"} /> <Button props={"Book a Table"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
