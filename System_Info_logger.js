const { timeStamp } = require("console")
const os=require("os")
const fs=require("fs")
const message = 
`Time :${timeStamp}
Free memory: ${os.freemem()/(1024*1024*1024)}
Platform:${os.platform()}
cpu:${os.cpus}`;

setInterval(()=>{
    
fs.appendFile("./log.txt",message, (err) => {
    if(err){
        console.log(err);
        
    }
})
},5000)
