"use client";

export default function TelaBoasVindas({ onProximo }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Olá, tudo bem?</h1>
      <p className="text-lg mb-6">Seja bem-vindo à central de marcação da barbearia.</p>
      <button 
        onClick={onProximo}
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
      >
        Clique aqui para continuar
      </button>
    </div>
  );
}
