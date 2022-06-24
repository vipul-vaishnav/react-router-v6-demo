import React, { useState, useEffect } from 'react';
import ProductPage from './../components/ProductPage';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const datanew = res.data;
        if (res.status === 200) {
          setLoading(false);
          setData(datanew);
        } else {
          setLoading(false);
          setData([
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
    getData();
  }, [id]);

  if (loading) {
    return (
      <div style={{ fontWeight: 'bold', color: 'red', fontSize: '30px', margin: '30px auto' }}>
        <h1>Loading...</h1>
        <p>Please wait</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#999999' }}>
      <h1 style={{ margin: '0' }}>Product Details</h1>
      <p>Here is your product</p>
      <ul style={{ listStyle: 'none' }} className="product-list">
        <ProductPage data={data} />
      </ul>
      <button className="btn-back" type="button" onClick={() => navigate('/products')}>
        Explore More Products
      </button>
    </div>
  );
};

export default ProductDetails;
