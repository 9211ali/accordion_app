import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [slider, setSlider] = useState(0);

  const URL = "https://picsum.photos/v2/list?page=1&limit=10";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
      } catch (e) {
        setError("Error: " + e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const prevSlide = () => {
    setSlider(slider === 0 ? images.length - 1 : slider - 1);
  };

  const nextSlide = () => {
    setSlider(slider === images.length - 1 ? 0 : slider + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.download_url}
          alt={image.author}
          className={slider === index ? "image" : "image hide"}
        />
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={
              slider === index
                ? "current-indicator"
                : "current-indicator inactive"
            }
            onClick={() => setSlider(index)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
