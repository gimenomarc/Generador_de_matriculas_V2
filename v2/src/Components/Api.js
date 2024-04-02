import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Api.css';

const Api = ({ darkMode }) => {
  return (
    <div className={`p-8 mx-auto text-center w-full max-w-screen-xl ${darkMode ? 'bg-dark text-gray-200' : 'bg-light text-gray-800'}`}>
      <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
        <div className="flex justify-center items-center space-x-4">
          <h1 className="text-4xl mb-4 font-semibold">License Plate Generator API</h1>
          <div className="spinner"></div>
        </div>
      </CSSTransition>

      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <p className="mb-10 text-lg">
          This is an API service that generates random license plates for different countries and can also validate the license plates for certain countries. The project is a Node.js server that uses Express to handle HTTP requests. License plates are generated and checked using country-specific modules. This API is ideal for implementation in any project requiring the generation or validation of license plates.
        </p>
      </CSSTransition>

      <CSSTransition in={true} appear={true} timeout={700} classNames="fade">
        <h2 className="text-3xl mb-2 font-semibold">Endpoints</h2>
      </CSSTransition>

      <CSSTransition in={true} appear={true} timeout={900} classNames="fade">
        <div className="overflow-x-auto">
          <table className="table-auto mx-auto mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Endpoint</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">GET /</td>
                <td className="border px-4 py-2">Returns a welcome message.</td>
                <td className="border px-4 py-2"><code>GET /</code></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GET /generate-license-plate/:country?quantity=:quantity</td>
                <td className="border px-4 py-2">Generates up to 100 random license plates for the specified country.</td>
                <td className="border px-4 py-2"><code>GET /generate-license-plate/es?quantity=5</code></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GET /validate-license-plate/:country?licensePlates=:licensePlates</td>
                <td className="border px-4 py-2">Validates the specified license plates for the given country.</td>
                <td className="border px-4 py-2"><code>GET /validate-license-plate/es?licensePlates=1234ABC,5678DEF</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Api;
