import React from "react";
import data from "./components/data";
import Card from "./components/Card";
import "./components/card.css";
import {CgGym} from 'react-icons/cg'
import { FcMoneyTransfer } from 'react-icons/fc'

const Products = () => {
  const superSaver = data["superData"].map((item) => {
    return (
      <Card
        image={item.image}
        title={item.title}
        price={item.price}
        key={item.id}
      />
    );
  });

  const popularMeals = data["products"].map((item) => {
    return (
      <Card
        image={item.image}
        title={item.title}
        price={item.price}
        key={item.id}
      />
    );
  });

  return (
    <section className="products" style={{ paddingTop:'50px'}}>
      <h2 className="product-title">Super Saver <FcMoneyTransfer/> </h2>
      <hr />
      <div className="superSaver-wrapper">{superSaver}</div>
      <h2 className="product-title">Popular Meals <CgGym/> </h2>
      <hr />
      <div className="popularMeal-wrapper">{popularMeals}</div>
    </section>
  );
};

export default Products;
