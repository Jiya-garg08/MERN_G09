const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("welcome to homepage_1");
    }else if(req.url == "/about"){
        res.end("welcome to about page");
    }else if(req.url == "/cart"){
        res.end("welcome to cart page");
    }
});

server.listen(8081,()=>{
    console.log("running in 8081");
});