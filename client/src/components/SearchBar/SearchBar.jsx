import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../css/searchBar.css';
export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchType === "name") {
      try {
        const response = await axios.get(
          `http://localhost:3001/dog/name?name=${searchValue}`
        );
        const data = response.data;
        navigate("/search-results", { state: { searchResults: data } });
        console.log(data);
      } catch (error) {
        console.error(error);
        setAlertMessage("No se encontró ningún perro con ese nombre");
      }
    } else if (searchType === "id") {
      try {
        const response = await axios.get(`http://localhost:3001/dogs/${searchValue}`);
        const data = response.data;
        console.log(data);
        navigate("/search-results", { state: { searchResults: [data] } });
      } catch (error) {
        console.log(error);
        setAlertMessage("No se encontró ningún perro con ese ID");
      }
    }
    setSearchValue("");
  };

  return (
    <>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <form onSubmit={handleSubmit}>
      <div className="input-box">
      <i className="uil uil-search"></i>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <select className="select" value={searchType} onChange={handleSelectChange}>
          <option value="name">Search by name</option>
          <option value="id">Search by ID</option>
        </select>
        <button className="button" type="submit">Search</button>
        </div>
      </form>
    </>
  );
}

      
      