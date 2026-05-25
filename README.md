# Dra. Mariana Lopes Nutrição

Protótipo MVP em React para uma landing page premium de agendamento de consulta online para uma nutricionista particular.

## Ideia do sistema

O sistema apresenta a marca fictícia **Dra. Mariana Lopes Nutrição**, uma nutricionista com posicionamento de clínica premium, atendimento online e foco em acompanhamento personalizado.

A proposta é criar uma experiência elegante, acolhedora e profissional para transmitir confiança ao visitante e conduzi-lo ao agendamento de uma consulta. O site evita aparência de sistema administrativo e funciona como uma página comercial de conversão, com linguagem clara, visual sofisticado e formulário simples.

## Objetivo do MVP

O objetivo principal é demonstrar, em uma apresentação comercial, como seria a presença digital de uma nutricionista que oferece consultas online.

O protótipo permite:

- Apresentar a profissional e sua especialidade.
- Mostrar para quem o atendimento é indicado.
- Explicar como funciona o processo de agendamento.
- Destacar diferenciais premium do atendimento.
- Coletar uma solicitação de agendamento por meio de um formulário.
- Exibir uma mensagem de sucesso após o envio.

## Funcionalidades

- Landing page responsiva em React.
- Header com navegação para as principais seções.
- Botões de agendamento com rolagem suave até o formulário.
- Hero section com chamada principal e card visual da nutricionista.
- Seção sobre a profissional com números fictícios.
- Cards para públicos e objetivos de atendimento.
- Passo a passo de funcionamento da consulta online.
- Seção de diferenciais premium.
- Formulário de agendamento com dados mockados.
- Mensagem de confirmação após envio.
- Footer com contatos fictícios.

## Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML
- CSS

O projeto não utiliza backend, banco de dados ou integrações externas obrigatórias.

## Estrutura

```text
mariana-lopes-nutricao/
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  src/
    App.jsx
    main.jsx
    styles.css
```

O arquivo principal da interface é:

```text
src/App.jsx
```

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Depois, acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

## Observações

Este é um protótipo MVP para apresentação. Os dados da nutricionista, contatos, CRN, números de pacientes e formulário são fictícios.

Para transformar o protótipo em um produto real, os próximos passos seriam integrar envio de formulário, calendário de disponibilidade, confirmação por WhatsApp ou e-mail e, se necessário, pagamento online.
