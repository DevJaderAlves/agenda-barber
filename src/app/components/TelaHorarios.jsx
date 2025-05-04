// "use client";

// import { useState } from "react";

// export default function TelaHorarios({ onProximo, onVoltar, selecionarHorario }) {
//   const [horarioSelecionado, setHorarioSelecionado] = useState(null);

//   const horarios = [
//     "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00",
//   ];

//   const handleSelecionar = (horario) => {
//     setHorarioSelecionado(horario);
//     selecionarHorario(horario);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
//       <h2 className="text-2xl font-bold mb-6">Escolha um horário</h2>

//       <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
//         {horarios.map((horario) => (
//           <button
//             key={horario}
//             onClick={() => handleSelecionar(horario)}
//             className={`px-4 py-2 rounded ${
//               horarioSelecionado === horario
//                 ? "bg-black text-white"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             }`}
//           >
//             {horario}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-4">
//         <button
//           onClick={onVoltar}
//           className="text-sm text-gray-700 underline hover:text-black"
//         >
//           ← Voltar
//         </button>

//         <button
//           onClick={onProximo}
//           disabled={!horarioSelecionado}
//           className={`px-6 py-2 rounded ${
//             horarioSelecionado
//               ? "bg-black text-white hover:bg-gray-800"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Continuar
//         </button>
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function TelaHorarios() {
//   const router = useRouter();

//   const [diasDisponiveis, setDiasDisponiveis] = useState([]);
//   const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
//   const [diaSelecionado, setDiaSelecionado] = useState("");
//   const [horarioSelecionado, setHorarioSelecionado] = useState("");

//   useEffect(() => {
//     gerarDias();
//   }, []);

//   const gerarDias = () => {
//     const hoje = new Date();
//     const dias = [];
//     for (let i = 0; i < 7; i++) {
//       const dia = new Date(hoje);
//       dia.setDate(hoje.getDate() + i);
//       const diaFormatado = `${dia.getDate().toString().padStart(2, "0")}/${(dia.getMonth() + 1).toString().padStart(2, "0")}`;
//       const diaDaSemana = dia.toLocaleDateString("pt-BR", { weekday: "long" });
//       dias.push({
//         diaCompleto: dia, // para backend depois
//         diaExibicao: `${diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1)} - ${diaFormatado}`,
//       });
//     }
//     setDiasDisponiveis(dias);
//   };

//   const gerarHorarios = () => {
//     const horarios = [];
//     for (let hora = 8; hora <= 21; hora++) {
//       horarios.push(`${hora.toString().padStart(2, "0")}:00`);
//       horarios.push(`${hora.toString().padStart(2, "0")}:30`);
//     }
//     horarios.push("22:00");
//     setHorariosDisponiveis(horarios);
//   };

//   const handleDiaSelecionado = (dia) => {
//     setDiaSelecionado(dia);
//     gerarHorarios();
//   };

//   const handleHorarioSelecionado = (horario) => {
//     setHorarioSelecionado(horario);
//     // Salvar no localStorage
//     localStorage.setItem("diaSelecionado", JSON.stringify(diaSelecionado));
//     localStorage.setItem("horarioSelecionado", horario);
//     // Ir para tela de dados do cliente
//     router.push("/dadoscliente");
//   };

//   return (
//     <div className="container">
//       <h1>Selecione o Dia</h1>
//       {diasDisponiveis.map((d, index) => (
//         <div key={index}>
//           <button onClick={() => handleDiaSelecionado(d.diaCompleto)}>
//             {d.diaExibicao}
//           </button>
//         </div>
//       ))}

//       {diaSelecionado && (
//         <>
//           <h2>Selecione o Horário</h2>
//           {horariosDisponiveis.map((h, index) => (
//             <div key={index}>
//               <button onClick={() => handleHorarioSelecionado(h)}>
//                 {h}
//               </button>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }













// src/app/components/TelaHorarios.jsx

// import React, { useState } from "react";

// const TelaHorarios = ({ onSelecionar, voltar }) => {
//   const hoje = new Date();

//   const diasSemana = Array.from({ length: 14 }).map((_, i) => {
//     const data = new Date(hoje);
//     data.setDate(hoje.getDate() + i);

//     const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
//     const diaMes = data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

//     return {
//       label: `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} - ${diaMes}`,
//       dataCompleta: data.toISOString().split('T')[0]
//     };
//   });

//   const horariosDisponiveis = [
//     "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
//     "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
//     "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
//     "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
//     "20:00", "20:30", "21:00", "21:30", "22:00"
//   ];

//   const [diaSelecionado, setDiaSelecionado] = useState(null);
//   const [horarioSelecionado, setHorarioSelecionado] = useState("");

//   const handleSelecionar = () => {
//     if (diaSelecionado && horarioSelecionado) {
//       onSelecionar({ dia: diaSelecionado, horario: horarioSelecionado });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h2 className="text-2xl font-bold mb-4">Selecione o Dia</h2>
//       <div className="flex overflow-x-auto space-x-2 mb-6">
//         {diasSemana.map((dia, index) => (
//           <button
//             key={index}
//             onClick={() => setDiaSelecionado(dia)}
//             className={`px-4 py-2 rounded ${diaSelecionado?.dataCompleta === dia.dataCompleta ? "bg-red-500 text-white" : "bg-gray-200"}`}
//           >
//             {dia.label}
//           </button>
//         ))}
//       </div>

//       {diaSelecionado && (
//         <>
//           <h2 className="text-xl font-semibold mb-2">Selecione o Horário</h2>
//           <select
//             value={horarioSelecionado}
//             onChange={(e) => setHorarioSelecionado(e.target.value)}
//             className="border rounded p-2 mb-4"
//           >
//             <option value="">-- Escolha um Horário --</option>
//             {horariosDisponiveis.map((hora, index) => (
//               <option key={index} value={hora}>{hora}</option>
//             ))}
//           </select>
//         </>
//       )}

//       <div className="flex gap-4">
//         <button
//           onClick={voltar}
//           className="px-4 py-2 bg-gray-400 rounded"
//         >
//           Voltar
//         </button>
//         <button
//           onClick={handleSelecionar}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Continuar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TelaHorarios;



// "use client";
// import React, { useState } from "react";
// import styles from "./TelaHorarios.module.css";

// export default function TelaHorarios({ onSelecionar, voltar }) {
//   const hoje = new Date();

//   const diasSemana = Array.from({ length: 14 }).map((_, i) => {
//     const data = new Date(hoje);
//     data.setDate(hoje.getDate() + i);

//     const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
//     const diaMes = data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

//     return {
//       label: `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} - ${diaMes}`,
//       dataCompleta: data.toISOString().split('T')[0]
//     };
//   });

//   const horariosDisponiveis = [
//     "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
//     "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
//     "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
//     "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
//     "20:00", "20:30", "21:00", "21:30", "22:00"
//   ];

//   const [diaSelecionado, setDiaSelecionado] = useState(null);
//   const [horarioSelecionado, setHorarioSelecionado] = useState("");

//   const handleSelecionar = () => {
//     if (diaSelecionado && horarioSelecionado) {
//       onSelecionar({ dia: diaSelecionado, horario: horarioSelecionado });
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.titulo}>Selecione o Dia</h2>

//       <div className={styles.diasContainer}>
//         {diasSemana.map((dia, index) => (
//           <button
//             key={index}
//             onClick={() => setDiaSelecionado(dia)}
//             className={`${styles.diaBotao} ${diaSelecionado?.dataCompleta === dia.dataCompleta ? styles.diaBotaoSelecionado : ""}`}
//           >
//             {dia.label}
//           </button>
//         ))}
//       </div>

//       {diaSelecionado && (
//         <>
//           <h2 className={styles.titulo}>Selecione o Horário</h2>
//           <select
//             value={horarioSelecionado}
//             onChange={(e) => setHorarioSelecionado(e.target.value)}
//             className={styles.selectHorario}
//           >
//             <option value="">-- Escolha um Horário --</option>
//             {horariosDisponiveis.map((hora, index) => (
//               <option key={index} value={hora}>{hora}</option>
//             ))}
//           </select>
//         </>
//       )}

//       <div className={styles.botoesContainer}>
//         <button onClick={voltar} className={styles.botaoVoltar}>
//           ← Voltar
//         </button>
//         <button onClick={handleSelecionar} className={styles.botaoContinuar}>
//           Continuar
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import styles from "./TelaHorarios.module.css";

const TelaHorarios = ({ onSelecionar, voltar }) => {
  const hoje = new Date();

  const diasSemana = Array.from({ length: 14 }).map((_, i) => {
    const data = new Date(hoje);
    data.setDate(hoje.getDate() + i);

    const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
    const diaMes = data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

    return {
      label: `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)} - ${diaMes}`,
      dataCompleta: data.toISOString().split('T')[0]
    };
  });

  const horariosDisponiveis = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  const handleSelecionar = () => {
    if (diaSelecionado && horarioSelecionado) {
      onSelecionar({ dia: diaSelecionado, horario: horarioSelecionado });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Selecione o Dia</h2>

      <div className={styles.scrollDias}>
        {diasSemana.map((dia, index) => (
          <button
            key={index}
            onClick={() => setDiaSelecionado(dia)}
            className={`${styles.botaoDia} ${diaSelecionado?.dataCompleta === dia.dataCompleta ? styles.botaoDiaSelecionado : ""}`}
          >
            {dia.label}
          </button>
        ))}
      </div>

      {diaSelecionado && (
        <div className={styles.selecioneHorario}>
          <h2 className="text-xl font-semibold text-white">Selecione o Horário</h2>
          <select
            value={horarioSelecionado}
            onChange={(e) => setHorarioSelecionado(e.target.value)}
            className={styles.selectHorario}
          >
            <option value="">-- Escolha um Horário --</option>
            {horariosDisponiveis.map((hora, index) => (
              <option key={index} value={hora}>{hora}</option>
            ))}
          </select>
        </div>
      )}

      <div className={styles.botoesAcoes}>
        <button onClick={voltar} className={styles.botaoVoltar}>← Voltar</button>
        <button onClick={handleSelecionar} className={styles.botaoContinuar}>Continuar</button>
      </div>
    </div>
  );
};

export default TelaHorarios;
