import React, { useState, useEffect } from 'react';
import '../../css/landing.css';
import LoaderGif from '../images/gif.gif'
const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleEnterButton = () => {
    // Lógica para redirigir a tu web
  };

  return (
    <div className="landing-page">
      {loading ? (
        <div className="loader-container">
          <img src={LoaderGif} alt="Loader" className="loaders" />
          <div className="loader-text">Loading...</div>
        </div>

      ) : (
        <>
        <h1 className='title'>MI PRIMER PROYECTO</h1>
        <div className="enter-button-container">
        <button className="enter-button" onClick={handleEnterButton}>
          Entrar a mi web
        </button>
      </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
