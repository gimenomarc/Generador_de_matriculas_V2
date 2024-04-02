import React from 'react';

const NotFoundPage = ({ darkMode }) => (
  <div className="flex flex-col justify-center items-center mt-32">
    <h1 className={`text-9xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>404</h1>
    <p className={`mt-3 text-xl font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Page not found</p>
  </div>
);

export default NotFoundPage;
