const express = require("express");
const app = express();

//console.dir(app);

let port = 8080;

//Listening requests
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

// Handling Requests

//  Receiving Request , Sending Response

// app.use((req,res)=>{
//     //console.log(req);
//     console.log("Request Received");

//     // Sending Response in different formats

//     // res.send("This is a basic response.");

//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // });

//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

// Basic Routing 

app.get("/",(req,res)=>{
    res.send("Hello, You contacted root path");
});

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// });

// standard path : code not working 

// app.get("*",(req,res)=>{
//     res.send("This path does not exist.");
// });

// app.post("/",(req,res)=>{
//     res.send("You sent a post request to root");
// });

// Path Parameters

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username} </h1>`;
    res.send(htmlStr);
});

// Query Strings
 
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q)
    {
        res.send(`<h1>Nothing searched.</h1>`);
    }
    res.send(`<h1>Search results for query: ${q}</h1>`);
});