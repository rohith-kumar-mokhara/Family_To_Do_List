import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';

export interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
  return (<div className='navbar'>
    <ul className='navbar-items'>
      <Link className='nav-link' to={"/"}>
        <li className='nav-item'>Home</li>
      </Link>
      <Link className='nav-link' to={"/tasks"}>
        <li className='nav-item'>Tasks</li>
      </Link>
      <Link className='nav-link' to={"/leaderboard"}>
        <li className='nav-item'>Leaderboard</li>
      </Link>
      <Link className='nav-link' to={"/calendar"}>
        <li className='nav-item'>Calendar</li>
      </Link>
      <Link className='nav-link' to={"/login"}>
        <li className='nav-item'>Login</li>
      </Link>
      <Link className='nav-link' to={"/faqs"}>
        <li className='nav-item'>FAQs</li>
      </Link>
    </ul>
  </div>
  );
}
