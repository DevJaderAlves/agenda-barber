"use client";

import { useState } from "react";

export default function TelaDadosCliente({ onProximo, onVoltar, salvarDados }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleContinuar = () => {
    salvarDados({ nome, telefone });
    onProximo();
  };

  const camposPreenchidos = nome.trim() !== "" && telefone.trim().length >= 9;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Seus dados</h2>

      <div className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-3 rounded-md w-full"
        />

        <input
          type="tel"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="border p-3 rounded-md w-full"
        />
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={onVoltar}
          className="text-sm text-gray-700 underline hover:text-black"
        >
          ← Voltar
        </button>

        <button
          onClick={handleContinuar}
          disabled={!camposPreenchidos}
          className={`px-6 py-2 rounded ${
            camposPreenchidos
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
