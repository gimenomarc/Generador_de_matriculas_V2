import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 mb-4 text-gray-500 text-center">
      <p className="text-sm">
        © Created by{' '}
        <a
          href="https://www.linkedin.com/in/marc-gimeno-b2546020a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Marc Gimeno
        </a>
      </p>
      <p>
        Este trabajo está marcado con el destino{' '}
        <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="licencia noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}>
          CC0 1.0
          <img style={{ height: '20px', marginLeft: '3px', verticalAlign: 'middle' }} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
          <img style={{ height: '20px', marginLeft: '3px', verticalAlign: 'middle' }} src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1" alt="Zero" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;