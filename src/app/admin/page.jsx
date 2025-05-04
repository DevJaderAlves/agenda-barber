// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function AdminPainel() {
//   const [agendamentos, setAgendamentos] = useState([]);

//   const carregar = async () => {
//     try {
//       const res = await axios.get("https://cadastrobarber.onrender.com/api/agendamentos");
//       setAgendamentos(res.data);
//     } catch {
//       alert("Erro ao carregar agendamentos.");
//     }
//   };

//   const atualizarStatus = async (id, status) => {
//     try {
//       await axios.put(`https://cadastrobarber.onrender.com/api/agendamentos/${id}/status`, { status });
//       carregar(); // atualiza a lista
//     } catch {
//       alert("Erro ao atualizar status.");
//     }
//   };

//   useEffect(() => {
//     carregar();
//   }, []);

//   const corStatus = (status) => {
//     if (status === "aprovado") return "text-green-600 font-semibold";
//     if (status === "recusado") return "text-red-600 font-semibold";
//     return "text-yellow-600 font-semibold";
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">Painel do Administrador</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-lg">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
//               <th className="py-3 px-4 text-left">ID</th>
//               <th className="py-3 px-4 text-left">Nome</th>
//               <th className="py-3 px-4 text-left">Serviço</th>
//               <th className="py-3 px-4 text-left">Profissional</th>
//               <th className="py-3 px-4 text-left">Horário</th>
//               <th className="py-3 px-4 text-left">Status</th>
//               <th className="py-3 px-4 text-left">Ações</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {agendamentos.map((item) => (
//               <tr
//                 key={item.id}
//                 className="border-b border-gray-200 hover:bg-gray-50 transition"
//               >
//                 <td className="py-3 px-4">{item.id}</td>
//                 <td className="py-3 px-4 capitalize">{item.nome}</td>
//                 <td className="py-3 px-4">{item.servico}</td>
//                 <td className="py-3 px-4">{item.profissional}</td>
//                 <td className="py-3 px-4">{item.horario}</td>
//                 <td className={`py-3 px-4 ${corStatus(item.status)}`}>{item.status}</td>
//                 <td className="py-3 px-4">
//                   {item.status === "pendente" && (
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => atualizarStatus(item.id, "aprovado")}
//                         className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition"
//                       >
//                         ✅ Aprovar
//                       </button>
//                       <button
//                         onClick={() => atualizarStatus(item.id, "recusado")}
//                         className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
//                       >
//                         ❌ Recusar
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }






// "use client";

// import { useState } from "react";
// import TelaBoasVindas from "./components/TelaBoasVindas";
// import TelaServicos from "./components/TelaServicos";
// import TelaProfissionais from "./components/TelaProfissionais";
// import TelaHorarios from "./components/TelaHorarios";
// import TelaDadosClientes from "./components/TelaDadosClientes";
// import TelaConfirmacao from "./components/TelaConfirmacao";

// export default function Home() {
//   const [telaAtual, setTelaAtual] = useState(1);
//   const [dadosAgendamento, setDadosAgendamento] = useState({
//     servico: null,
//     profissional: null,
//     dia: "",
//     horario: "",
//     cliente: { nome: "", telefone: "" },
//   });

//   const irParaProximaTela = () => setTelaAtual(telaAtual + 1);
//   const voltarTela = () => setTelaAtual(telaAtual - 1);

//   const atualizarDados = (novosDados) => {
//     setDadosAgendamento((prev) => ({ ...prev, ...novosDados }));
//   };

//   const handleConfirmar = async () => {
//     try {
//       const response = await fetch("https://cadastrobarber.onrender.com/api/agendamentos", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dadosAgendamento),
//       });

//       if (response.ok) {
//         alert("Agendamento confirmado! ✅");
//         setTelaAtual(1);
//         setDadosAgendamento({
//           servico: null,
//           profissional: null,
//           dia: "",
//           horario: "",
//           cliente: { nome: "", telefone: "" },
//         });
//       } else {
//         alert("Erro ao confirmar o agendamento.");
//       }
//     } catch (erro) {
//       alert("Erro: " + erro.message);
//     }
//   };

//   return (
//     <div>
//       {telaAtual === 1 && (
//         <TelaBoasVindas
//           onContinuar={irParaProximaTela}
//         />
//       )}
//       {telaAtual === 2 && (
//         <TelaServicos
//           onSelecionar={(servico) => {
//             atualizarDados({ servico });
//             irParaProximaTela();
//           }}
//           onVoltar={voltarTela}
//         />
//       )}
//       {telaAtual === 3 && (
//         <TelaProfissionais
//           onSelecionar={(profissional) => {
//             atualizarDados({ profissional });
//             irParaProximaTela();
//           }}
//           onVoltar={voltarTela}
//         />
//       )}
//       {telaAtual === 4 && (
//         <TelaHorarios
//           onSelecionar={(dia, horario) => {
//             atualizarDados({ dia, horario });
//             irParaProximaTela();
//           }}
//           onVoltar={voltarTela}
//         />
//       )}
//       {telaAtual === 5 && (
//         <TelaDadosClientes
//           onContinuar={(cliente) => {
//             atualizarDados({ cliente });
//             irParaProximaTela();
//           }}
//           onVoltar={voltarTela}
//         />
//       )}
//       {telaAtual === 6 && (
//         <TelaConfirmacao
//           dados={dadosAgendamento}
//           onVoltar={voltarTela}
//           onConfirmar={handleConfirmar}
//         />
//       )}
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import TelaBoasVindas from "./TelaBoasVindas";
import TelaServicos from "./TelaServicos";
import TelaProfissionais from "./TelaProfissionais";
import TelaHorarios from "./TelaHorarios";
import TelaDadosCliente from "./TelaDadosCliente";
import TelaConfirmacao from "./TelaConfirmacao";

export default function Page() {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState({
    servico: null,
    profissional: null,
    dia: null,
    horario: "",
    cliente: { nome: "", telefone: "" },
  });

  const proximo = () => setEtapa((prev) => prev + 1);
  const voltar = () => setEtapa((prev) => prev - 1);

  const selecionarServico = (servico) => {
    setDados((prev) => ({ ...prev, servico }));
  };

  const selecionarProfissional = (profissional) => {
    setDados((prev) => ({ ...prev, profissional }));
  };

  const selecionarDiaHorario = ({ dia, horario }) => {
    setDados((prev) => ({
      ...prev,
      dia,
      horario,
    }));
    proximo();  // depois de escolher dia e horário, já avança
  };

  const preencherCliente = (cliente) => {
    setDados((prev) => ({
      ...prev,
      cliente,
    }));
    proximo();  // depois de preencher dados, avança para confirmação
  };

  return (
    <div>
      {etapa === 0 && <TelaBoasVindas onProximo={proximo} />}
      {etapa === 1 && (
        <TelaServicos
          onProximo={proximo}
          onVoltar={voltar}
          selecionarServico={selecionarServico}
        />
      )}
      {etapa === 2 && (
        <TelaProfissionais
          onProximo={proximo}
          onVoltar={voltar}
          selecionarProfissional={selecionarProfissional}
        />
      )}
      {etapa === 3 && (
        <TelaHorarios
          onSelecionar={selecionarDiaHorario}
          voltar={voltar}
        />
      )}
      {etapa === 4 && (
        <TelaDadosCliente
          onProximo={proximo}
          onVoltar={voltar}
          preencherCliente={preencherCliente}
        />
      )}
      {etapa === 5 && (
        <TelaConfirmacao
          dados={dados}
          onVoltar={voltar}
          onConfirmar={() => alert("Agendamento Confirmado!")}
        />
      )}
    </div>
  );
}

