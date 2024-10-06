"use client";

import React from 'react';

const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full p-4 space-y-4 bg-opacity-30 overflow-y-auto">
      {/* Botón para subir archivos en la parte superior izquierda */}
      <div className="sticky top-0">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Upload</button>
      </div>

      {/* Agregando más gráficos para el scroll */}
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="w-full h-32 bg-gray-800 rounded flex justify-center items-center mb-4">
          <span className="text-white">[Graph {index + 1}]</span>
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;
