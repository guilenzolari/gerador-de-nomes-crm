import React from "react";
import { FaRegCopy } from "react-icons/fa";
import "./CaixaTextoECopiar.css";

const CaixaTextoECopiar = ({ titulo, gerarNomeFn, showToastMessage, nomeFixo }) => {
  const nome = nomeFixo ?? (gerarNomeFn ? gerarNomeFn() : "");

  const handleCopy = async () => {
    if (!nome) {
      showToastMessage?.("Complete os campos obrigatórios!");
      return;
    }

    try {
      await navigator.clipboard.writeText(nome);
      showToastMessage?.(`${titulo} Copiado!`);
        } catch (err) {
      console.error("Erro ao copiar:", err);
      showToastMessage?.("Erro ao copiar!");
    }
  };

  return (
    <div className="caixaTextoECopiar">
      <p className="caixaNomeCampanha">
        <span className="texto">{titulo}</span>
        <span className="nomeCapanha">{nome || ""}</span>
      </p>

      <div className="caixaBotao">
        <button className="botaoCopiar" onClick={handleCopy}>
          <FaRegCopy />
        </button>
      </div>
    </div>
  );
};

export default CaixaTextoECopiar;
