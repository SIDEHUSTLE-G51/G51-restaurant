import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./AboutPage/About";
import Products from "./ProductsPage/Products"
import Contact from "./ContactPage/Contact";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/products" element={<Products/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
