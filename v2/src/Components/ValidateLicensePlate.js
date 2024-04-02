import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ValidateLicensePlate.css';

const ValidateLicensePlate = ({ darkMode }) => {
    const [licensePlate, setLicensePlate] = useState('');
    const [isValid, setIsValid] = useState(null);

    const isMounted = useRef(null);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    const validateLicensePlate = () => {
        fetch(`http://localhost:3001/comprobar-matricula/es/${licensePlate}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (isMounted.current) {
                    setIsValid(data.esValida);
                }
            })
            .catch(err => {
                console.error(err);
                if (isMounted.current) {
                    setIsValid(false); // Actualiza el estado en caso de error
                }
            });
    };

    return (
        <div>
            <h1 className={`text-5xl font-bold text-center my-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Validar Matrícula
            </h1>
            <div className="flex flex-col items-center mt-8">
                <input
                    type="text"
                    placeholder="Introduzca la matrícula"
                    className={`px-3 py-2 text-lg border rounded ${darkMode ? 'dark-mode' : ''}`}
                    value={licensePlate}
                    onChange={e => setLicensePlate(e.target.value)}
                />
                <button
                    className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex-grow ${darkMode ? 'dark-mode' : ''}`}
                    onClick={validateLicensePlate}
                >
                    Validar
                </button>
                <CSSTransition
                    in={isValid !== null}
                    timeout={500}
                    classNames="message"
                    unmountOnExit
                >
                    <div className={`mt-10 w-full max-w-sm p-5 text-center rounded-xl text-white ${isValid ? 'bg-green-500' : 'bg-red-500'}`}>
                        <h2 className="text-3xl font-bold">
                            {isValid ? 'MATRICULA CORRECTA' : 'MATRICULA INCORRECTA'}
                        </h2>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default ValidateLicensePlate;
