import React, { useContext } from 'react';
import '../Events.css';
import { DisplayContext } from '../../../context/DisplayContext';

const Search = () => {
  const { setDisplay } = useContext(DisplayContext);

  return (
    <header className="events-header">
      <h1 className="events-title" onClick={() => setDisplay("home")}>
        <img src="/Arrow.svg" className="arrow-icon" />
        Event Search
      </h1>

      <div className="events-search-bar">
        <input
          type="text"
          placeholder="Search for a event near you"
          className="events-search-input"
        />
        <button className="events-filter-button"><img src="/cake.svg" className="filter" /></button>
      </div>
    </header>
  );
};

export default Search;
