import React, { useState, useEffect } from 'react';
import Product from './../components/Product';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        const data = res.data;
        if (res.status === 200) {
          setLoading(false);
          setProducts(data);
        } else {
          setLoading(false);
          setProducts([
            {
              status: 'failed',
              message: 'Unable to load products',
            },
          ]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ fontWeight: 'bold', color: 'red', fontSize: '30px', margin: '30px auto' }}>
        <h1>Loading...</h1>
        <p>Please wait</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#e7e7e7' }}>
      <h1 style={{ margin: '0' }}>Products</h1>
      <ul style={{ listStyle: 'none' }} className="product-list">
        {products.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
