"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  const carregarAgendamentos = async () => {
    try {
      const res = await axios.get("https://cadastrobarber.onrender.com/api/agendamentos");
      setAgendamentos(res.data);
    } catch (err) {
      alert("Erro ao carregar agendamentos.");
    }
  };

  const deletar = async (id) => {
    if (!confirm("Deseja realmente excluir este agendamento?")) return;

    try {
      await axios.delete(`https://cadastrobarber.onrender.com/api/agendamentos/${id}`);
      carregarAgendamentos();
    } catch (err) {
      alert("Erro ao excluir agendamento.");
    }
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Agendamentos Realizados</h1>

      <table className="w-full bg-white text-black rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Nome</th>
            <th className="py-3 px-4">Telefone</th>
            <th className="py-3 px-4">Serviço</th>
            <th className="py-3 px-4">Profissional</th>
            <th className="py-3 px-4">Horário</th>
            <th className="py-3 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.nome}</td>
              <td className="py-3 px-4">{item.telefone}</td>
              <td className="py-3 px-4">{item.servico}</td>
              <td className="py-3 px-4">{item.profissional}</td>
              <td className="py-3 px-4">{item.horario}</td>
              <td className="py-3 px-4">
                <button
                  onClick={() => deletar(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  🗑️ Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

