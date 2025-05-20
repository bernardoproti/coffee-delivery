# Coffee Delivery

Aplicação de delivery de cafés construída com React + TypeScript, permitindo que o usuário navegue por diferentes opções de café, adicione itens ao carrinho, preencha seu endereço e finalize o pedido com métodos de pagamento personalizados.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Imagens](#imagens)
- [Funcionalidades](#funcionalidades)
- [Ferramentas](#ferramentas)
- [Contato](#contato)

## Requisitos

Node.js: para instalar as depêndencias e rodar a aplicação localmente é necessário instalar o Node. Caso não tenha, você pode baixá-lo aqui: https://nodejs.org/

## Instalação

Siga os passos para rodar a aplicação localmente:

1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/coffee-delivery.git
   ```
2. Acesse o diretório do projeto.
3. Instale as dependências com:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento com:
   ```sh
   npm run dev
   ```
5. Acesse no navegador: `http://localhost:5173`

## Imagens

### Página inicial com lista de cafés:
![image](https://github.com/user-attachments/assets/2147d22c-d250-4e7d-a8c0-20ae9938773f)
![image](https://github.com/user-attachments/assets/821a3909-dabb-4b0c-9214-1e547518d56e)

### Carrinho lateral com itens adicionados:
![image](https://github.com/user-attachments/assets/d7fc6945-8fe9-4611-9e9f-29dc8e3a006d)

### Tela de sucesso após pedido confirmado:
![image](https://github.com/user-attachments/assets/939cf6b2-8476-40ab-845c-36553bef232e)


## Funcionalidades

- **Listagem de cafés**:
  - Mostra catálogo de cafés com nome, descrição, imagem e preço.
  - Botão de adicionar com controle de quantidade.

- **Carrinho de compras**:
  - Armazena os cafés selecionados com suas respectivas quantidades.
  - Permite aumentar, diminuir ou remover itens diretamente do carrinho.

- **Formulário de Checkout**:
  - Coleta informações de endereço e método de pagamento (Cartão, Débito ou Dinheiro).
  - Validação em tempo real com feedback para o usuário.

- **Resumo do Pedido**:
  - Mostra valor dos itens, taxa de entrega e total final antes da confirmação.

- **Tela de Confirmação**:
  - Exibe resumo do endereço de entrega e método escolhido.

- **Responsividade e acessibilidade**:
  - Layout adaptado para dispositivos móveis e com navegação intuitiva.

## Ferramentas

A aplicação foi desenvolvida utilizando:

- **React.js**
- **TypeScript**
- **Vite**
- **LocalStorage**
- **React Router DOM**
- **Context API**
- **React Hook Form + Zod**
- **Styled-components**
- **Phosphor Icons**

## Contato

Bernardo Proti - bernardo.proti@gmail.com
