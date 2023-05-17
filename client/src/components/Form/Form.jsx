import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dogsActions } from "../../redux/actions/dogs.actions";
import { Antonyms } from "../Temperaments/Antonyms"; // Importa los antónimos

const CreateDog = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [temperaments, setTemperaments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const handleNameChange = (e) => {
    const newName = e.target.value;

    // Si el nombre contiene números, no cambie el estado
    if (/\d/.test(newName)) {
      return;
    }

    setName(newName);
  };

  const handleTemperamentChange = (e) => {
    const newTemperaments = e.target.value;

    // Comprobar si los temperamentos son antónimos
    const temperamentArray = newTemperaments.split(",").map(str => str.trim());
    for (let i = 0; i < temperamentArray.length; i++) {
      for (let j = i + 1; j < temperamentArray.length; j++) {
        if (Antonyms[temperamentArray[i]] === temperamentArray[j] || Antonyms[temperamentArray[j]] === temperamentArray[i]) {
          return; // Si son antónimos, no cambie el estado
        }
      }
    }

    setTemperaments(newTemperaments);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input value={name} onChange={handleNameChange} />

      <label>Altura (min-max):</label>
      <input type="number" min="1" value={minHeight} onChange={(e) => setMinHeight(e.target.value)} />
      <input type="number" min={minHeight} value={maxHeight} onChange={(e) => setMaxHeight(e.target.value)} />

      <label>Peso (min-max):</label>
      <input type="number" min="1" value={minWeight} onChange={(e) => setMinWeight(e.target.value)} />
      <input type="number" min={minWeight} value={maxWeight} onChange={(e) => setMaxWeight(e.target.value)} />
      <label>Años de vida:</label>
  <input value={lifeSpan} onChange={(e) => setLifeSpan(e.target.value)} />

  <label>Temperamentos (separados por coma):</label>
  <input value={temperaments} onChange={handleTemperamentChange} />

  <button type="submit">Crear nueva raza</button>
</form>
);
};
export default CreateDog;