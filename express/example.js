const express = require("express");
const app = express();

//express.json() middleware converts incoming json data into js object(usable format)
app.use(express.json());

// middleware 1- checks whether the user has entered valid details
const validationMiddleware = (req,res,next)=>{

    // get email and password from the data sent by the client(browser)
    const {email, password} = req.body;

    if(!email || !password){
        return res.send("enter credentials first");
    }else if(!email.includes("@")|| !email.endsWith(".com")){
        return res.send("enter valid email");
    }
    else{
        console.log("user is getting validated");
        next(); // allow the request to move to the next middleware
    }
};

// middleware 2: checks whether the login details are correct

const authMiddleware = (req,res,next)=>{

    // get email and password from the data sent by the client(browser)
    const {email, password} = req.body;

    // these are the correct credentials for this 
    const useremail = "user@gmail.com";
    const userpassword = "123";

    // compare the entered details with the correct credentials
    if(email == useremail && password == userpassword){
        // if both found, continue to the next step
        next();
    }else{
        // if either detail is incorrect, send an error response
        return res.status(400).send("please enter valid email and password");

        // res.send(400).send() is used in express.js to send a reponse to the client with http status code 400 ie
        // bad request
    }
};

// route for the homepage
app.get("/",(req,res)=>{
    res.send("welcome to homepage");
});

app.post("/profile", validationMiddleware,authMiddleware,(req,res)=>{
    res.send("welcome to profile");
});

app.listen(8000,()=>{
    console.log("server is running at http://localhost:8000/");
});