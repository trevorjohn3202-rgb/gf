import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { useMemo, useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Foodmenu from './components/Foodmenu';
import Home from './components/Home';
import Event from './components/Event';
import MakePayment from './components/MakePayment';
import Reservations from './components/Reservations';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Drinks from './components/Drinks'


function App () {
    const [navOpen, setNavOpen] = useState(false);

    const navItems = useMemo(() => ([
        { to: '/', label: 'Home' },
        { to: '/event', label: 'EVENTS' },
        { to: '/drinks', label: 'DRINKS MENU' },
        { to: '/foodmenu', label: 'FOOD MENU' },
        { to: '/reservations', label: 'TAKE A RESERVATION' },
        { to: '/signin', label: 'SignIn' },
        { to: '/signup', label: 'SignUp' },
    ]), []);

    const handleNavClick = () => setNavOpen(false);

    return(
      //header of the home page
        <BrowserRouter>
            <div className="App">
                <header
                style={{
                    height : '175px',
                    backgroundColor : 'black'
                }}>
                    <h1
                    style={{
                        font : "revert",
                        fontSize : "100px"
                    }}
                    className="text-white display-3"><b>AL CAPONE</b></h1>

                    <div style= {{
                        backgroundColor : "grey",
                        height : "90px",
                        fontSize : "50px",
                        fontFamily : "ui-serif"
                      }}>
                         <marquee>NOTORIOUS NIGHTS, LEGENDARY VIBES</marquee>
                    </div>

                    <br/>
                    <br/>
                    
                    
                </header>


                    <br/> <br/> <br/>
                    
                {/* navigation links  */}
                <nav className="nav-links" aria-label="Primary">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="btn btn-outline-dark mx-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* mobile dropdown */}
                <div className="nav-toggle-wrap">
                  <button
                    type="button"
                    className="btn btn-outline-dark nav-toggle"
                    aria-expanded={navOpen}
                    aria-controls="mobile-nav-dropdown"
                    onClick={() => setNavOpen((v) => !v)}
                  >
                    Menu
                  </button>

                  {navOpen && (
                    <div
                      id="mobile-nav-dropdown"
                      className="mobile-nav-dropdown"
                      role="menu"
                      aria-label="Mobile navigation"
                    >
                      {navItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="mobile-nav-item"
                          role="menuitem"
                          onClick={handleNavClick}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Routes section */}
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/event' element={<Event/>}/>
                  <Route path='/drinks' element={<Drinks/>}/>
                  <Route path='/foodmenu' element={<Foodmenu/>}/>
                  <Route path='/reservations' element={<Reservations/>}/>
                  <Route path='/signip' element={<Signin/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/makepayment' element={<MakePayment/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
