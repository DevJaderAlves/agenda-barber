"use client";

import { useState } from "react";

export default function TelaHorarios({ onProximo, onVoltar, selecionarHorario }) {
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  const horarios = [
    "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  ];

  const handleSelecionar = (horario) => {
    setHorarioSelecionado(horario);
    selecionarHorario(horario);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Escolha um horário</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
        {horarios.map((horario) => (
          <button
            key={horario}
            onClick={() => handleSelecionar(horario)}
            className={`px-4 py-2 rounded ${
              horarioSelecionado === horario
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {horario}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onVoltar}
          className="text-sm text-gray-700 underline hover:text-black"
        >
          ← Voltar
        </button>

        <button
          onClick={onProximo}
          disabled={!horarioSelecionado}
          className={`px-6 py-2 rounded ${
            horarioSelecionado
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
