const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Hi this is a middleware");
    next();
});

app.get("/",(req,res)=> { 
    res.send("I am root route.");
});

app.get("/random",(req,res)=>{
    res.send(" I am random route");
})

app.listen(8080,()=>{
    console.log("App is listening on port 8080");
});