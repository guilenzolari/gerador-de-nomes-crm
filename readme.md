# 🧠 Gerador de Nomes de Campanhas - CRM

Este é um projeto em React que facilita a criação padronizada de nomes para campanhas de CRM. Ele permite selecionar várias opções de categorias (como canal, tipo de campanha, objetivo, público, etc.) e incluir um texto extra para compor um nome único e bem estruturado para suas campanhas.


## 🌐 Link para acesso

Você pode acessar o gerador de nomes diretamente pelo link abaixo:

👉 [Acesse o gerador aqui](#)  
_(Substitua este `#` pelo link do site assim que você hospedar o projeto)_



## 🚀 Finalidade

O objetivo deste projeto é **automatizar a geração de nomes para campanhas de CRM**, garantindo consistência e economia de tempo nas rotinas de marketing, produto ou tecnologia.

O nome gerado segue o seguinte formato:

```
CANAL_TIPOCAMPANHA_OBJETIVO_YYYYMMDD_TEXTOEXTRA_PÚBLICO_RESULTADO
```

Exemplo:

```
EMAIL_PROMOÇÃO_CONVERSÃO_20250615_OUTLET_FEMININO_SUCESSO
```


## 🛠 Como editar os dados

As opções exibidas nos dropdowns do sistema são carregadas a partir do arquivo [`dados.json`](./src/assets/dados.json).  

Para **adicionar, remover ou modificar** as opções disponíveis no app, basta editar esse arquivo.

### Exemplo:

```json
{
  "canais": {
    "Email Marketing": "EMAIL",
    "SMS": "SMS",
    "Push": "PUSH"
  },
  "tiposCampanha": {
    "Promoção": "PROMOÇÃO",
    "Institucional": "INSTITUCIONAL"
  }
}
```

Você pode até usar um prompt de IA (como o ChatGPT 😉) para gerar essas listas e **substituir diretamente** o conteúdo do `dados.json` com as novas opções. O app irá automaticamente refletir as mudanças na interface.



## 📄 Licença

Este projeto está sob a licença MIT. Fique à vontade para usar, modificar e compartilhar.



Feito com 💙 para facilitar o trabalho em CRM.
