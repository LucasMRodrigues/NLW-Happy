<p align="center">
  <img src="https://imgur.com/gxKZeqc.png" >
</p>

## 📋 Índice
- [📋 Índice](#-índice)
- [🖥 Preview](#-preview)
- [📖 Sobre](#-sobre)
- [🚀 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [⌨ Como executar o projeto](#-como-executar-o-projeto)


---

## 🖥 Preview 

<p align="center">
  <img src="https://imgur.com/Ckzod1Q.png" width="700" >
</p>
<p align="center">
  <img src="https://imgur.com/1lCy4tI.png" width="700" >
</p>
<p align="center">
  <img src="https://imgur.com/B1EMkxo.png" width="700" >
</p>

---

## 📖 Sobre 

Este é um projeto desenvolvido durante a **[Next Level Week](https://nextlevelweek.com/)**, realizada pela **[@Rocketseat](https://github.com/Rocketseat)** durante os dias 12 a 18 de Outubro de 2020.

A proposta do projeto é construir uma aplicação que possibilite conectar pessoas a orfanatos próximos à região onde elas vivem, facilitando o acesso a esses institutos e aumentando a frequência com que eles recebem  assistência.
É possivel encontrar orfanatos próximos ao seu endereço, visualizar informações deles e efetuar novos cadastros.

--- 

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

### Ferramentas de Desenvolvimento

- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Fork](https://git-fork.com/)
- [Beekeper Studio](https://www.beekeeperstudio.io/)

### Front-End Web

  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://react-leaflet.js.org/)
  - [Mapbox](https://www.mapbox.com/)
  - [Axios](https://www.mapbox.com/)

### Front-End Mobile

  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.io/)
  - [Axios](https://www.mapbox.com/)

### Back-End

  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/pt-br/)
  - [Typescript](https://classic.yarnpkg.com/)
  - [SQLite](https://www.sqlite.org/index.html)
  - [Multer](https://www.npmjs.com/package/multer)
  - [TypeORM](https://typeorm.io/#/)
  - [Yup](https://github.com/jquense/yup)
--- 

## ⌨ Como executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/LucasMRodrigues/NLW-Happy.git

# Entrar no diretório
cd NLW-Happy

# Baixar as dependências
yarn ou npm i

# Projeto web
cd web

# Para executar o client web
yarn start
ou
npm run start

# Projeto mobile
cd mobile

# Para executar o client mobile
yarn start
ou
npm run start

# Projeto server
cd backend

# Para executar o servidor
yarn dev
ou
npm run dev


IMPORTANTE: No arquivo ImagesView.ts do backend, na propriedade 'url', é necessário substituir o valor ali definido pelo IP da sua máquina. Somente asim as imagens serão renderizadas da forma correta na interface mobile.

```

Feito isso, abra o seu navegador em `http://localhost:3000/` (para acessar a interface web) e `http://localhost:19002/` e escaneie o QR Code com a câmera do seu celular (para acessar a interface mobile). 
