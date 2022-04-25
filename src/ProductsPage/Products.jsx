import React from "react";
import data from "./components/data";
import Card from "./components/Card";

const Products = () => {
    console.log(data)
    const superSaver = data["superData"].map(item => {
        return <Card title={item.title} price={item.price} key={item.id}/>
    })

    const popularMeals = data["products"].map(item => {
        return <Card title={item.title} price={item.price} key={item.id}/>
    })

    return (
        
        <section className="products">
            <h2 className="product-title">Super Saver</h2>
            <hr/>
            {superSaver}
            <h2 className="product-title">Popular Meals</h2>
            <hr/>
            {popularMeals}
        </section>
    )
}

export default Products