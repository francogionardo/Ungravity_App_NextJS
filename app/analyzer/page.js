"use client";

import { useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import styles from '../../styles';

const Analyzer = () => {
  const [leftWidth, setLeftWidth] = useState(50);

  const handleDrag = (e) => {
    const newWidth = (e.clientX / window.innerWidth) * 100;
    setLeftWidth(newWidth);
  };

  return (
    <div className="relative bg-primary-black overflow-hidden min-h-screen">
      {/* Fondo de degradado */}
      <div className="absolute inset-0 z-0">
        <div className="gradient-03 z-0" />
        <div className="gradient-04 z-0" />
      </div>

      {/* Contenedor principal dividido */}
      <div className="relative z-10 flex h-screen">
        {/* Parte izquierda (gráficos) */}
        <div className="relative" style={{ width: `${leftWidth}%` }}>
          <LeftPanel />
        </div>

        {/* Divisor ajustable */}
        <div
          className="w-2 bg-gray-600 cursor-col-resize"
          onMouseDown={() => {
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', handleDrag);
            });
          }}
        ></div>

        {/* Parte derecha (chat) */}
        <RightPanel />
      </div>
    </div>
  );
};

export default Analyzer;
