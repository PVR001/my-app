import React from 'react';

const HTMLCSSLogo = () => {
  return (
    <div className="logo-container">
      <div className="logo-wrapper">
        <svg viewBox="0 0 100 100" className="logo">
          <g transform="rotate(45 50 50)">
            <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="transparent" stroke="white" strokeWidth="1" />
            <line x1="25" y1="25" x2="75" y2="25" stroke="#fb8072" strokeWidth="6" strokeLinecap="square" />
            <line x1="75" y1="25" x2="75" y2="75" stroke="#bebada" strokeWidth="6" strokeLinecap="square" />
            <line x1="75" y1="75" x2="25" y2="75" stroke="#80b1d3" strokeWidth="6" strokeLinecap="square" />
            <line x1="25" y1="75" x2="25" y2="25" stroke="#8dd3c7" strokeWidth="6" strokeLinecap="square" />
          </g>
          <text x="50" y="48" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">HTML&CSS</text>
          <text x="50" y="56" textAnchor="middle" fill="white" fontSize="3">design and build websites</text>
        </svg>
      </div>
      <style jsx>{`
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #292929;
        }
        .logo-wrapper {
          width: 256px;
          height: 256px;
        }
        .logo {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default HTMLCSSLogo;
