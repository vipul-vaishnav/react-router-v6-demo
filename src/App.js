import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import UserDashboard from './pages/UserDashboard';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import Name from './components/Name';
import Age from './components/Age';
import Email from './components/Email';
import Phone from './components/Phone';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState(10);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={name}
              age={age}
              email={email}
              phone={phone}
              setEmail={setEmail}
              setPhone={setPhone}
              handleSubmit={handleSubmit}
              setName={setName}
              setAge={setAge}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/products" element={<Products />} />
        {/* DYNMAIC ROUTE */}
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<UserDashboard />}>
          {/* INDEX ROUTE  */}
          <Route index element={<Name name={name} />} />
          {/* OUTLET CHILD #nested-routes */}
          <Route path="name" element={<Name name={name} />} />
          <Route path="age" element={<Age age={age} />} />
          <Route path="email" element={<Email email={email} />} />
          <Route path="phone" element={<Phone phone={phone} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
