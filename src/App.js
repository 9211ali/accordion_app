import { Routes, Route } from "react-router-dom";
import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreProducts from "./components/load-more";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />

      {/* routes */}
      <Routes>
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/color-generator" element={<RandomColor />} />
        <Route path="/load-more-products" element={<LoadMoreProducts />} />
      </Routes>
    </div>
  );
}

export default App;
