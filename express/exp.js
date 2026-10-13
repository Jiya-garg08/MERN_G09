const e = require("express"); // importing express framework

const app = e();  // creating express application
// e is a variable that holds a function , () meas we are calling/executing that function

// creating get route - means home/root url
app.get("/",(req,res)=>{  // request and response are 2 objects automatically provided by express
    res.send("welcome to express application");
});

app.get("/about",(req,res)=>{
    res.send("about page");
});

app.get("/users",(req,res)=>{
    res.send("users page");
});

app.listen(4000,()=>{  // starts the express server on port 4000
    console.log("server is running on http://localhost:4000/");
});

// you have created an express application which starts a server that listens for incoming requests on

