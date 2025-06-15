import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import dados from '../../dados.json';
import { FaRegCopy } from "react-icons/fa6";
import Toast from "./components/ToastContainer/ToastContainer";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [selecoes, setSelecoes] = useState({
    canais: null,
    tiposCampanha: null,
    objetivos: null,
    publico: null,
    resultado: null,
  });

  // Gera a data no formato 20250403
  const gerarDataHoje = () => {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");
    return `${ano}${mes}${dia}`;
  };

  const todasSelecoesFeitas = () => {
    return Object.values(selecoes).every((selection) => selection !== null);
  };

  // Gera o nome da campanha final
  function gerarNomeCampanha() {
    if (inputValue === "") {
      return (
        `${selecoes.canais?.value || ""}_` +
        `${selecoes.tiposCampanha?.value || ""}_` +
        `${selecoes.objetivos?.value || ""}_` +
        `${gerarDataHoje()}_` +
        `${selecoes.publico?.value || ""}_` +
        `${selecoes.resultado?.value || ""}`
      );
    }

    const textoExtraFormatado = inputValue
      .trim()
      .replace(/\s+/g, "_")
      .toUpperCase();

    return (
      `${selecoes.canais?.value || ""}_` +
      `${selecoes.tiposCampanha?.value || ""}_` +
      `${selecoes.objetivos?.value || ""}_` +
      `${gerarDataHoje()}_` +
      `${textoExtraFormatado}_` +
      `${selecoes.publico?.value || ""}_` +
      `${selecoes.resultado?.value || ""}`
    );
  }

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setToastMessage("");
    }, 2000); // A mensagem desaparecerá após 2 segundos (mesma duração da animação)
  };

  const handleCopy = async () => {
    const nomeParaCopiar = gerarNomeCampanha();

    try {
      await navigator.clipboard.writeText(nomeParaCopiar);
      showToastMessage("Copiado!");
    } catch (err) {
      console.error("Falha ao copiar o texto: ", err);
      showToastMessage("Erro ao copiar!");
    }
  };

  return (
    <>
      <h1>Gerador de nomes de Campanhas - CRM</h1>

      <div className="content">
        {Object.entries(dados).map(([categoria, opcoes]) => (
          <Dropdown
            key={categoria}
            buttonText={selecoes[categoria]?.label || categoria.toUpperCase()}
            content={
              <>
                {Object.entries(opcoes).map(([label, value]) => (
                  <DropdownItem
                    key={value}
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

      <div className="caixaTextoECopiar">
        <p className="caixaNomeCampanha">
          <span className="texto">Nome da campanha:</span>
          {todasSelecoesFeitas() && (
            <span className="nomeCapanha">{gerarNomeCampanha()}</span>
          )}
        </p>

        {todasSelecoesFeitas() && (
          <div className="caixaBotao">
            <button className="botaoCopiar" onClick={handleCopy}>
              <FaRegCopy />
            </button>
          </div>
        )}
      </div>

      {/* Remova a antiga mensagem de feedback */}
      {/* <div>
        {copiedMessage && (
              <span className="copy-feedback">{copiedMessage}</span>
            )}
      </div> */}

      {/* Adicione o novo componente Toast */}
      <Toast message={toastMessage} show={showToast} />
    </>
  );
}

export default App;