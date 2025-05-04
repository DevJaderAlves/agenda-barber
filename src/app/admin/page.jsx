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
      carregar();
    } catch {
      alert("Erro ao atualizar status.");
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Painel do Administrador</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-black shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Nome</th>
              <th className="py-3 px-4">Serviço</th>
              <th className="py-3 px-4">Profissional</th>
              <th className="py-3 px-4">Horário</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4 capitalize">{item.nome}</td>
                <td className="py-3 px-4">{item.servico}</td>
                <td className="py-3 px-4">{item.profissional}</td>
                <td className="py-3 px-4">{item.horario}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded ${
                    item.status === "aprovado" ? "bg-green-500" :
                    item.status === "recusado" ? "bg-red-500" : "bg-yellow-400"
                  } text-white`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex gap-2">
                  {item.status === "pendente" && (
                    <>
                      <button
                        onClick={() => atualizarStatus(item.id, "aprovado")}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      >
                        ✅ Aprovar
                      </button>
                      <button
                        onClick={() => atualizarStatus(item.id, "recusado")}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        ❌ Recusar
                      </button>
                    </>
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





