const express=require("express");
const app=express();
const PORT=4000;
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
     res.sendFile(__dirname+"/public/index.html");
})
app.post("/register",(req,res)=>{
   
//     const {name,branch}=req.body;
//     res.status(200).json({
//         message:`${name} in brnch ${branch}`,
// })
console.log(req.body);
res.send("registered")
})
app.listen(PORT,(req,res)=>{
    console.log(`server at ${PORT}`)
})