const express=require('express');
const app= express();

require("dotenv").config();
const port=4000;

//middleware to parse json request body
app.use(express.json());
// import routers

const todoRoutes=require("./routes/todo");

// mount the todo ASPI routes
app.use("/api/vi",todoRoutes);
//start
app.listen(port,()=>{
    console.log("PORT from env:", process.env.PORT);
// console.log(typeof process.env.PORT);  

    console.log(`server star at${port}`);


})

// DB connect 
const dbConnect=require("./config/database");
dbConnect();
// defualt routes
app.get("/",(req,res)=>{
    res.send(`<h1> this is home page </h1>`)
})

//nodemon 
//loopback 