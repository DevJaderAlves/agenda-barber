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
    const confirmar = confirm("Deseja realmente excluir este agendamento?");
    if (!confirmar) return;

    try {
      await axios.delete(`https://cadastrobarber.onrender.com/api/agendamentos/${id}`);
      carregarAgendamentos(); // atualiza lista
    } catch (err) {
      alert("Erro ao excluir agendamento.");
    }
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);











  
// ...

const confirmarAgendamento = async () => {
  try {
    await axios.post("https://cadastrobarber.onrender.com/api/agendamentos", {
      nome: dadosCliente.nome,
      telefone: dadosCliente.telefone,
      servico: servicoSelecionado.nome,
      profissional: profissionalSelecionado.nome,
      horario: horarioSelecionado,
    });

    alert("Agendamento enviado com sucesso!");
    setEtapa(1);

  } catch (error) {
    if (error.response && error.response.status === 409) {
      alert("⚠️ Esse horário já está ocupado. Por favor, escolha outro.");
      setEtapa(4); // Volta para tela de escolha de horário
    } else {
      alert("Erro ao enviar agendamento. Tente novamente.");
    }
  }
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Agendamentos Realizados</h1>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Telefone</th>
            <th className="p-2">Serviço</th>
            <th className="p-2">Profissional</th>
            <th className="p-2">Horário</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.nome}</td>
              <td className="p-2">{item.telefone}</td>
              <td className="p-2">{item.servico}</td>
              <td className="p-2">{item.profissional}</td>
              <td className="p-2">{item.horario}</td>
              <td className="p-2">
                <button
                  onClick={() => deletar(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                >
                  Excluir
                </button>
                {/* Botão editar pode ser adicionado depois */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
