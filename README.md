<h1>API - Backend</h1>

<p>
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen"/>
  <img src="https://img.shields.io/badge/última%20atualização-setembro-yellowgreen"/>
  <img src="https://img.shields.io/badge/Node.JS-18.12.1-blueviolet"/>
  <img src="https://img.shields.io/badge/Prisma-4.9.0-green"/>
</p>

<h2>Descrição</h2>
Projeto backend de registro de ponto eletrônico.<br>
<br>

<h2>Funcionalidades</h2>
<h3>Implementadas :heavy_check_mark:</h3>

_Colaborador_

-   `Listagem de registro de ponto`:
    -   Método: _GET_
    -   Endpoint: `/registros`
-   `Busca registro de ponto pelo nome do colaborador`:
    -   Método: _GET_
    -   Endpoint: `/:name`
-   `Atualiza registro pelo ID`:
    -   Método: _PUT_
    -   Endpoint: `/:id`
-   `Cadastro de ponto`:
    -   Método: _POST_
    -   Endpoint: `/:name/registrar`
-   `Registrar colaborador`:
    -   Método: _POST_
    -   Endpoint: `/user/registrar`

<h2>Acesso ao projeto 📁</h2>

Você pode [acessar o código fonte do projeto inicial aqui](https://github.com/angelobordin/api), ou [baixá-lo aqui](https://github.com/angelobordin/api/archive/refs/heads/develop.zip).

<h2>Abrir e rodar o projeto 🛠️</h2>
<h3>Pré-Requisitos</h3>

⚠️ [Node](https://nodejs.org/en/)<br>
⚠️ [MySQL](https://dev.mysql.com/downloads/installer/)<br>
⚠️ [VS Code](https://code.visualstudio.com/Download)<br>

Após baixar o projeto no seu dispositivo, você pode abri-lo no VS Code.<br>
Para isso abra o VS Code em seu dispositivo, após clique em:

<h3>VS Code</h3>

-   _File >> Open Folder..._ ou digite _Ctrl+K_ / _Ctrl+O_;
-   Abra o terminal em _Terminal >> New Terminal_;
-   Digite _npm install_ para realizar a instalação das dependências do projeto;

<h3>MySQL</h3>

Eu acredito que utilizar o MySQL Workbench será máis fácil para realizar as configurações necessárias.<br>

-   Então após realizar a instalação do [MySQL](https://dev.mysql.com/downloads/installer/) do link acima, você deve abrir o _MySQL Workbench_.
-   Realizar a conexão, ou criar um banco local.(Guarde os dados de conexão, como a porta, usuário e senha)
-   Deve então criar um Schema, pois esse será nosso banco de dados.(Guarde também o nome do Schema).
-   Logo em seguida, deve acessar o _VS Code_.
-   Abrir o arquivo _.env_ na raíz do projeto, e alterar as informações da variável _DATABASE_URL_, conforme os dados guardados.<br>
    EX: DATABASE_URL="mysql://usuário:senha@localhost:porta/nome_do_schema";
-   Após basta entrar no terminal novamente e digitar _npx prisma migrate dev --name initDATABASE_
-   Por último basta digitar no terminal _npx prisma db seed_ para realizar a população do banco com dados.

Finalizada todas as etapas acima sem erro, basta voltar no seu MySQL Workbench e dar um refresh que as 'tables' devem ter sido criadas.<br>
Após todos os passo acima serem realizados, digite _npm run start_ no seu terminal e o projeto iniciará.

<h2>Tecnologias Utilizadas</h2>

<ul>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" width="20" height="20"/><b> Visual Studio Code</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20"/><b> Node.JS</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" height="20"/><b> TypeScript</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20"/><b> Express</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" width="20" height="20"/><b> Nest</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="20" height="20"/><b> Git</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20" height="20"/><b> MySQL</b></li>
</ul>

# Autores

| [<img src="https://avatars.githubusercontent.com/u/70332789?s=400&u=c6b947894c97e0e941f64aafeb22719ff49589ac&v=4" width=115><br><sub>Angelo Bordin</sub>](https://github.com/angelobordin) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
