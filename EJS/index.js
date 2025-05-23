const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("Hello");
});

// passing data into ejs

app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ diceval });
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
    
});

// Instagram EJS

// app.get("/ig/:username",(req,res)=>{
//     const followers = ["adam","harshit","jayesh","krishna"];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username,followers});
// });

// Insta ejs with data

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    //console.log(instaData);
    const data = instaData[username];
    if(data)
    {
        res.render("instagram.ejs",{ data });
    }
    else
    {
        res.render("error.ejs");
    }
});

