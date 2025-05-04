
"use client";
import { useState } from "react";
import styles from "./TelaDadosClientes.module.css"; // Estilo novo, já puxado

export default function TelaDadosClientes({ onProximo, onVoltar, salvarDados }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const validarTelefone = (telefoneCompleto) => {
    const numero = telefoneCompleto.replace(/[^\d]/g, "");
    return /^(51|55)9\d{8}$/.test(numero); // ✅ Agora validando certinho sem cortar
  };

  const validarNome = (nome) => nome.trim().length > 2 && nome.length <= 30;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarNome(nome)) {
      alert("Nome inválido! Digite entre 3 e 30 caracteres.");
      return;
    }

    if (!validarTelefone(telefone)) {
      alert("Telefone inválido! Deve começar com 51 ou 55 e conter 9 dígitos após o 9.");
      return;
    }

    salvarDados({
      nome,
      telefone: "+55" + telefone.replace(/[^\d]/g, ""),
    });
    onProximo();
  };

  const handleTelefoneChange = (e) => {
    let input = e.target.value.replace(/[^\d]/g, "");
    if (input.length > 11) input = input.slice(0, 11);
    setTelefone(input);
  };

  // Formatar visual do telefone dinamicamente
  const formatarTelefone = (numero) => {
    if (!numero) return "";
    if (numero.length <= 2) return numero;
    if (numero.length <= 7) return `${numero.slice(0, 2)} ${numero.slice(2)}`;
    if (numero.length <= 11) return `${numero.slice(0, 2)} ${numero.slice(2, 7)}-${numero.slice(7)}`;
    return numero;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Digite seus dados:</h1>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles.campo}>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            maxLength={30}
            className={styles.input}
            placeholder="Digite seu nome"
          />
        </div>

        <div className={styles.campo}>
          <label>Telefone:</label>
          <div className={styles.telefoneWrapper}>
            <span className={styles.prefixoTelefone}>+55</span>
            <input
              type="text"
              value={formatarTelefone(telefone)}
              onChange={handleTelefoneChange}
              placeholder="51 99999-9999"
              required
              className={styles.inputTelefone}
            />
          </div>
        </div>

        <div className={styles.botoes}>
          <button type="button" onClick={onVoltar} className={styles.botaoVoltar}>
            ← Voltar
          </button>
          <button type="submit" className={styles.botaoContinuar}>
            Confirmar Agendamento
          </button>
        </div>
      </form>
    </div>
  );
}
