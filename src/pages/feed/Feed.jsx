
import React from 'react';
import "./Feed.css"
import "./Main.css";
import Lateral from '../../components/lateral';
import Conteudo from './components/Conteudo';



const Feed = () => {
  return (
    <div className = "HomePage">
      <Lateral/>
      <Conteudo/>
    </div >
  );
};

export default Feed;