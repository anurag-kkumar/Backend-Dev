// import model
const Todo = require("../models/Todo");


exports.getTodo = async (req, res) => {
  try {
    //fetch all iteam from database 
    const todos=await Todo.find({});
    // response 
    res.status(200)
    .json({
        success:true,
        data:todos,
        message:"entire Todo data is fetched "
    });
  } catch (err) {
    console.error(err); //Specifically meant for errors
    res.status(500).json({
        success:false,
        error:err.message,
        message:`server Error`,
    })
  }
};


// mongooose libibarry provide various  function 

// id paramenter  for sigle todos
exports.getTodoById = async (req, res) => {
  try {
    // extrat todo iteam basic on id 
    const id =req.params.id; // req body se id extract kro lo 
    const todo=await Todo.findById({_id:id})

    // todo me error data for given id not found
    if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found by id "
        })
    }
    // dat fo given id found 
    res.status(200).json({
        success:true,
        data:todo,
        message:`found data for ${id}`
    })
    
  } catch (err) {
    console.error(err); //Specifically meant for errors
    res.status(500).json({
        success:false,
        error:err.message,
        message:'server Error',
    })
  }
};