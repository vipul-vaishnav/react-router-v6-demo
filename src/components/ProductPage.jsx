import React from 'react';

const ProductPage = ({ data }) => {
  return (
    <li className="product">
      <div className="product-image">
        <img src={data.image} alt="product-img" />
      </div>
      <div className="product-data">
        <h1 className="product-title">{data.title}</h1>
        <h2 className="product-category">{data.category}</h2>
        <h2 className="product-description">{data.description}</h2>
      </div>
      <div className="product-meta">
        <div className="product-rating">
          Rating: {data.rating.rate} <span>Count: {data.rating.count}</span>
        </div>
        <div className="product-price">
          <p>Price: ${data.price}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductPage;
