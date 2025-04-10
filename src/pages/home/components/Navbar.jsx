import { useContext } from 'react';
import { DisplayContext } from '../../../context/DisplayContext';

const Navbar = () => {
  
  const {display, setDisplay} = useContext(DisplayContext);
    
  return (
      <header className="header">
        <img src="/LogoWhite.png" alt="Eventfy Logo" className="logo" />
        <nav className="nav">
        <a className="nav-link" onClick={() => setDisplay("events")}>
          Search events
        </a>
          <a href="#" className="nav-link">User guide</a>
          <a href="#" className="nav-link">About us</a>
          <a className="nav-link" onClick={() => setDisplay("feed")}>
          feed TEMPORARIO
        </a>
        </nav>
        <button className="login-button" onClick={()=> setDisplay("entry")} >Login</button>
      </header>
    );
  };
  
  export default Navbar;