// import model
const Todo = require("../models/Todo");

// route handler
exports.deletTodo = async (req, res) => {
  try {
    const {id}=req.params;
    await Todo.findByIdAndDelete(id);
    res.json({
        success:true,
        message:"Todo deleted"
    })
  } 
  
 catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message:err.message,
      
    });
  }
};

