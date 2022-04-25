import React from "react";

export default function Card(props) {
  const { image, title, price } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={`../../images/${image}`} alt={title} />
      </div>
      <div className="card-body">
        {title}
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          pellentesque ultricies consectetur purus tempor tincidunt ut
          dignissim. praesent placerat felis. Faucibus vitae auctor consectetur.
        </article>
        <h4 style={{ color: "red" }}>Ingredients</h4>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          pellentesque ultricies consectetur purus tempor tincidunt ut
          dignissim. Augue ut vitae purus, praesent malesuada ultrices lacus,
          mattis. Tristique scelerisque amet, in id. Habitant dui praesent
          placerat felis. Faucibus vitae auctor consectetur.
        </article>

        <div className="order-section">
          <button className="order-button">Order Now</button>
          <input type="number" placeholder="0"></input>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
}
