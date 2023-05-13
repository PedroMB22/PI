import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Cards/Card";

export default function SearchResults() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const imageUrl = "https://cdn2.thedogapi.com/images/";
  const imageDefault =
    "https://img.freepik.com/vector-premium/lindo-cachorro-perro-salchicha-sobre-fondo-blanco-diseno-dibujos-animados_530689-342.jpg";

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <div className="card-container">
          {searchResults.map((dog) => (
            <Card
              key={dog.id}
              name={dog.name}
              image={dog.reference_image_id ? `${imageUrl}${dog.reference_image_id}.jpg` : imageDefault}
              temperament={dog.temperament}
              weight={`${dog.weight.imperial} / ${dog.weight.metric}`}
              life_span={dog.life_span}
            />
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}
