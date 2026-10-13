const e = require("express");
const fs = require("fs");

const app = e();

// used to read json data sent by the client, it helps express understand this json data
app.use(e.json());
// it is called middleware - middleware is something that runs between receiving the request and executing route

// creating get route - means home/root url
app.get("/",(req,res)=>{  // request and response are 2 objects automatically provided by express
    res.send("welcome to express application");
});

// get students 
// read all students from student.json file and sent to client
app.get("/students",(req,res)=>{

    // read student.json file
    // utf - 8 is encoding
    const data = fs.readFileSync("student.json","utf-8");

    // when we read the file, node intially gets it as json text/string so it convert
    //json string into javascript array
    const students = JSON.parse(data);

    // send students to client
    res.send(students);
});


app.get("/students/:id",(req,res)=>{ // here id is a route parameter

    // read student data from json file
    const data = fs.readFileSync("student.json","utf-8");

    // convert json string into js array
    const students = JSON.parse(data);

    // get id from url and convert it to number
    const id = Number(req.params.id); // express takes the 2 from the url and stores it in req.params.id
    // it is a string,not a number so Number() converts it

    // find student whose id matches the url id
    const student = students.find((s)=>s.id == id);
    // here s represents one student at a time which it takes from students js array which we converted above
    // s.id access the students's id

    // if student doesnt exist
    if(!student){
        return res.send("student not found");
    }

    // send the found student as response
    res.send(student);
});


// post /students - used mainly to send/create new data
// add a new student
app.post("/students",(req,res)=>{
    const data = fs.readFileSync("student.json","utf-8");

    const students = JSON.parse(data);

    const newStudent = {
        id: students.length+1,
        ...req.body   // spread operator = it takes all the properties from req.body and adds thems to newStudent object

        // when client(browser) sends data to server, it is sent in the body of the reques. so we can access it using req.body
    };

    students.push(newStudent);

    // convert array to json and save in file.this is the reverse process of json.parse();

    fs.writeFileSync(
        "student.json",
        JSON.stringify(students)
    );

    // send response after successfully adding new studetns
    res.send("success");

});


// Start server
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000/");
});


app.put("/students/:id",(req,res)=>{
    const data = fs.readFileSync("student.json","utf-8");
    const students = JSON.parse(data);  // usable format (js array)

    const id = Number(req.params.id);
    // in express.js , req.paras.id is used to get a value from the url path parameter

    const index = students.findIndex((s)=>s.id === id);
    // findINdex() returns the index of the element in the array.. if not found, it return -1

    if(index===-1){  // if findIndex() cannot find anything it return -1
        return res.send("student not found");
    }

    // update the student data with the new data from the req.body
    students(index) ={
        ...students[index],
        ...req.body  // we are copying all the properties of the object using  ...(spread operator)
    };

    fs.writeFileSync(
        "student.json",
        JSON.stringify(students) // again converting back to json format to write in file
    );

    res.send("student updated successfully");
});



app.delete("/students/:id",(req,res)=>{
    const data = fs.readFileSync("student.json","utf-8");
    const students = JSON.parse(data);  // usable format (js array)

    const id = Number(req.params.id);
    // in express.js , req.paras.id is used to get a value from the url path parameter

    const index = students.findIndex((s)=>s.id === id);
    // findINdex() returns the index of the element in the array.. if not found, it return -1

    if(index===-1){  // if findIndex() cannot find anything it return -1
        return res.send("student not found");
    }

    students.splice(index,1);
    // means splice 1 student from the students array, starting at the positionn stored in index
    // array.slice(start,deletecount);

    fs.writeFileSync(
        "student.json",
        JSON.stringify(students) // again converting back to json format to write in file
    );

    res.send("student updated successfully");
});




