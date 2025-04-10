
import React from 'react';
import "./Feed.css"
import Conteudo from './components/Conteudo';
import Lateral from '../../components/Lateral';



const Feed = () => {
  return (
    <div className = "HomePage">
      <Lateral />
      <Conteudo/>
    </div >
  );
};

export default Feed;