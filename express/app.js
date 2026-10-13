const http = require("http");
// http is the built in module in node.js
// which is used to create a server and let server communicate with client

const server = http.createServer((req,res)=>{
    // here req - request, res = response
    res.end("we are running server on port no 8080");
});

// callback function is function ke andr function
// here createserver,listen is function and inside it we are calling one more function

server.listen(8080,()=>{
    // 8080 is the port no
    console.log("Running in 8080");
});


