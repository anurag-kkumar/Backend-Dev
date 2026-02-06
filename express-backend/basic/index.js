const express=require("express");
const app=express();
const port=5000;
app.get("/",(req,res)=>{
    res.send(`<h1>hello</h1>`)
})

app.listen(port,()=>{
    console.log("server start")
});
const student=[
    {id:1,name:"anurag",branch:"cs"},
    {id:2,name:"aryan",branch:"ece"}
];
app.get("/users",(req,res)=>{
    res.send(student);
})
app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const finds=student.find((element) => element.id ==id)
    res.send(finds);
})
//zoho ops
//:id is paramenter 

// Corrected version (simple & accurate)

// Schema → collection of properties and rules

// Model → class created from schema

// Object created from model → Document

// Collection of documents → Collection

// Collection(s) together → Database (DB)

// Your sentence, fixed 

// Schema is a collection of properties and rules.
// Model is a class created from the schema.
// When we create an object of a model (create data), it is called a document.
// A collection of documents is called a collection.
// A group of collections is called a database (DB).

// mongodb me kon sa type  ka data store hota hai 