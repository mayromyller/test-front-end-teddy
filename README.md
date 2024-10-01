# Test frontend Teddy

O sistema tem uma tela inicial onde o usuário pode inserir o nome e, em seguida, será redirecionado para uma tela com a lista de todos os clientes cadastrados, onde poderá cadastrar, selecionar, atualizar e excluir clientes, além de uma tela para visualização dos clientes selecionados.

## Apresentação

Link para o vídeo: [Vídeo](https://vimeo.com/1015022372?share=copy#t=0)

## Pré-requisitos

Antes de começar, você precisará ter instalado na sua máquina:

- Node.js (versão 18.x)
- Docker

## Instalação

Para instalar o projeto, sem uso do Docker, siga os passos abaixo:

1. Clone o repositório:

```
https://github.com/mayromyller/test-front-end-teddy.git
```

2. Navegue até a pasta do projeto:

```
cd test-front-end-teddy/app
```

E também

```
cd test-front-end-teddy/container
```

3. Instale as dependências (pnpm, yarn, npm ou similar):

```
pnpm install
```

Você pode navegar até a pasta app e executar `pnpm dev` e abrir o app na url `http://localhost:3001/` ou executar dentro da pasta container `pnpm dev` e abrir o app na url `http://localhost:3000/`.

### Instalando o projeto usando Docker:

Após fazer clone do repositório, navegue até a pasta do projeto e execute o comando abaixo:

```
docker compose up --build
```

A aplicação rodará em `http://localhost:3000/`.

## Tecnologias Principais

Abaixo estão as principais tecnologias utilizadas neste projeto:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [ESLint](https://eslint.org/)
- **[Module Federation](https://webpack.js.org/concepts/module-federation/)** (via Vite Plugin).
- [Zod](https://zod.dev/)

## Scripts Disponíveis

Aqui estão alguns scripts importantes para execução e desenvolvimento do projeto:

- `dev`: Inicia o servidor de desenvolvimento usando Vite.
- `build`: Constrói o projeto para produção.
- `lint`: Verifica o código para garantir conformidade com as regras de lint.
- `test`: Executa os testes com Vitest.
- `coverage`: Gera o relatório de cobertura de testes do Vitest.
- `e2e`: Executa os testes end-to-end com Playwright.
- `e2e:ui`: Executa os testes end-to-end com uma interface visual interativa do Playwright.

## Detalhes do projeto

Nesse projeto, utilizei um abordagem e arquitetura similar a do MVP (Model-View-Presenter), onde eu isolo toda a logica de negócio e integração à API de forma com que a UI, não conheça a lógica de negócio, e vice-versa.

Faço isso com a utilização de hooks customizados delimitando as fronteiras entre UI e lógica de negócio, com a utilização do Tanstack Query (React Query) para lidar com requisições e estados assíncronos, trazendo uma camada de cache para melhorar a performance do aplicativo.

---

Linkedin: https://www.linkedin.com/in/mayromyller/
GitHub: https://github.com/mayromyller
