"use client";

import styles from "./TelaProfissionais.module.css";

export default function TelaProfissionais({ onProximo, onVoltar, selecionarProfissional }) {
  const profissionais = [
    { id: 1, nome: "João", imagem: "/imagem1.jpg" },
    { id: 2, nome: "Marcos", imagem: "/imagem2.jpg" },
    { id: 3, nome: "Pedro", imagem: "/imagem3.jpg" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Escolha um profissional</h2>

      <div className={styles.grid}>
        {profissionais.map((profissional) => (
          <div key={profissional.id} className={styles.card}>
            <img
              src={profissional.imagem}
              alt={profissional.nome}
              className={styles.imagem}
            />
            <h3 className={styles.nome}>{profissional.nome}</h3>
            <button
              onClick={() => {
                selecionarProfissional(profissional);
                onProximo();
              }}
              className={styles.botao}
            >
              Selecionar
            </button>
          </div>
        ))}
      </div>
      <button onClick={onVoltar} className={styles.botaoVoltar}>← Voltar</button>
    </div>
  );
}
