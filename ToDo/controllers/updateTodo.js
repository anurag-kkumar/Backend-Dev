// import model
const Todo = require("../models/Todo");

// route handler
exports.updateTodo = async (req, res) => {
  try {
    // method to get id 
    const {id}=req.params;
    const {title, discription}=req.body;
    const todo=await Todo.findByIdAndUpdate(
        {_id:id},
        {title,discription,updatedAt:Date.now()}
    )
    res.status(200).json({
        success:true,
        data:todo,
        message:`update at by you `,
    })
  } 
  
  catch (err) {
    console.error(err); //Specifically meant for errors
    res.status(500).json({
        success:false,
        error:err.message,
        message:'server Error',
    })
  }
};

