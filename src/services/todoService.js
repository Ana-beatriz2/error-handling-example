const todos = [
      {
        "name": "Configuração de imagem Temboard",
        "description": "Configuração da imagem Docker baseada em PostgreSQL 14 para o Temboard, incluindo instalação de Python, pip e configuração de locais."
      },
      {
        "name": "Configuração de imagem PostgreSQL 12",
        "description": "Configuração da imagem Docker baseada em PostgreSQL 12, incluindo instalação de bibliotecas de desenvolvimento e o agente Temboard."
      },
      {
        "name": "Configuração de imagem PostgreSQL 13",
        "description": "Configuração da imagem Docker baseada em PostgreSQL 13, incluindo instalação de bibliotecas de desenvolvimento e o agente Temboard."
      },
      {
        "name": "Configuração de imagem PostgreSQL 14",
        "description": "Configuração da imagem Docker baseada em PostgreSQL 14, incluindo instalação de bibliotecas de desenvolvimento e o agente Temboard."
      }
]

const { TodoNotFounded } = require("../errors/todoError");

async function getTodos(){
  try{
    if(todos.length!=0){
      return todos
    } else{
      throw new TodoNotFounded('ERR_SERVICE_TODO-NOT-FOUND')
    }
  }catch(e){
    throw e
  }
}

async function getOneTodo(name) {
  try {
    if (todos.length === 0) {
      throw new TodoNotFounded('ERR_SERVICE_TODO-NOT-FOUND');
    }

    for (const todo of todos) {
      if (todo.name === name) {
        return todo;
      }
    }

    throw new TodoNotFounded('ERR_SERVICE_TODO-NOT-FOUND');

  } catch (error) {
    throw error;
  }
}


module.exports = {
  getTodos,
  getOneTodo
}