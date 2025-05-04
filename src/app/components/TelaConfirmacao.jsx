
"use client";
import styles from "./TelaConfirmacao.module.css"; // puxando seu novo CSS

export default function TelaConfirmacao({ dados, onVoltar, onConfirmar }) {
  const { servico, profissional, horario, cliente } = dados;

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Confirmação do Agendamento</h2>

      <div className={styles.cartao}>
        <p><strong>Serviço:</strong> {servico.nome}</p>
        <p><strong>Profissional:</strong> {profissional.nome}</p>
        <p><strong>Horário:</strong> {horario}</p>
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>Telefone:</strong> {cliente.telefone}</p>
      </div>

      <div className={styles.botoes}>
        <button onClick={onVoltar} className={styles.botaoVoltar}>
          ← Voltar
        </button>

        <button onClick={onConfirmar} className={styles.botaoConfirmar}>
          Confirmar
        </button>
      </div>
    </div>
  );
}

