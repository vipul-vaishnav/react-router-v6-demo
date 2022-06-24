import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${data.id}`);
  };

  return (
    <li className="product">
      <div className="product-image">
        <img src={data.image} alt="product-img" />
      </div>
      <div className="product-data">
        <h1 className="product-title">{data.title}</h1>
        <h2 className="product-category">{data.category}</h2>
      </div>
      <div className="product-meta">
        <div className="product-price">
          <p>Price: ${data.price}</p>
        </div>
      </div>
      <button onClick={handleClick} type="button" className="btn-more">
        Read More
      </button>
    </li>
  );
};

export default Product;
