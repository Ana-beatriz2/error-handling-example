const router = require("express").Router();
const todoControler = require("./controller/todoController");

router.get("/todo", todoControler.getTodos);
router.get("/todo/:name", todoControler.getOneTodo);

router.get("/", (req, res)=>{
    res.status(200).json({message: "Hello World"})
});

module.exports = router;