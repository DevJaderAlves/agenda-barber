'use client';
import { useState } from "react";
import axios from "axios";
import TelaBoasVindas from "./components/TelaBoasVindas";
import TelaServicos from "./components/TelaServicos";
import TelaProfissionais from "./components/TelaProfissionais";
import TelaHorarios from "./components/TelaHorarios";
import TelaDadosCliente from "./components/TelaDadosClientes";
import TelaConfirmacao from "./components/TelaConfirmacao";

export default function Home() {
  const [etapa, setEtapa] = useState(1);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [dadosCliente, setDadosCliente] = useState({ nome: "", telefone: ""});

  const proximo = () => setEtapa((prev) => prev + 1);
  const voltar = () => setEtapa((prev) => prev - 1);


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
      setEtapa(1); // volta para a tela inicial
  
    } catch (error) {
      console.error("Erro ao enviar agendamento:", error);
      alert("Erro ao enviar agendamento. Verifique o servidor.");
    }
  };

  

  return (
    <>
      {etapa === 1 && <TelaBoasVindas onProximo={proximo} />}
      {etapa === 2 && ( 
        <TelaServicos
        onProximo={proximo}
        onVoltar={voltar}
        selecionarServico={setServicoSelecionado}
        />
      )}
      {etapa === 3 && (
        <TelaProfissionais
        onProximo={proximo}
        onVoltar={voltar}
        selecionarProfissional={setProfissionalSelecionado}
        />
      )}
      {etapa === 4 && (
        <TelaHorarios
        onProximo={proximo}
        onVoltar={voltar}
        selecionarHorario={setHorarioSelecionado}
        />
      )}
      {etapa === 5 && (
        <TelaDadosCliente
        onProximo={proximo}
        onVoltar={voltar}
        salvarDados={setDadosCliente}
        />
      )}
      {etapa === 6 && (
        <TelaConfirmacao
        dados={{
          servico: servicoSelecionado,
          profissional: profissionalSelecionado,
          horario: horarioSelecionado,
          cliente: dadosCliente,
        }}
        omVoltar={voltar}
        onConfirmar={confirmarAgendamento}
        />
      )}
    </>
  );
}