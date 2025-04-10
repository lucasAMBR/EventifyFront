import React from 'react';
import '../Events.css';

const Content = () => {
  const popularEvents = [1, 2, 3]; /*Array de repeticao */
  const otherEvents = [5, 6, 7, 8,9,10,11,12];

  return (
    <div className="content-container">
      {/*Popular Evenets */}
      <section className="section">
        <h2 className="section-title">Most Popular events now</h2>
        <div className="card-container">
          {popularEvents.map((item, index) => (
            <div className="event-card" key={`popular-${index}`}>
              <div className="event-image">
                <img src="/test.png" alt="evento popular" className="event-img" />
                <span className="presential-badge">Presential</span>
              </div>
              <div className="event-info">
                <h3>Lorem ipsum</h3>
                <div className="detail"><img src="/time.svg" className="iconCard" /> 25/10, 22:30</div>
                <div className="detail"><img src="/location.svg" className="iconCard" /> São Paulo, SP, Brasil</div>
                <div className="detail"><img src="/person.svg" className="iconCard" /> Limite: 15.000 pessoas</div>
                <button>More Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Another Events */}
      <section className="section">
        <h2 className="section-title">Other Events</h2>
        <div className="card-container">
          {otherEvents.map((item, index) => (
            <div className="event-card" key={`other-${index}`}>
              <div className="event-image">
                <img src="/test.png" alt="outro evento" className="event-img" />
                <span className="presential-badge">Online</span>
              </div>
              <div className="event-info">
                <h3>Dolor sit amet</h3>
                <div className="detail"><img src="/time.svg" className="iconCard" /> 25/10, 22:30</div>
                <div className="detail"><img src="/location.svg" className="iconCard" /> São Paulo, SP, Brasil</div>
                <div className="detail"><img src="/person.svg" className="iconCard" /> Limite: 15.000 pessoas</div>
                <button>More Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
