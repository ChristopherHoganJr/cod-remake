import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className='navbar-container'>
          <a href='#' className='navbar-title'>
            CALL<span>OF</span>DUTY
          </a>
          <ul className='navbar-links'>
            <li>
              <a className='navbar-links--link' href='#'>
                GAMES
              </a>
            </li>
            <li>
              <a className='navbar-links--link' href='#'>
                NEWS
              </a>
            </li>
            <li>
              <a className='navbar-links--link' href='#'>
                ESPORTS
              </a>
            </li>
            <li>
              <a className='navbar-links--link' href='#'>
                SUPPORT
              </a>
            </li>
            <li>
              <a className='navbar-links--link' href='#'>
                SHOP
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-container'>
          <ul className='navbar-links'>
            <li className='navbar-links--user'>
              <a className='navbar-links--userLink' href='#'>
                LOGIN
              </a>{" "}
              <span className='navbar-links--userLink'> | </span>
              <a className='navbar-links--userLink' href='#'>
                SIGN UP
              </a>
            </li>
            <li>
              <a className='navbar-links--link' href='#'>
                MY CALL OF DUTY
              </a>
            </li>
            <li>
              <a className='navbar-links--link navbar-links--purchase' href='#'>
                PURCHASE MWII
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
