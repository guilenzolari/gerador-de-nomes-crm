function gerarNomeCampanha(selecoes, inputValue) {
  if (!todasSelecoesObrigatoriasFeitas(selecoes)) return "";

  const partes = [
    selecoes["Canal"].value,
    selecoes["Tipo de demanda"].value,
    selecoes["Produto"].value,
    selecoes["Pontual"].value,
    gerarDataHoje(),
  ];

  if (inputValue.trim() !== "") {
    const textoExtra = inputValue.trim().replace(/\s+/g, "_").toUpperCase();
    partes.push(textoExtra);
  }

  partes.push(
    selecoes["Direcionamento"].value,
    selecoes["Criterio de Sucesso"].value,
    selecoes["PÚBLICO"].value
  );

  if (selecoes["TOKEN"]?.value) {
    partes.push(selecoes["TOKEN"].value);
  }

  return partes.join("_") + "_TEMPLATE_INICIAL";
}

function gerarNomePersonalization(selecoes, inputValue) {
  if (!todasSelecoesObrigatoriasFeitas(selecoes)) return "";

  const partes = [
    selecoes["Canal"].value,
    selecoes["Tipo de demanda"].value,
    selecoes["Produto"].value,
    selecoes["Pontual"].value,
  ];

  partes.splice(3, 0, "PERSONALIZATION");

  partes.push(gerarDataHoje());

  if (inputValue.trim() !== "") {
    const textoExtra = inputValue.trim().replace(/\s+/g, "_").toUpperCase();
    partes.push(textoExtra);
  }

  partes.push(
    selecoes["Direcionamento"].value,
    selecoes["Criterio de Sucesso"].value,
    selecoes["PÚBLICO"].value
  );

  if (selecoes["TOKEN"]?.value) {
    partes.push(selecoes["TOKEN"].value);
  }

  return partes.join("_") + "_TEMPLATE_INICIAL";
}

function gerarNomeJornada(selecoes, inputValue) {
  if (!todasSelecoesObrigatoriasFeitas(selecoes)) return "";

  const partes = [
    selecoes["Tipo de demanda"].value,
    selecoes["Produto"].value,
    selecoes["Pontual"].value,
  ];

  if (inputValue.trim() !== "") {
    const textoExtra = inputValue.trim().replace(/\s+/g, "_").toUpperCase();
    partes.push(textoExtra);
  }

  partes.push(
    selecoes["Direcionamento"].value,
    selecoes["Criterio de Sucesso"].value,
    selecoes["PÚBLICO"].value
  );

  if (selecoes["TOKEN"]?.value) {
    partes.push(selecoes["TOKEN"].value);
  }

  return "JR_" + partes.join("_");
}

function gerarNomesCampanhasComDias(selecoes, inputValue) {
  if (!todasSelecoesObrigatoriasFeitas(selecoes)) return ["","","","","","",""];

  const partesFixas = [
    selecoes["Canal"].value,
    selecoes["Tipo de demanda"].value,
    selecoes["Produto"].value,
    selecoes["Pontual"].value,
    gerarDataHoje(),
  ];

  const extras = [];

  if (inputValue.trim() !== "") {
    const textoExtra = inputValue.trim().replace(/\s+/g, "_").toUpperCase();
    extras.push(textoExtra);
  }

  extras.push(
    selecoes["Direcionamento"].value,
    selecoes["Criterio de Sucesso"].value,
    selecoes["PÚBLICO"].value
  );

  if (selecoes["TOKEN"]?.value) {
    extras.push(selecoes["TOKEN"].value);
  }

  const nomesComDias = [];

  for (let i = 1; i <= 7; i++) {
    const partesComDia = [
      ...partesFixas,
      `D${i}`,
      ...extras,
      "TEMPLATE_INICIAL",
    ];
    nomesComDias.push(partesComDia.join("_"));
  }

  return nomesComDias;
}

function gerarNomesCampanhasTestes(selecoes, inputValue) {
  if (!todasSelecoesObrigatoriasFeitas(selecoes)) return ["","","","","","",""];

  const partesFixas = [
    selecoes["Canal"].value,
    selecoes["Tipo de demanda"].value,
    selecoes["Produto"].value,
    selecoes["Pontual"].value,
    gerarDataHoje(),
  ];

  const extras = [];

  if (inputValue.trim() !== "") {
    const textoExtra = inputValue.trim().replace(/\s+/g, "_").toUpperCase();
    extras.push(textoExtra);
  }

  extras.push(
    selecoes["Direcionamento"].value,
    selecoes["Criterio de Sucesso"].value,
    selecoes["PÚBLICO"].value
  );

  if (selecoes["TOKEN"]?.value) {
    extras.push(selecoes["TOKEN"].value);
  }

  const nomesComDias = [];

  for (let i = 1; i <= 7; i++) {
    const partesComDia = [
      ...partesFixas,
      `TST${i}`,
      ...extras,
      "TEMPLATE_INICIAL",
    ];
    nomesComDias.push(partesComDia.join("_"));
  }

  return nomesComDias;
}

const gerarDataHoje = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}${mes}${dia}`;
};

const todasSelecoesObrigatoriasFeitas = (selecoes) => {
  const obrigatorios = [
    "Canal",
    "Tipo de demanda",
    "Produto",
    "Pontual",
    "Direcionamento",
    "Criterio de Sucesso",
    "PÚBLICO",
  ];
  return obrigatorios.every((key) => selecoes[key] !== null);
};

export {
  gerarNomeCampanha,
  gerarNomeJornada,
  gerarNomePersonalization,
  gerarDataHoje,
  todasSelecoesObrigatoriasFeitas,
  gerarNomesCampanhasComDias,
  gerarNomesCampanhasTestes
};

