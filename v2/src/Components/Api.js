import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Api.css';

const Api = ({ darkMode }) => {
  return (
    <div className={`p-8 mx-auto text-center w-full md:max-w-2xl ${darkMode ? 'bg-dark text-gray-200' : 'bg-light text-gray-800'}`}>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
        <div className="flex justify-center items-center space-x-4">
          <h1 className="text-4xl mb-4 font-semibold">API Generador de Matrículas en progreso</h1>
          <div className="spinner"></div>
        </div>
      </CSSTransition>

      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <p className="mb-10 text-lg">
          Este es un servicio API que genera matrículas aleatorias para diferentes países y también puede comprobar 
          la validez de una matrícula para ciertos países. El proyecto es un servidor de Node.js que utiliza Express para 
          manejar las solicitudes HTTP. Las matrículas se generan y se comprueban mediante módulos específicos del país. 
          Esta API es ideal para implementar en cualquier proyecto que requiera la generación o validación de matrículas.
        </p>
      </CSSTransition>

      <CSSTransition in={true} appear={true} timeout={700} classNames="fade">
        <h2 className="text-3xl mb-2 font-semibold">Endpoints</h2>
      </CSSTransition>

      <CSSTransition in={true} appear={true} timeout={900} classNames="fade">
        <ul className="list-disc pl-5 mb-4 text-left inline-block">
          <li className="text-lg">
            <strong>GET /:</strong> Devuelve un mensaje de bienvenida.
          </li>
          <li className="text-lg">
            <strong>GET /generar-matricula/:pais:</strong> Genera una matrícula aleatoria para el país especificado. 
            Los países válidos son es para España, us para Estados Unidos, aus para Australia, de para Alemania, fr para Francia, uk para Reino Unido e it para Italia.
          </li>
          <li className="text-lg">
            <strong>GET /comprobar-matricula/:pais/:matricula:</strong> Comprueba si una matrícula es válida para 
            el país especificado. Los países soportados para esta funcionalidad son es para España, us para Estados Unidos, aus para Australia, de para Alemania, fr para Francia, uk para Reino Unido e it para Italia.
          </li>
          <li className="text-lg">
            <strong>GET /determinar-pais/:matricula:</strong> Determina a qué país pertenece una matrícula introducida.
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Api;
