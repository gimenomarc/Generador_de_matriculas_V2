import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ForeignLicensePlates.css';
import copiadoImage from '../Assets/copiado.png';

const ForeignLicensePlates = ({ darkMode }) => {
  const [licensePlates, setLicensePlates] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const generateLicensePlate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let plate = '';
    for (let i = 0; i < 3; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      plate += randomLetter;
    }

    for (let i = 0; i < 4; i++) {
      const randomDigit = numbers[Math.floor(Math.random() * numbers.length)];
      plate += randomDigit;
    }

    setLicensePlates((prevLicensePlates) => [plate, ...prevLicensePlates]);
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
      <h1 className={`text-5xl font-bold text-center my-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Matrículas extranjeras
      </h1>
      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center">
          <button
            className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2 flex-grow ${darkMode ? 'dark-mode' : ''}`}
            onClick={generateLicensePlate}
          >
            Generar
          </button>
          <button
            className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2 flex-grow ${darkMode ? 'dark-mode' : ''}`}
            onClick={clearLicensePlates}
          >
            Limpiar
          </button>
        </div>
        {licensePlates.length > 0 && (
          <div className="mt-4 w-full">
            <h2 className={`text-2xl font-semibold mb-2 mt-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Matrículas Generadas
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

export default ForeignLicensePlates;

