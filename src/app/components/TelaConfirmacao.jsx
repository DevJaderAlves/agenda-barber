"use client";

export default function TelaConfirmacao({ dados, onVoltar, onConfirmar }) {
  const { servico, profissional, horario, cliente } = dados;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Confirmação do Agendamento</h2>

      <div className="bg-gray-100 p-6 rounded-lg shadow w-full max-w-md text-left mb-6">
        <p><strong>Serviço:</strong> {servico.nome}</p>
        <p><strong>Profissional:</strong> {profissional.nome}</p>
        <p><strong>Horário:</strong> {horario}</p>
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>Telefone:</strong> {cliente.telefone}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onVoltar}
          className="text-sm text-gray-700 underline hover:text-black"
        >
          ← Voltar
        </button>

        <button
          onClick={onConfirmar}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
