<p align="center">
<img src="https://img.shields.io/badge/nodejs-18.2.0-blue">
<img src="https://img.shields.io/badge/react-18.0.0-blue">
</p>

# Project Full-Stack Kenzie

Projeto:

Este teste consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.

## Features:

- Cadastro de clientes

- Cadastro de contatos

- Interação de cliente com contatos

- Lista de contatos
  
- Lista de contatos de um cliente

- Atualização de clientes e contatos

- Deleção de clientes e contatos

---

## Instalação do Projeto

Projeto desenvolvido no backend com Nodejs e no frontend com React.

### 1. Instalação das dependencias

Efetue a criação das dependências com `yarn` ou `npm install` nas pastas backend e frontend.

### 2. Configuração do .env

Crie o arquivo `.env` com base no arquivo `.env.example` na pasta backend.

#### Se estiver no Linux, rode esse comando na pasta back-end

```
cp .env.example .env
```

### 3. Iniciando apenas frontend ou backend do projeto no navegador ou insomnia

#### Powershell ou Bash

Acesse a pasta back-end e rode o comando:

```
yarn dev
```

ou

```
npm run dev
```

e rode uma requisição no insomnia

#### Exemplo de requisição - POST

```
{
    "name": "johndoe",
    "email": "johndoe@org.com",
    "telephone": "(99) 9 9999-9999" 
}
```

Acesse a pasta front-end e rode o comando:

```
yarn dev
```

ou

```
npm run dev
```

e abra o projeto no seu navegador

#### Link do projeto

```
http://localhost:5173
```

### 3. Iniciando todo o projeto no docker-compose

Na raiz do projeto rode o comando:

## Windows

```
docker-compose up -d
```

## Linux

```
sudo docker-compose up -d
```

a flag `-d` é para rodar o projeto em 'background' deixando o terminal livre para usar

## Desenvolvedor

<a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva">
    <img src="frontend/src/assets/icons8-linkedin-48.png" />
</a>
