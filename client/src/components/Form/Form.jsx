import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogsActions } from "../../redux/actions/dogs.actions";
import { temperamentsActions } from "../../redux/actions/temperaments.actions";

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

      <label>Temperamentos:</label>
      {temperaments &&
        temperaments.map((temperament) => (
            <div key={temperament}>
              <label>
                <input 
                  type="checkbox" 
                  value={temperament}
                  checked={selectedTemperaments.includes(temperament)}
                  onChange={handleTemperamentChange}
                />
                {temperament}
              </label>
            </div>

        ))}

      <button type="submit">Crear nueva raza</button>
    </form>
  );
};

export default CreateDog;
