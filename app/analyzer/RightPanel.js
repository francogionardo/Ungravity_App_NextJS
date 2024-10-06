"use client";

import { useState } from 'react';

const RightPanel = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Hola, ¿en qué te puedo ayudar?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-end items-center p-4 space-y-4 bg-opacity-30 overflow-y-auto">
      {/* Área de mensajes de chat con scroll */}
      <div className="w-full h-3/4 bg-gray-800 rounded-lg p-4 flex flex-col space-y-2 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`w-fit max-w-[70%] ${
              message.sender === "user" ? "self-end bg-blue-500" : "self-start bg-gray-600"
            } text-white p-2 rounded-lg`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Caja de entrada de texto del chat */}
      <div className="w-full flex items-center space-x-2">
        <input
          type="text"
          className="w-full h-12 p-4 bg-gray-700 text-white rounded-lg focus:outline-none"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
