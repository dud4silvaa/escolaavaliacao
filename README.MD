# Sistema de Controle de Turmas e Atividades

## Descrição
Sistema web full-stack para controle de turmas e atividades de professores, permitindo cadastro, visualização e exclusão de turmas e atividades.

---

## Requisitos de Infraestrutura

### Banco de Dados (SGBD)
- *MySQL* versão *8.0* ou superior

### Servidor de Aplicação / Sistema Operacional
- *Node.js* versão *18+* (para o back-end)
- Sistema operacional recomendado: *Windows 10+* ou *Linux Ubuntu 22.04*

### Linguagens Utilizadas
- *Front-end:* HTML5, CSS3, JavaScript
- *Back-end:* Node.js com Express
- *Banco de Dados:* MySQL

---

## Como testar o aplicativo

1. Clone o repositório:
   ```bash
   git clone https://github.com/DahraFagionato/vpsescola.git
   cd vpsescola
   ```

2. Instalar dependências:
```bash
   npm install
   ou
   npm i
   ```

3. Configurar Banco de Dados
Crie um banco de dados MySQL específico para o projeto.
Configure usuário e senha no arquivo .env:
```bash
   DATABASE_URL="mysql://root@localhost:3306/nome_do_banco"
   ```

4. Rodar Migrations do Prisma:
```
npx prisma migrate dev --name init
```

5. Iniciar o servidor:
```
npm run dev
```
O servidor estará disponível em http://localhost:3001.

6. Testar o Sistema
- Acesse pelo navegador ou utilize o Insomnia/Postman para testar a API.
- Funcionalidades para testar:
    - Cadastro, listagem, edição e exclusão de turmas;
    - Cadastro, listagem, edição e exclusão de atividades;
    - Login e logout do professor.