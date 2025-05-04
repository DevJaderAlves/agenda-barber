"use client";
import estilos from "./TelaBoasVindas.module.css";

export default function TelaBoasVindas({ onProximo }) {
  return (
    <div className={estilos.container_principal}>
      <h1 className={estilos.titulo}>Olá, tudo bem?</h1>
      <p className={estilos.paragrafo}>Seja bem-vindo à central de marcação da barbearia.</p>
      <button 
        onClick={onProximo}
        className={estilos.botao}
      >
        Clique aqui para continuar
      </button>
    </div>
  );
}

