const express=require("express");
const router=express.Router();
// import contrller
const {createTodo}=require("../controllers/creatTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const{deletTodo}=require("../controllers/deletTodo")
// define api route 
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deletTodo/:id",deletTodo);


module.exports=router;