# Integração com Google Sheets

## 1. Criar a planilha

1. Crie uma planilha no Google Sheets.
2. Abra `Extensões > Apps Script`.
3. Apague o conteúdo inicial e cole o código de [code.gs](d:\Desktop\clinica\apps-script\code.gs#L1).

## 2. Publicar o Apps Script

1. Clique em `Implantar > Nova implantação`.
2. Escolha `Aplicativo da web`.
3. Em `Executar como`, selecione sua conta.
4. Em `Quem tem acesso`, selecione `Qualquer pessoa`.
5. Clique em `Implantar` e copie a URL final do `/exec`.

## 3. Ligar o site à planilha

Edite [site-config.js](d:\Desktop\clinica\js\site-config.js#L1) e preencha:

```js
window.CLINICA_CONFIG = {
  googleAppsScriptUrl: "COLE_AQUI_A_URL_DO_APPS_SCRIPT",
  googleSheetUrl: "COLE_AQUI_A_URL_DA_PLANILHA"
};
```

## 4. Como funciona

 - O formulário de `Contato` grava na aba `Mensagens`.
 - (Removido) O formulário de `Agendamento` foi desativado nesta versão.
- A planilha passa a ser a área administrativa da dentista.
- A página `admin.html` pode abrir a planilha quando `googleSheetUrl` estiver preenchido.

## 5. Observação importante

Se `googleAppsScriptUrl` ficar vazio, o site continua funcionando em modo demonstração, apenas mostrando a mensagem de sucesso no navegador.
