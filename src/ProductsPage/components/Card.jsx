import React from "react";
import "./card.css";
export default function Card(props) {
  const { image, title, price } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <article>
        </article>
        <h4 style={{ color: "red", fontSize: ".9rem" }}>Ingredients</h4>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          pellentesque ultricies consectetur purus tempor tincidunt ut
          dignissim.
        </article>

        <div className="order-wrapper">
          <div className="order-section">
            <button className="order-button">Order Now</button>
            <input className="order-input" type="number" placeholder="0"></input>
          </div>

          <div className="price">
            <h3>#{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
