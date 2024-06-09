const todoService = require("../services/todoService");
const { HttpError } = require("../utils/app.error");

async function getTodos(req, res){
    try{
        const todos = await todoService.getTodos();
        res.status(200).json({item : todos});
    }catch(e){
        if(e instanceof HttpError){
            console.log(e.httpCode)
            res.status(e.httpCode).json({code: e.httpCode ,message: e.message, type: e.type})
        } else{
            res.status(HttpCode.INTERNAL_SERVER_ERROR).
                json({code: HttpCode.INTERNAL_SERVER_ERROR ,message: e.message, type: 'ERR_CONTROLLER_TODO-INTERNAL'})
        }
    }
}

async function getOneTodo(req, res){
    try{
        const name = req.params.name;

        const todo = await todoService.getOneTodo(name);
        res.status(200).json({item : todo});
    }catch(e){
        if(e instanceof HttpError){
            res.status(e.httpCode).json({code: e.httpCode ,message: e.message, type: e.type})
        } else{
            res.status(HttpCode.INTERNAL_SERVER_ERROR).
                json({code: HttpCode.INTERNAL_SERVER_ERROR ,message: 'Inexpected Error - ' + e.message, type: 'ERR_CONTROLLER_TODO-INTERNAL'})
        }
    }
}

module.exports = {
    getTodos,
    getOneTodo
}
