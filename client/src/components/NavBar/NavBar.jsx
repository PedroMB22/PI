import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { dogsStateModel } from "../../redux/states/dogs.states";
import '../../css/navBar.css';
import logo from '../images/logo.png';

export default function Navbar() {
  const [dogsState, setDogsState] = useState(dogsStateModel);
  const navigate = useNavigate();

  const handleSearchResult = (data, route) => {
    console.log(data);
    setDogsState({ ...dogsState, data: data });
    navigate(route);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
        <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="search-bar">
          <SearchBar onSearchResult={handleSearchResult} />
        </div>
        <div className="menu">
        <Link to="/" className="home-link">
            Home
        </Link>
        <Link to="/create-dog" className="home-link">
            Create Dog
        </Link>
        </div>
      </header>
    </div>
  );
}









