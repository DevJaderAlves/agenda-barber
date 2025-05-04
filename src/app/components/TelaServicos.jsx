// "use client";

// export default function TelaServicos({ onProximo, onVoltar, selecionarServico }) {
//   const servicos = [
//     { id: 1, nome: "Corte de Cabelo", preco: "R$ 30" },
//     { id: 2, nome: "Barba", preco: "R$ 20" },
//     { id: 3, nome: "Corte + Barba", preco: "R$ 45" },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
//       <h2 className="text-2xl font-bold mb-6">Escolha um serviço</h2>
//       <div className="grid gap-4 w-full max-w-md">
//         {servicos.map((servico) => (
//           <div
//             key={servico.id}
//             className="border p-4 rounded-lg shadow flex justify-between items-center"
//           >
//             <div>
//               <h3 className="font-semibold">{servico.nome}</h3>
//               <p className="text-sm text-gray-600">{servico.preco}</p>
//             </div>
//             <button
//               onClick={() => {
//                 selecionarServico(servico);
//                 onProximo();
//               }}
//               className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//             >
//               Escolher
//             </button>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={onVoltar}
//         className="mt-6 text-sm text-gray-700 underline hover:text-black"
//       >
//         ← Voltar
//       </button>
//     </div>
//   );
// }


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
