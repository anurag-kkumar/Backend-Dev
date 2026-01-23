const http=require("http");
const fs=require("fs")
const url=require("url")

const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true)

    if(parsedUrl.pathname=="/support"){
        const {name,issue,priority,Ticket_ID}=parsedUrl.query;
         const a=Number(Ticket_ID)

        
        
        const log=`Support:${name} | issue:${issue} | priority:${priority} | Ticket_ID:${a}\n`
         if(priority=="high"){
        fs.appendFile("urgent.txt",log,(err)=>{
            
                if(err){
                console.log(err);
                }
            else{
                 console.log("we will solve it soon");
                 
            }
            
             })
            }
            else{
                fs.appendFile("complain.txt",log,(err)=>{
            if(err){
                 console.log(err);
                   }
            else{
                console.log("We will solve it soon");
            }
             })
            }
   
    
             res.writeHead(200, { "Content-Type": "text/html" });
             res.end(`
            <html>
             <head>
            <title>Complain Search</title>
             </head>
            <body style="font-family: Arial; background:#f4f4f4; padding:20px;">
          <h1> Complain Details</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Issue:</strong> ${issue}</p>
          <p><strong>Priority:</strong> ${priority}</p>
          <p><strong>Ticket_ID:</strong> ${Ticket_ID}</p>
        </body>
      </html>
    `);
        
    }
    else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
})

server.listen(8002, () => {
  console.log("Server running on port 8002");
});