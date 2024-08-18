import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavLink to="/image-slider" className="link">
          Image Slider
        </NavLink>
        <NavLink to="/star-rating" className="link">
          Star Rating
        </NavLink>
        <NavLink to="/accordion" className="link">
          Accordion
        </NavLink>
        <NavLink to="/color-generator" className="link">
          Color Generator
        </NavLink>
      </div>

      <Routes>
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/color-generator" element={<RandomColor />} />
      </Routes>
    </div>
  );
}

export default App;
