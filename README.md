# 💈 HairDay

Um sistema de agendamento desenvolvido com React e TypeScript para organizar atendimentos de forma simples, rápida e intuitiva. Agende horários, visualize por períodos do dia e evite conflitos automaticamente!

---

## 🎯 Sobre o Projeto

O **HairDay** é uma aplicação web de agendamento de atendimentos, onde o usuário pode selecionar uma data, escolher um horário disponível e cadastrar o nome do cliente.

O sistema organiza automaticamente os agendamentos por período (manhã, tarde e noite) e impede a duplicidade de horários, garantindo uma experiência mais profissional.

O projeto foi desenvolvido para praticar conceitos importantes de React, como gerenciamento de estado global, comunicação entre componentes e manipulação eficiente de dados com arrays.

---

## ✨ Funcionalidades

### 📅 Agendamento de atendimentos
- Seleção de data
- Escolha de horário
- Cadastro do nome do cliente
- Atualização imediata da interface

### 🗑️ Remoção de agendamentos
- Exclusão com um clique
- Atualização automática da lista

### 📊 Organização por períodos
Os agendamentos são agrupados automaticamente:

- 🌅 Manhã: 09h – 12h  
- 🌇 Tarde: 13h – 18h  
- 🌙 Noite: 19h – 21h  

### 🚫 Bloqueio de horários
- Horários já agendados ficam indisponíveis
- Evita conflitos e duplicidade

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React  
- 📘 TypeScript  
- ⚡ Vite  
- 🎨 CSS  
- ☁️ Vercel (Deploy)

---

## 📁 Estrutura do Projeto
```
hairday/
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── afternoon.svg
│   │   ├── arrow-down.svg
│   │   ├── calendar.svg
│   │   ├── cancel.svg
│   │   ├── logo.svg
│   │   ├── morning.svg
│   │   ├── night.svg
│   │   ├── person.svg
│   │   └── scissors.svg
│   │
│   ├── components/
│   │   ├── Schedule.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── App.tsx
│   ├── form.css
│   ├── global.css
│   ├── index.css
│   ├── main.tsx
│   └── schedule.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🎯 Como Funciona

1. Selecione uma data
2. Escolha um horário disponível
3. Informe o nome do cliente
4. Clique em **Agendar**
5. O agendamento aparecerá automaticamente na lista

---

## 🧠 Conceitos React Aplicados

- Gerenciamento de estado com `useState`
- Elevação de estado (lifting state up)
- Componentização
- Tipagem com TypeScript
- Manipulação de arrays:
  - `map`
  - `filter`
  - `reduce`
- Comunicação entre componentes via props

---

## 🏗️ Arquitetura

O estado global da aplicação é centralizado no `App.tsx`, contendo:

- Lista de agendamentos
- Data selecionada

### Componentes principais:

- **Sidebar**
  → Responsável por criar agendamentos

- **Schedule**
  → Responsável por exibir e remover agendamentos

---

## 💻 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/hairday

# Entre no diretório
cd hairday

# Instale as dependências
npm install

# Execute o projeto
npm run dev

# O projeto está disponível online em:

👉 https://hairday-rocket.vercel.app/
