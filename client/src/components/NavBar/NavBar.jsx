import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Menu from "../../components/Menu/Menu";
import { dogsStateModel } from "../../redux/states/dogs.states";
import '../../css/menu.css'
export default function Navbar() {
  const [dogsState, setDogsState] = useState(dogsStateModel);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchResult = (data, route) => {
    console.log(data);
    setDogsState({ ...dogsState, data: data });
    navigate(route);
  };

  return (
    <div>
      <SearchBar onSearchResult={handleSearchResult} />
      <div class="menu">
        <a href="/Home">Home</a>
      </div>
    </div>
  );
}
