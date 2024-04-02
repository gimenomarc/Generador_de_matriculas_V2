// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Switch from 'react-switch';
import { ChevronDownIcon } from '@heroicons/react/outline'; // Importar icono de flecha hacia abajo desde Heroicons v2
import './Navigation.css';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [showMatriculasOptions, setShowMatriculasOptions] = useState(false);

  const toggleMatriculasOptions = () => {
    setShowMatriculasOptions(!showMatriculasOptions);
  };

  return (
    <nav className={`${darkMode ? 'bg-menu-dark' : 'bg-menu-light'} transition-colors`}>
      <ul className="flex flex-col sm:flex-row sm:space-x-4 justify-center items-center py-4 sm:py-6">
        <TransitionGroup component={null}>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0">
              <Link
                to="/api"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  API
                </button>
              </Link>
            </li>
          </CSSTransition>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 relative">
              <button
                onClick={toggleMatriculasOptions}
                className={`nav-link text-white flex items-center hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
              >
                <span>Matrículas</span>
                <ChevronDownIcon className="w-5 h-5 ml-1" /> {/* Icono de flecha hacia abajo */}
              </button>
              {showMatriculasOptions && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-md z-10">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/validar-matricula"
                        className={`block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
                      >
                        Validar Matrícula
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/matriculas-espana"
                        className={`block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
                      >
                        Matrículas de España
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/matriculas-especiales"
                        className={`block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
                      >
                        Matrículas especiales
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/matriculas-extranjeras"
                        className={`block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
                      >
                        Matrículas extranjeras
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </CSSTransition>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0">
              <Link
                to="/generar-dni"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''}`}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Generar DNI
                </button>
              </Link>
            </li>
          </CSSTransition>
        </TransitionGroup>
        <li className="flex items-center ml-auto mr-8">
          <label htmlFor="darkModeToggle" className={`mr-2 text-sm font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </label>

          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={16}
            width={40}
            className="react-switch"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;


