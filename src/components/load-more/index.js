import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const URL = "https://dummyjson.com/products?limit=20";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true whenever fetching starts
      try {
        const response = await fetch(
          `${URL}&skip=${count === 0 ? 0 : count * 20}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
          setProducts((prevProducts) => [...prevProducts, ...data["products"]]);
        }
      } catch (e) {
        setError("Error: " + e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [count]);

  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (products?.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading && products.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="load-container">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button
          type="button"
          className="load-more"
          onClick={handleLoadMore}
          disabled={disableButton}
        >
          Load More Products
        </button>
        {disableButton && (
          <p
            style={{
              color: "yellow",
              fontWeight: "bolder",
              fontSize: "20px",
              textDecoration: "underline",
              display: "block",
            }}
          >
            Oops! You have reached maximum limit of 100 products
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadMoreProducts;
