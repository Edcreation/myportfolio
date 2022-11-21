import './App.css';
import React from 'react';
import {Header,Cert, Contacts} from './containers';
import { useState } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import instagram from './assets/images/instagram.png'
import linkedin from './assets/images/linkedin.png'
import gmail from './assets/images/gmail.png'
function App() {


  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
      setMenuOpen(prev => !prev)
    }

  return (
    <>

    <div className='navbar'>
      <div className="logo">
        MY<span>PORTFOLIO</span>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/certifications">Certificates</Link>
        <Link to="/contacts">Contacts</Link>

      </div>
      <div className="menu">
        <div className="menu-icon">
        <i  onClick={handleToggle} className={`fa fa-bars   ${menuOpen ? "fa-solid fa-xmark" : ""}`} ></i>
          
        </div>

        <div className={`menu-container   ${menuOpen ? " showMenu slide-in-top" : ""}`}  >
        <Link to="/home">Home</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/contacts">Contacts</Link>
        </div>
      </div>

    </div><div className="App">
      <Routes>
    <Route  path="/" element={<Header />}/>
    <Route  path="/home" element={<Header />}/>
    <Route  path='/certifications' element={<Cert />}  />
    <Route  path='/contacts' element={<Contacts />}  />
    </Routes>
      </div>
      <footer>
        <div className="footer">
          <div className="social">
            <a href='https://www.instagram.com/___e.d.d.y/' target="_blank"><img src={instagram} alt='instagram' /></a>
            <a href='https://www.linkedin.com/in/eddy-mugisha-4b4a5219a/' target="_blank"><img src={linkedin} alt='linkedin' /></a>
            <a href='' target="_blank"><img src={gmail} alt='gmail' /></a>
          </div>
        </div>
        <div className="copyright">
          <p>All rights reserved by M.J.Eddy 2022 &copy;</p>
        </div>
      </footer>
      </>
  );
}
export default App;
