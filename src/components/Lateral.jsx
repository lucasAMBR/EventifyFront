
import React, { useContext } from "react";
import "./Lateral.css";
import { DisplayContext } from "../context/DisplayContext";


const Lateral = () => {

    const { setDisplay } = useContext(DisplayContext);
  return (
    <aside className="lateral">
      <div className="logo"> 
        <img src="/LogoWhite.png" alt="Eventfy logo" className="logo-icon" />
      </div>

      <div className="profile">
        <img src="/user.png" alt="User" className="profile-Avatar" />
        <span className="profile-name">My profile<br /><small>David Brito</small></span>
      </div>

            <nav className="nav-links">
                <a onClick={() => setDisplay("home")}>
                <img src="/Home.svg" /> Home
                </a>
                <a href="#"><img src="/search.svg" /> Search</a>
                <a href="#"><img src="/calendar.svg" /> Search events</a>
                <a href="#"><img src="/calendar.svg" /> Your events</a>
      </nav>

      <div className="logout-button">
        <img src="/Logout.svg" alt="Logout" />
        Logout
      </div>
    </aside>
  );
};

export default Lateral;
