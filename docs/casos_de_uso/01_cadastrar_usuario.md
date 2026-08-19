# Cadastrar Usuário

## Descrição
Permite que novos usuários criem contas para poderem acessar o sistema, as contas poderão ter diferentes níveis de privilégios.

---

## User Story

Crio uma conta para obter o uso do sistema de gerenciamento clínico

---

## Caso de Uso

**Nome:** Cadastrar Usuário  
**Ator:** Usuário

### Fluxo Principal

1. O usuário acessa a tela de cadastro.
2. O sistema solicita nome, e-mail e senha.
3. O usuário preenche os dados.
4. O sistema valida as informações.
5. O sistema cria a conta do usuário.

### Fluxo Alternativo

**E-mail já cadastrado**

1. O usuário informa um e-mail já existente no sistema.
2. O sistema exibe mensagem de erro.
3. O cadastro não é concluído.

---

## Critérios de Aceitação

- O usuário deve informar nome, e-mail e senha.
- Todos os campos obrigatórios devem ser preenchidos corretamente.
- O sistema não deve permitir cadastro com e-mail já existente.
- As senhas devem ser armazenadas de forma segura.

---

