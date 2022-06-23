import React from 'react';

const Home = ({ name, age, email, phone, setEmail, setPhone, handleSubmit, setName, setAge }) => {
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              id="name"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              id="name"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone number"
              id="name"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              id="age"
              placeholder="Enter age"
              min="10"
              max="99"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
