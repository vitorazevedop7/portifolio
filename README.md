### 🌐 Protótipos (Sprint 01)

| | | |
|---|---|---|
| ![Wireframe 1](imgs-prototipos/Screenshot%202026-02-23%20at%2023.14.19.png) | ![Wireframe 2](imgs-prototipos/Screenshot%202026-02-23%20at%2023.14.38.png) | ![Wireframe 3](imgs-prototipos/Screenshot%202026-02-23%20at%2023.14.52.png) |
| ![Wireframe 4](imgs-prototipos/Screenshot%202026-02-23%20at%2023.15.05.png) | ![Wireframe 5](imgs-prototipos/Screenshot%202026-02-23%20at%2023.15.19.png) | ![Wireframe 6](imgs-prototipos/Screenshot%202026-02-23%20at%2023.15.31.png) |
| ![Wireframe 7](imgs-prototipos/Screenshot%202026-02-23%20at%2023.15.43.png) | | |

---


# 💼 Vitor Azevedo — Portfólio Profissional 👨‍💻

> Website de portfólio profissional para apresentar trajetória, habilidades, projetos e formas de contato de maneira moderna e acessível.

<!-- Substitua pela logo do projeto -->
![Logo do Projeto](./docs/logo.png)

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Vercel](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)
![GitHub last commit](https://img.shields.io/github/last-commit/vitorazevedop7/portfolio)

---

## 📚 Índice

- [🔗 Links Úteis](#-links-úteis)
- [📝 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades Principais](#-funcionalidades-principais)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗 Arquitetura](#-arquitetura)
- [🔧 Instalação e Execução](#-instalação-e-execução)
- [📂 Estrutura de Pastas](#-estrutura-de-pastas)
- [🎥 Demonstração](#-demonstração)
- [🚀 Deploy](#-deploy)
- [👥 Autores](#-autores)
- [🙏 Agradecimentos](#-agradecimentos)
- [📄 Licença](#-licença)

---

## 🔗 Links Úteis

🌐 **Demo Online:** [Acesse o Portfólio](https://vitor-portfolio.vercel.app) *(atualizar após deploy)*

📖 **Repositório:** [github.com/vitorazevedop7/portfolio](https://github.com/vitorazevedop7/portfolio)


---

## 📝 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina de Engenharia de Software da **PUC Minas** (Lab01 — Sprint 01), com o objetivo de criar um portfólio profissional completo e hospedado na nuvem.

**Por que ele existe?** Em um mercado competitivo — especialmente para quem busca oportunidades internacionais —, ter um portfólio online bem estruturado é essencial para demonstrar competência técnica além do currículo. Este projeto serve como vitrine real das habilidades do desenvolvedor.

**Qual problema resolve?** Centraliza em um único lugar a apresentação profissional, os projetos desenvolvidos, as experiências acumuladas e os canais de contato, tornando o processo de recrutamento mais eficiente para ambas as partes.

**Contexto:** Projeto acadêmico com aplicação real — o site será efetivamente utilizado como portfólio profissional após a conclusão do curso.

**Valor entregue:** Qualquer recrutador ou cliente pode, em menos de dois minutos, entender quem é o desenvolvedor, o que ele já construiu e como entrar em contato.

> **Nota:** Este README segue as boas práticas de documentação recomendadas pelo Prof. Dr. João Paulo Aramuni.

---

## ✨ Funcionalidades Principais

- 🌐 **Bilíngue (PT/EN):** Seção "Sobre Mim" com toggle entre português e inglês, ampliando o alcance internacional.
- 📋 **Timeline de Projetos:** Projetos organizados cronologicamente, com descrição, tecnologias, GIFs/imagens e links para o GitHub.
- 💼 **Seção de Experiências:** Relato de experiências profissionais freelancer com empresa, cargo, período e descrição.
- 📬 **Formulário de Contato:** Envio de mensagens diretamente por e-mail via integração com EmailJS.
- 🔗 **Links Sociais Clicáveis:** Acesso direto a e-mail, LinkedIn, GitHub e WhatsApp.
- 📱 **Design Responsivo:** Layout adaptado para desktop, tablet e mobile com menu hamburguer.
- ⚡ **Performance:** Geração estática com Next.js (SSG) para carregamento ultrarrápido via CDN.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.x | Framework React com App Router e SSG |
| [React](https://react.dev/) | 18.x | Biblioteca de interface |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Estilização utilitária |
| [Lucide React](https://lucide.dev/) | latest | Ícones SVG |

### 📧 Serviços Externos

| Serviço | Uso |
|---|---|
| [EmailJS](https://www.emailjs.com/) | Envio de e-mail pelo formulário de contato (plano gratuito) |
| [Google Fonts](https://fonts.google.com/) | Fontes DM Serif Display + DM Sans |

### ⚙️ Infraestrutura & DevOps

| Tecnologia | Uso |
|---|---|
| [Vercel](https://vercel.com/) | Hospedagem e deploy contínuo (gratuito) |
| [Git + GitHub](https://github.com/) | Versionamento e repositório |

---

## 🏗 Arquitetura

O projeto adota a arquitetura **JAMstack** (JavaScript, APIs, Markup), utilizando o Next.js com **Static Site Generation (SSG)**. Todo o conteúdo é pré-renderizado em tempo de build, resultando em páginas HTML estáticas servidas via CDN pela Vercel.

**Principais decisões arquiteturais:**

- **Single Page Application com scroll suave:** Todas as seções (Sobre, Projetos, Experiências, Contato) estão na mesma página, acessadas por âncoras via menu de navegação fixo.
- **Sem back-end próprio:** O formulário de contato utiliza a API do EmailJS diretamente do front-end, eliminando a necessidade de servidor dedicado.
- **Componentização:** Cada seção é um componente React independente (`<Hero />`, `<Sobre />`, `<Projetos />`, etc.), facilitando manutenção e reutilização.
- **Dados estáticos:** Projetos e experiências são armazenados em arquivos `.ts` em `/src/data`, separando conteúdo de apresentação.

**Fluxo de dados:**

```
Usuário → Vercel CDN → HTML Estático (SSG)
                              ↓
                    Componentes React (Client-side)
                              ↓
               Formulário → EmailJS API → E-mail
```

### Exemplos de Diagramas

| Arquitetura Geral | Fluxo do Formulário de Contato |
|---|---|
| *(adicionar diagrama de arquitetura)* | *(adicionar diagrama de sequência)* |

---

## 🔧 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18.x ou superior
- [npm](https://www.npmjs.com/) v9.x ou superior (ou yarn)
- Conta no [EmailJS](https://www.emailjs.com/) para ativar o formulário de contato

### 🔑 Variáveis de Ambiente

Será um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

Preencha com suas credenciais:

| Variável | Descrição | Exemplo |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS | `service_xxxxxxx` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template de e-mail | `template_xxxxxxx` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública EmailJS | `xxxxxxxxxxxxxxxx` |

Exemplo do arquivo `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

> **Obs:** Variáveis com prefixo `NEXT_PUBLIC_` são expostas no bundle do cliente. Nunca coloque chaves secretas com esse prefixo.

### 📦 Instalação de Dependências

```bash
# 1. Clone o repositório
git clone https://github.com/vitorazevedop7/portfolio.git
cd portfolio

# 2. Instale as dependências
npm install
```

### ⚡ Como Executar a Aplicação

**Terminal — Modo desenvolvimento:**

```bash
npm run dev
# Acesse em: http://localhost:3000
```

**Build de produção:**

```bash
# Gera os arquivos estáticos otimizados
npm run build

# Visualiza o build localmente
npm start
```

---

## 🚀 Deploy

O projeto é hospedado gratuitamente na **Vercel**, com deploy automático a cada push na branch `main`.

**Passos para fazer o deploy:**

```bash
# 1. Verifique o build sem erros
npm run build

# 2. Suba para o GitHub
git add .
git commit -m "feat: deploy inicial do portfólio"
git push origin main
```

Em seguida:

1. Acesse [vercel.com](https://vercel.com) e conecte sua conta GitHub
2. Importe o repositório `portfolio`
3. Adicione as variáveis de ambiente em **Project Settings > Environment Variables**
4. Clique em **Deploy** — a Vercel detecta Next.js automaticamente

🔗 **URL de produção:** `https://vitor-portfolio.vercel.app` *(atualizar após deploy)*

---

## 📂 Estrutura de Pastas

```
portfolio/
├── .env.example                  # 🧩 Exemplo de variáveis (sem valores sensíveis)
├── .env.local                    # 🔒 Variáveis locais SENSÍVEIS (não versionado)
├── .gitignore                    # 🧹 Arquivos ignorados pelo Git
├── README.md                     # 📘 Documentação principal
├── next.config.js                # ⚙️ Configuração do Next.js
├── tailwind.config.js            # 🎨 Configuração do Tailwind CSS
├── tsconfig.json                 # 🔧 Configuração do TypeScript
├── package.json                  # 📦 Dependências e scripts
│
├── /public                       # 📂 Arquivos estáticos públicos
│   ├── favicon.ico
│   └── /images
│       ├── todo-app.gif          # 🖼️ Demonstração do projeto To-Do
│       ├── barbearia.gif         # 🖼️ Demonstração do sistema de barbearia
│       └── moto-catalog.gif      # 🖼️ Demonstração do catálogo de viagens
│
├── /src
│   ├── /app                      # 📂 App Router do Next.js 14
│   │   ├── layout.tsx            # 🧱 Layout global (Nav + Footer)
│   │   ├── page.tsx              # 📄 Página principal (todas as seções)
│   │   └── globals.css           # 🎨 Estilos globais e variáveis CSS
│   │
│   ├── /components               # 🧱 Componentes React reutilizáveis
│   │   ├── Nav.tsx               # 🔝 Barra de navegação responsiva
│   │   ├── Hero.tsx              # 🏠 Seção Hero com animações
│   │   ├── Sobre.tsx             # 👤 Seção Sobre Mim (toggle PT/EN)
│   │   ├── Projetos.tsx          # 💻 Timeline de projetos
│   │   ├── Experiencias.tsx      # 💼 Lista de experiências profissionais
│   │   ├── Contato.tsx           # 📬 Formulário + links sociais
│   │   └── Footer.tsx            # 📋 Rodapé
│   │
│   ├── /data                     # 📊 Conteúdo estático do portfólio
│   │   ├── projects.ts           # 💻 Dados dos projetos
│   │   └── experiences.ts        # 💼 Dados das experiências
│   │
│   └── /types
│       └── index.ts              # 🔷 Tipagens TypeScript globais
│
└── /docs                         # 📚 Documentação e assets
    ├── logo.png                  # 🖼️ Logo do projeto
    └── /wireframes               # 🎨 Capturas dos wireframes do Figma
```

---

## 🎥 Demonstração

### 🌐 Aplicação Web

| Tela | Captura de Tela |
|---|---|
| Hero / Home | *(adicionar screenshot)* |
| Sobre Mim — PT | *(adicionar screenshot)* |
| Sobre Mim — EN | *(adicionar screenshot)* |
| Timeline de Projetos | *(adicionar screenshot)* |
| Experiências | *(adicionar screenshot)* |
| Formulário de Contato | *(adicionar screenshot)* |

> **Dica:** Para hospedar imagens no GitHub, arraste-as para o campo de texto de qualquer Issue — o link gerado pode ser usado diretamente no README.

---

## 👥 Autores

| 👤 Nome | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---|---|---|---|
| Vitor Augusto Viana Azevedo | [vitorazevedop7](https://github.com/vitorazevedop7) | [vitor-azevedo-293609343](https://www.linkedin.com/in/vitor-azevedo-293609343/) | vitorazevedo.p7@gmail.com |

---

## 🙏 Agradecimentos

- **PUC Minas** — Pelo suporte institucional e estrutura acadêmica de qualidade.
- **Prof. Dr. João Paulo Aramuni** — Pelos ensinamentos sobre Engenharia de Software, boas práticas de documentação e arquitetura de sistemas.
- **Vercel** — Pela plataforma de hospedagem gratuita com suporte nativo ao Next.js.
- **EmailJS** — Pelo serviço de envio de e-mail sem necessidade de back-end próprio.

---

## 🔗 Documentações Utilizadas

- 📖 [Documentação Oficial do Next.js](https://nextjs.org/docs)
- 📖 [Documentação do React](https://react.dev/)
- 📖 [Guia do Tailwind CSS](https://tailwindcss.com/docs)
- 📖 [EmailJS — Getting Started](https://www.emailjs.com/docs/)
- 📖 [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) — Padrão de mensagens de commit

---

## 📄 Licença

Este projeto está distribuído sob a **Licença MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

*Engenharia de Software — PUC Minas · Lab01S01 · 2025*
