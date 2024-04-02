import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './DniGenerator.css';
import copiadoImage from '../Assets/copiado.png';

const DniGenerator = ({ darkMode }) => {
  const [dniNumbers, setDniNumbers] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const generateRandomDni = () => {
    const randomDniNumber = Math.floor(Math.random() * 100000000); // Generate a random 8-digit DNI number

    const controlDigit = calculateControlDigit(randomDniNumber);

    const randomDni = `${randomDniNumber}${controlDigit}`;

    setDniNumbers((prevDniNumbers) => [randomDni, ...prevDniNumbers]);
  };

  const calculateControlDigit = (dniNumber) => {
    const controlChars = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const controlDigit = controlChars.charAt(dniNumber % 23);
    return controlDigit;
  };

  const copyDniNumber = (dniNumber, index) => {
    navigator.clipboard.writeText(dniNumber);
    setCopiedIndex(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setCopiedIndex(null);
      setIsTransitioning(false);
    }, 1000);
  };

  const clearDniNumbers = () => {
    setDniNumbers([]);
    setCopiedIndex(null);
  };

  return (
    <div>
      <h1
        className={`text-5xl font-bold text-center my-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
      >
        Generador de DNI
      </h1>
      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center">
          <button
            className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2 flex-grow ${darkMode ? 'dark-mode' : ''}`}
            onClick={generateRandomDni}
          >
            Generar
          </button>
          <button
            className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2 flex-grow ${darkMode ? 'dark-mode' : ''}`}
            onClick={clearDniNumbers}
          >
            Limpiar
          </button>
        </div>
        {dniNumbers.length > 0 && (
          <div className="mt-4 w-full">
            <h2
              className={`text-2xl font-semibold mb-2 mt-10 text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
            >
              DNI Generados
            </h2>
            <TransitionGroup>
              {dniNumbers.map((dniNumber, index) => (
                <CSSTransition key={index} timeout={500} classNames="slide">
                  <div className={`flex items-center bg-gray-100 rounded py-2 px-4 mb-2 ${darkMode ? 'dark-mode' : ''}`}>
                    <span className="flex-grow text-black">{dniNumber}</span>
                    <button
                      style={{ minWidth: '100px', minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r button-copied ${copiedIndex === index ? 'copied' : ''}`}
                      onClick={() => copyDniNumber(dniNumber, index)}
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

export default DniGenerator;