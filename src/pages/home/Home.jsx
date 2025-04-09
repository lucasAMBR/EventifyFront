
import React from 'react';
import "./Home.css"
import Navbar from './components/Navbar';
import Contents from './components/Contents';

const Home = () => {
  return (
    <div className = "HomePage">
      <Navbar/>
      <Contents/>
    </div >
  );
};

export default Home;