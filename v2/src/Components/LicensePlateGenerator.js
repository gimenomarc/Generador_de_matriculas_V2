import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './LicensePlateGenerator.css';
import copiadoImage from '../Assets/copiado.png';

const LicensePlateGenerator = ({ darkMode }) => {
  const [licensePlates, setLicensePlates] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [quantity, setQuantity] = useState(1); // Cantidad predeterminada

  const generateLicensePlate = async () => {
    try {
      const response = await fetch(`https://api.generadordematriculas.com/v1/generate-license-plate/es?quantity=${quantity}`);
      if (!response.ok) {
        throw new Error('Failed to generate license plates');
      }
      const data = await response.json();
      setLicensePlates(data.matriculas);
    } catch (error) {
      console.error('Error generating license plates:', error);
    }
  };

  const copyAllLicensePlates = () => {
    const allLicensePlates = licensePlates.join(', ');
    navigator.clipboard.writeText(allLicensePlates);
  };

  const copyLicensePlate = (licensePlate, index) => {
    navigator.clipboard.writeText(licensePlate);
    setCopiedIndex(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setCopiedIndex(null);
      setIsTransitioning(false);
    }, 1000);
  };

  const clearLicensePlates = () => {
    setLicensePlates([]);
    setCopiedIndex(null);
  };

  return (
    <div>
      <h1
        className={`text-5xl font-bold text-center my-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}
      >
        Matrículas de España
      </h1>
      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center">
          <button
            className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2 flex-grow ${darkMode ? 'dark-mode' : ''}`}
            onClick={generateLicensePlate}
          >
            Generar
          </button>
          <div className="flex items-center">
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              value={quantity}
              onChange={(e) => {
                // Solo permite números y limita el valor máximo a 500
                let newValue = e.target.value.replace(/\D/g, ''); // Solo números
                newValue = Math.min(parseInt(newValue), 500); // Limita a 500
                setQuantity(newValue);
              }}
              onKeyPress={(e) => {
                // Verifica si la tecla presionada es un número
                const isNumber = /^[0-9]*$/.test(e.key);
                if (!isNumber) {
                  e.preventDefault();
                }
              }}
              className={`border-gray-300 border rounded py-2 px-4 text-center mt-4 mx-2 ${darkMode ? 'text-gray-200 bg-gray-700' : 'text-gray-800 bg-white'}`}
              style={{ width: '4rem', height: '2.5rem' }}
            />
          </div>
          <button
            className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2 flex-grow ${darkMode ? 'dark-mode' : ''}`}
            onClick={clearLicensePlates}
          >
            Limpiar
          </button>
        </div>
        {licensePlates.length > 0 && (
          <div className="mt-4 w-full">
            <h2
              className={`text-2xl font-semibold mb-2 mt-10 text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
            >
              Matrículas Generadas
              <button
                onClick={copyAllLicensePlates}
                className={`text-blue-500 font-semibold ml-4 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105`}
                style={{ fontSize: '0.8rem', cursor: 'pointer' }}
              >
                Copiar Todo
              </button>
            </h2>
            <TransitionGroup>
              {licensePlates.map((licensePlate, index) => (
                <CSSTransition key={index} timeout={500} classNames="slide">
                  <div className={`flex items-center bg-gray-100 rounded py-2 px-4 mb-2 ${darkMode ? 'dark-mode' : ''}`}>
                    <span className="flex-grow text-black">{licensePlate}</span>
                    <button
                      style={{ minWidth: '100px', minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r button-copied ${copiedIndex === index ? 'copied' : ''}`}
                      onClick={() => copyLicensePlate(licensePlate, index)}
                    >
                      {copiedIndex === index ? (
                        <CSSTransition
                          in={isTransitioning}
                          timeout={2000}
                          classNames="fade"
                          unmountOnExit
                        >
                          <img src={copiadoImage} alt="Copiado" className="h-4" />
                        </CSSTransition>
                      ) : (
                        'Copiar'
                      )}
                    </button>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default LicensePlateGenerator;
