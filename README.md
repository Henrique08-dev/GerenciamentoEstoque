📋 Sobre o Projeto

O **Sistema de Gerenciamento de Estoque** é uma aplicação web completa desenvolvida para atender tanto administradores quanto clientes. A plataforma oferece um controle robusto de inventário para gestores enquanto proporciona uma visualização transparente dos produtos disponíveis para os clientes.

🎯 Objetivos

- **Fornecer um sistema seguro** com autenticação e autorização baseada em roles
- **Oferecer controle completo** para administradores gerenciarem o inventário
- **Disponibilizar visualização pública** dos produtos para clientes
- **Garantir separação de acessos** entre áreas administrativas e públicas
- **Prover interface intuitiva** para diferentes tipos de usuários

👥 Públicos e Funcionalidades

👨‍💼 Administradores
- Acesso à área administrativa protegida por login
- Controle total sobre o inventário (CRUD completo)
- Capacidade de adicionar, editar e remover produtos
- Gestão de categorias e informações dos produtos
- Interface privilegiada com funcionalidades avançadas

👥 Clientes/Visitantes
- Visualização pública do catálogo de produtos
- Listagem organizada de todos os itens disponíveis
- Informações detalhadas sobre produtos (sem opções de edição)
- Interface simplificada e focada na consulta
- Acesso imediato sem necessidade de autenticação

🛠️ Tecnologias Utilizadas

Backend
- **Node.js** com Express.js para construção da API RESTful
- **MongoDB** com Mongoose para persistência de dados
- **JWT** (JSON Web Tokens) para autenticação segura
- **Bcrypt** para criptografia de senhas
- **CORS** para gestão de requisições entre diferentes origens
- **Body-parser** para parsing de requisições HTTP
- **Dotenv** para gestão de variáveis de ambiente

Frontend
- **React** 18.3.1 com hooks e functional components
- **React Router DOM** v6 para navegação e proteção de rotas
- **Bootstrap** e **React Bootstrap** para interface responsiva
- **Axios** para consumo da API backend
- **Prop-types** para validação de props em componentes React

Ferramentas de Desenvolvimento
- **Vite** para build e desenvolvimento rápido do frontend
- **ESLint** para análise estática e qualidade do código
- **TypeScript** tipos para melhor desenvolvimento

🔐 Sistema de Autenticação e Autorização

- **Login seguro** com validação de credenciais
- **Proteção de rotas** baseada em roles (admin/user)
- **Redirecionamento inteligente** baseado no nível de acesso
- **Tokens JWT** para gestão de sessões seguras
- **Middleware de autorização** para endpoints administrativos

📊 Funcionalidades Principais

🔐 Área de Autenticação
- Página de login para administradores
- Validação de credenciais no backend
- Redirecionamento automático baseado no role
- Gestão de sessões com tokens JWT

🏪 Área Administrativa (Protegida)
- **Dashboard completo** com visão geral do estoque
- **CRUD completo** de produtos (Create, Read, Update, Delete)
- **Gestão de categorias** e organizações
- **Relatórios e estatísticas** do inventário
- **Interface privilegiada** com todas as funcionalidades

🛍️ Área Pública (Clientes)
- **Catálogo de produtos** disponíveis
- **Visualização em lista** organizada e intuitiva
- **Informações detalhadas** dos produtos (sem edição)
- **Busca e filtros** para fácil localização
- **Design responsivo** acessível para todos os dispositivos

🚀 Funcionalidades Técnicas

- **API RESTful** com endpoints organizados por funcionalidade
- **Validação de dados** em frontend e backend
- **Gestão de erros** com respostas apropriadas HTTP
- **Paginação e filtros** para grandes volumes de dados
- **Interface responsiva** com Bootstrap 5
- **Proteção contra XSS e injection**

🔒 Segurança

- **Senhas criptografadas** com bcrypt
- **Proteção de rotas** com middleware JWT
- **Validação de inputs** contra injection
- **CORS configurado** para origens específicas
- **Variáveis sensíveis** em environment variables
