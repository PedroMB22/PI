import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/home">Home</Link>
      <Link to="/createDog">Create Dog</Link> 
    </div>
  );
};
