import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./ProductsPage/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Product />
    </Router>
  );
}

export default App;
