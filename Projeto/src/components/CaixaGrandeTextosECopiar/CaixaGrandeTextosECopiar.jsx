import React from "react";
import "./CaixaGrandeTextosECopiar.css";
import CaixaTextoECopiar from "../CaixaTextoECopiar/CaixaTextoECopiar";

const CaixaGrandeTextosECopiar = ({
  titulo,
  gerarNomesFn,
  showToastMessage,
  textoExtra
}) => {
  const nomes = gerarNomesFn();

  return (
    <div className="caixa-grande">
      <p>
        <strong>{titulo}</strong>
      </p>

      <div className="lista-de-nomes">
        {nomes.map((nome, idx) => (
          <CaixaTextoECopiar
            key={idx}
            titulo={`${textoExtra} ${idx + 1}`}
            nomeFixo={nome}
            showToastMessage={showToastMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default CaixaGrandeTextosECopiar;
