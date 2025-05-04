"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPainel() {
  const [agendamentos, setAgendamentos] = useState([]);

  const carregar = async () => {
    try {
      const res = await axios.get("https://cadastrobarber.onrender.com/api/agendamentos");
      setAgendamentos(res.data);
    } catch {
      alert("Erro ao carregar agendamentos.");
    }
  };

  const atualizarStatus = async (id, status) => {
    try {
      await axios.put(`https://cadastrobarber.onrender.com/api/agendamentos/${id}/status`, { status });
      carregar(); // atualiza a lista
    } catch {
      alert("Erro ao atualizar status.");
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const corStatus = (status) => {
    if (status === "aprovado") return "text-green-600 font-semibold";
    if (status === "recusado") return "text-red-600 font-semibold";
    return "text-yellow-600 font-semibold";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Painel do Administrador</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Nome</th>
              <th className="py-3 px-4 text-left">Serviço</th>
              <th className="py-3 px-4 text-left">Profissional</th>
              <th className="py-3 px-4 text-left">Horário</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {agendamentos.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4 capitalize">{item.nome}</td>
                <td className="py-3 px-4">{item.servico}</td>
                <td className="py-3 px-4">{item.profissional}</td>
                <td className="py-3 px-4">{item.horario}</td>
                <td className={`py-3 px-4 ${corStatus(item.status)}`}>{item.status}</td>
                <td className="py-3 px-4">
                  {item.status === "pendente" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => atualizarStatus(item.id, "aprovado")}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition"
                      >
                        ✅ Aprovar
                      </button>
                      <button
                        onClick={() => atualizarStatus(item.id, "recusado")}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
                      >
                        ❌ Recusar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}




