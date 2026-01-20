// import model
const Todo = require("../models/Todo");

// route handler
// main thread not blocked because DB interaction is async
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from req body
    const { title, description } = req.body;

    // create new Todo object and insert into DB
    const todo = await Todo.create({ title, description });

    // send a json response with success flag
    res.status(200).json({
      success: true,
      data: todo,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message:err.message,
      
    });
  }
};

// ye kya hai function ya object hai ?
// export kar ne ka method 2 