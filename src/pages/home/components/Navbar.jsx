import { useContext } from 'react';
import { DisplayContext } from '../../../context/DisplayContext';

const Navbar = () => {
  
  const {display, setDisplay} = useContext(DisplayContext);
    
  return (
      <header className="header">
        <div className='main_logo'>
          <img src='/LogoWhite.png' />
        </div>
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