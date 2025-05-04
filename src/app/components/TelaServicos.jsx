

"use client";

import estilos from "./TelaServicos.module.css";

export default function TelaServicos({ onProximo, onVoltar, selecionarServico }) {
  const servicos = [
    { id: 1, nome: "Corte de Cabelo", preco: "R$ 30" },
    { id: 2, nome: "Barba", preco: "R$ 20" },
    { id: 3, nome: "Corte + Barba", preco: "R$ 45" },
  ];

  return (
    <div className={estilos.container}>
      <h2 className={estilos.titulo}>Escolha um serviço</h2>
      
      <div className={estilos.lista_servicos}>
        {servicos.map((servico) => (
          <div key={servico.id} className={estilos.card_servico}>
            <div>
              <h3 className={estilos.nome_servico}>{servico.nome}</h3>
              <p className={estilos.preco_servico}>{servico.preco}</p>
            </div>
            <button
              onClick={() => {
                selecionarServico(servico);
                onProximo();
              }}
              className={estilos.botao_servico}
            >
              Escolher
            </button>
          </div>
        ))}
      </div>

      <button onClick={onVoltar} className={estilos.botao_voltar}>
        ← Voltar
      </button>
    </div>
  );
}
