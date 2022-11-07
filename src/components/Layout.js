import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/layout.css';

export default function Layout() {
  return (
    <nav className="nav">
      <h1 className="layout_heading">
        Welcome
      </h1>

      <div className="navigation">
        <NavLink
          to="/" end
          style={({ isActive }) => ({
            color: isActive ? 'tomato' : 'white',
          
          })}
        >
          Home
        </NavLink>
        {''} | {''}
        <NavLink
          to="about"
          style={({ isActive }) => ({
            color: isActive ? 'tomato' : 'white',
          })}
        >
          About
        </NavLink>{' '}
        | {''}
        <NavLink
          to="user"
          style={({ isActive }) => ({
            color: isActive ? 'tomato' : 'white',
          })}
        >
          User
        </NavLink>
      </div>
    </nav>
  );
}
