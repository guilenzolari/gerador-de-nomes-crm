import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import dados from "../../dados.json";
import Toast from "./components/ToastContainer/ToastContainer";
import CaixaTextoECopiar from "./components/CaixaTextoECopiar/CaixaTextoECopiar";
import CaixaGrandeTextosECopiar from "./components/CaixaGrandeTextosECopiar/CaixaGrandeTextosECopiar"
import { FaEraser } from "react-icons/fa";

import {
  gerarNomeCampanha,
  gerarNomeJornada,
  gerarNomePersonalization,
  gerarNomesCampanhasComDias,
  gerarNomesCampanhasTestes
} from "./utils";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setToastMessage("");
    }, 2000);
  };

  const [selecoes, setSelecoes] = useState({
    Canal: null,
    "Tipo de demanda": null,
    Produto: null,
    Pontual: null,
    "Canal de Direcionamento": null,
    "Criterio de Sucesso": null,
    PÚBLICO: null,
    TOKEN: null, // opcional
  });

  function resetState(){
    setSelecoes({
      Canal: null,
      "Tipo de demanda": null,
      Produto: null,
      Pontual: null,
      "Canal de Direcionamento": null,
      "Criterio de Sucesso": null,
      PÚBLICO: null,
      TOKEN: null, // opcional
    });

    setInputValue("")
  }

  return (
    <>
      <div className="tituloEApagar">
        <h1 className="titulo">Gerador de nomes de Campanhas - CRM</h1>
        <button onClick={resetState}>
          <FaEraser />
        </button>

      </div>

      <div className="content">
        {Object.entries(dados).map(([categoria, opcoes]) => (
          <Dropdown
            key={categoria}
            buttonText={selecoes[categoria]?.label || categoria.toUpperCase()}
            content={
              <>
                {Object.entries(opcoes).map(([label, value]) => (
                  <DropdownItem
                    key={value || label}
                    onClick={() =>
                      setSelecoes((prev) => ({
                        ...prev,
                        [categoria]: { label, value },
                      }))
                    }
                  >
                    {label}
                  </DropdownItem>
                ))}
              </>
            }
          />
        ))}
      </div>

      <input
        type="text"
        placeholder="Texto extra..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="textField"
      />

      <CaixaTextoECopiar
        titulo="Nome da Jornada"
        gerarNomeFn={() => gerarNomeJornada(selecoes, inputValue)}
        showToastMessage={showToastMessage}
      />

      <CaixaTextoECopiar
        titulo="Nome da Campanha"
        gerarNomeFn={() => gerarNomeCampanha(selecoes, inputValue)}
        showToastMessage={showToastMessage}
      />

      <CaixaTextoECopiar
        titulo="Variação Personalization"
        gerarNomeFn={() => gerarNomePersonalization(selecoes, inputValue)}
        showToastMessage={showToastMessage}
      />

      <CaixaGrandeTextosECopiar
        titulo="Variações de Nome de Campanha com Dias"
        gerarNomesFn={() => gerarNomesCampanhasComDias(selecoes, inputValue)}
        showToastMessage={showToastMessage}
        textoExtra="Dia"
      />

      <CaixaGrandeTextosECopiar
        titulo="Variações de Nome de Campanha para Testes"
        gerarNomesFn={() => gerarNomesCampanhasTestes(selecoes, inputValue)}
        showToastMessage={showToastMessage}
        textoExtra="Teste"
      />

      <p>Feito com 💙 para facilitar o trabalho em CRM</p>

      <Toast message={toastMessage} show={showToast} />
    </>
  );
}

export default App;