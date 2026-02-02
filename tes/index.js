const { error } = require("console");
const fs=require("fs");
const readname=fs.readFile("newfile.txt",()=>{
    if(error){
        console.log("file  read")
    }
});
const data="Anurag";
const writefile=fs.writeFile("wfile.txt",data,()=>{
    if(error){
        console.log("file  write");
    }
});