import React from 'react';

const HTMLCSSLogo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g transform="rotate(45 50 50)">
            <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="transparent" stroke="white" strokeWidth="1" />
            <line x1="25" y1="25" x2="75" y2="25" stroke="#8dd3c7" strokeWidth="6" strokeLinecap="square" />
            <line x1="75" y1="25" x2="75" y2="75" stroke="#fb8072" strokeWidth="6" strokeLinecap="square" />
            <line x1="75" y1="75" x2="25" y2="75" stroke="#bebada" strokeWidth="6" strokeLinecap="square" />
            <line x1="25" y1="75" x2="25" y2="25" stroke="#80b1d3" strokeWidth="6" strokeLinecap="square" />
          </g>
          {/* Text inside SVG */}
          <text className="center-text" x="50" y="50" textAnchor="middle" alignmentBaseline="central"  fontSize="10">
            <tspan x="50" dy="-0.5em" fontSize="6" fontWeight="bold">HTML&CSS</tspan>
            <tspan x="50" dy="1em" fontSize="3">design and build websites</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default HTMLCSSLogo;
