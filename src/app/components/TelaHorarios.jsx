

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
