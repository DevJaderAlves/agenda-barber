


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TelaDadosClientes() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [toast, setToast] = useState({ mensagem: "", cor: "" });

  const mostrarToast = (mensagem, cor = "#28a745") => {
    setToast({ mensagem, cor });
    setTimeout(() => {
      setToast({ mensagem: "", cor: "" });
    }, 3000);
  };

  const validarTelefone = (telefone) => {
    const telefoneLimpo = telefone.replace(/[^\d]/g, "");
    return /^(51|55)9\d{8}$/.test(telefoneLimpo);
  };

  const validarNome = (nome) => {
    return nome.length > 0 && nome.length <= 20;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telefoneFormatado = telefone.replace(/[^\d]/g, "").slice(0, 11);

    if (!validarNome(nome)) {
      mostrarToast("Nome inválido! (Máximo 20 caracteres)", "#dc3545");
      return;
    }

    if (!validarTelefone(telefoneFormatado)) {
      mostrarToast("Telefone inválido! Use 51 ou 55 + 9 + 8 dígitos.", "#dc3545");
      return;
    }

    try {
      const response = await fetch("https://SEU_BACKEND_AQUI/agendamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, telefone: telefoneFormatado }),
      });

      if (response.ok) {
        mostrarToast("Agendamento feito com sucesso!");
        setNome("");
        setTelefone("");
        setTimeout(() => router.push("/tela-confirmacao"), 1000);
      } else {
        const resultado = await response.json();
        mostrarToast(resultado.error || "Erro ao agendar.", "#dc3545");
      }
    } catch (erro) {
      mostrarToast("Erro: " + erro.message, "#dc3545");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {toast.mensagem && (
        <div
          className="fixed top-4 px-6 py-3 rounded shadow text-white z-50"
          style={{ backgroundColor: toast.cor }}
        >
          {toast.mensagem}
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6">Digite seus dados:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <div className="flex flex-col">
          <label htmlFor="nome" className="mb-1 font-semibold">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            maxLength={20}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone" className="mb-1 font-semibold">
            Telefone:
          </label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) =>
              setTelefone(e.target.value.replace(/[^\d]/g, "").slice(0, 11))
            }
            required
            className="border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Confirmar Agendamento
        </button>
      </form>
    </div>
  );
}
