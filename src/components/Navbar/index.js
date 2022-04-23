import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Navbar";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/logo.png")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/about">
            <h3>About</h3>
          </NavLink>
          <NavLink to="/products">
            <h3>Products</h3>
          </NavLink>
          <NavLink to="/contact">
            <h3>Contact</h3>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
