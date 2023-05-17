import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dogsActions } from "../../redux/actions/dogs.actions";

const CreateDog = () => {
    const dispatch = useDispatch();
  
    // Definir estados locales para los datos del formulario
    const [name, setName] = useState("");
    const [minHeight, setMinHeight] = useState("");
    const [maxHeight, setMaxHeight] = useState("");
    const [minWeight, setMinWeight] = useState("");
    const [maxWeight, setMaxWeight] = useState("");
    const [lifeSpan, setLifeSpan] = useState("");
    const [temperaments, setTemperaments] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Crear objeto con los datos del formulario
      const dogData = {
        name,
        height: `${minHeight} - ${maxHeight}`,
        weight: `${minWeight} - ${maxWeight}`,
        life_span: lifeSpan,
        temperament: temperaments.split(",").map(str => str.trim()), // Convertir cadena de temperamentos en array
      };
  
      // Enviar los datos al servidor
      dispatch(dogsActions.post(dogData));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
  
        <label>Altura (min-max):</label>
        <input value={minHeight} onChange={(e) => setMinHeight(e.target.value)} />
        <input value={maxHeight} onChange={(e) => setMaxHeight(e.target.value)} />
  
        <label>Peso (min-max):</label>
        <input value={minWeight} onChange={(e) => setMinWeight(e.target.value)} />
        <input value={maxWeight} onChange={(e) => setMaxWeight(e.target.value)} />
  
        <label>Años de vida:</label>
        <input value={lifeSpan} onChange={(e) => setLifeSpan(e.target.value)} />
  
        <label>Temperamentos (separados por coma):</label>
        <input value={temperaments} onChange={(e) => setTemperaments(e.target.value)} />
  
        <button type="submit">Crear nueva raza</button>
      </form>
    );
  };
  
  export default CreateDog;
  