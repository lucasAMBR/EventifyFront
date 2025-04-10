import React from 'react';
import './Events.css';
import Search from './components/Search';
import Content from './components/Content';

const Events = () => {
  return (
    <div className="EventsPage">
      <Search/>
      <Content/>
    </div>
  );
};

export default Events;
