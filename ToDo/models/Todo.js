const mongoose =require("mongoose");
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLenght:50,

    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
         type:Date,
        required:true,
        default:Date.now(),
    },
});
module.exports=mongoose.model("Todo",todoSchema) // Mongoose automatically converts "Todo" to a collection name: "todos"
// a schema is a blueprint used to define the structure, data types, and constraints of data

// har path kise controller se map hoga todo type ke object ke data ki entry.