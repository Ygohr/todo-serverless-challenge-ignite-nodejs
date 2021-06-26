# ⚔️ Ignite - Desafio: To Do Serverless
![](assets/capa_ignite.png)
<br>

## :pushpin: Sobre o Desafio
Este desafio tem como objetivo a criação de uma aplicação de **To Do (Tarefas)** utilziando o conceito **Serverless**.
- **POST -** `/saveTodo/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para o *todo*.

    A tarefa é salva com os seguintes campos no **DynamoDB**:

    ```
    { 
    	id: 'uuid', // id gerado para garantir um único todo com o mesmo id
    	user_id: 'uuid' // id do usuário recebido no pathParameters
    	title: 'Nome da tarefa',
    	done: false, // iniciado sempre como false
    	deadline: '2021-06-26'
    }
    ```

- **GET-** `/listTodos/{userid}`

    Essa rota recebe o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum *todo*).
    A rota retorna os *todos* que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.

## 📋 Requisitos e Regras de Negócio
O documento de referência de Requisitos e Regras de Negócio pode acessado através deste [**link.**](https://www.notion.so/Requisitos-e-Regras-de-Neg-cio-To-Do-com-Serverless-M-dulo-6-Desafios-1-Ignite-4eb4fa9ac8a14feb9a2ec4cd432c7958)

## 💻 Instalação, Dependências e Executando o Projeto
**1.** Clone este repositório 
```
git clone git@github.com:Ygohr/todo-serverless-challenge-ignite-nodejs.git
``` 
**2.** Vá até o diretório raiz do projeto
```
cd todo-serverless-challenge-ignite-nodejs
``` 
**3.** Instale as dependências necessárias
```
yarn 
ou
npm install
```
**4.** Execute a aplicação
```
yarn dev
```

- **Desenvolvido** **por** [**Ygohr**](https://www.linkedin.com/in/ygohr-medeiros-28451b14a/) 🤖
