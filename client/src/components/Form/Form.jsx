import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogsActions } from "../../redux/actions/dogs.actions";
import { temperamentsActions } from "../../redux/actions/temperaments.actions";
import "../../css/form.css"; 

const CreateDog = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => Object.values(state.temperamentsReducer?.data || {}));
  
  const [name, setName] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  useEffect(() => {
    console.log(temperaments);
    dispatch(temperamentsActions.getTemperaments()); // Cargar los temperamentos al montar el componente
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dogData = {
      name,
      height: `${minHeight} - ${maxHeight}`,
      weight: `${minWeight} - ${maxWeight}`,
      life_span: lifeSpan,
      temperaments: selectedTemperaments,
    };

    dispatch(dogsActions.post(dogData)); // Enviar los datos al servidor
    alert("Dog created successfully!");
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;

    if (/\d/.test(newName)) {
      return;
    }

    setName(newName);
  };

  const handleTemperamentChange = (e) => {
    const temperament = e.target.value;
  
    if (selectedTemperaments.includes(temperament)) {
      setSelectedTemperaments(selectedTemperaments.filter(t => t !== temperament));
    } else {
      setSelectedTemperaments([...selectedTemperaments, temperament]);
    }
  };
  console.log(selectedTemperaments);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <i className="uil uil-dog"></i>
        <input
          className="input-field"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="input-box">
        <i className="uil uil-ruler"></i>
        <div className="input-group">
          <input
            className="input-field"
            type="number"
            min="1"
            placeholder="Altura mínima"
            value={minHeight}
            onChange={(e) => setMinHeight(e.target.value)}
          />
          <input
            className="input-field"
            type="number"
            min={minHeight}
            placeholder="Altura máxima"
            value={maxHeight}
            onChange={(e) => setMaxHeight(e.target.value)}
          />
        </div>
      </div>

      <div className="input-box">
        <i className="uil uil-weight"></i>
        <div className="input-group">
          <input
            className="input-field"
            type="number"
            min="1"
            placeholder="Peso mínimo"
            value={minWeight}
            onChange={(e) => setMinWeight(e.target.value)}
          />
          <input
            className="input-field"
            type="number"
            min={minWeight}
            placeholder="Peso máximo"
            value={maxWeight}
            onChange={(e) => setMaxWeight(e.target.value)}
          />
        </div>
      </div>

      <div className="input-box">
        <i className="uil uil-hourglass"></i>
        <input
          className="input-field"
          type="text"
          placeholder="Años de vida"
          value={lifeSpan}
          onChange={(e) => setLifeSpan(e.target.value)}
        />
      </div>

      <div className="input-box">
        <i className="uil uil-search"></i>
        <select className="select" multiple onChange={handleTemperamentChange}>
          {temperaments.map((temperament) => (
            <option key={temperament} value={temperament}>
              {temperament}
            </option>
          ))}
        </select>
      </div>

      <div className="input-box">
        {selectedTemperaments.map((temperament) => (
          <div key={temperament} className="selected-temperament">
            {temperament}
            <button
              className="remove-button"
              onClick={() => handleTemperamentChange({ target: { value: temperament } })}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <button type="submit" className="input-box button">
        Crear nueva raza
      </button>
    </form>
  );
};

export default CreateDog;