import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ starsCount = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
      }}
    >
      <div>
        {[...Array(starsCount)].map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              onClick={() => setRating(starValue)}
              size={40}
              className={starValue <= rating ? "active" : "inactive"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
