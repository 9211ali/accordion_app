import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <h2>Note: These are mini apps build reactjs library.</h2>
      <NavLink to="/accordion" className="nav-link">
        Accordion
      </NavLink>
      <NavLink to="/color-generator" className="nav-link">
        Color Generator
      </NavLink>
      <NavLink to="/image-slider" className="nav-link">
        Image Slider
      </NavLink>
      <NavLink to="/load-more-products" className="nav-link">
        Load More Products
      </NavLink>
      <NavLink to="/search-autocomplete" className="nav-link">
        Search AutoComplete
      </NavLink>
      <NavLink to="/star-rating" className="nav-link">
        Star Rating
      </NavLink>
    </div>
  );
};

export default Home;
