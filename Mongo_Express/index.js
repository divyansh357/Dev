const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require('method-override');

let port = 8080;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("Conection Sucessful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new chat ({
//     from : "Divyansh",
//     to : "Jayesh",
//     msg : "150 Rs bhej",
//     date : new Date(),
// });

// chat1.save()
// .then((res)=>{
//     console.log(res);
// });


app.get("/",(req,res)=>{
    res.send(" Root is working");
});

// Index Route
app.get("/chats",async (req,res)=>{
    let allChat = await chat.find();
    res.render("index.ejs",{allChat});
});

// New Route

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

// Create 
app.post("/chats",(req,res)=>{
    let {from,to,msg} = req.body;
    let newChat = new chat({
        from : from,
        msg: msg,
        to : to,
        date: new Date(),
    });
    newChat.save()
    .then((res)=>{
       console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");
});

// Edit Route

app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let Curr_chat = await chat.findById(id);
    res.render("edit.ejs",{Curr_chat});
});

// Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params; 
    let {msg} = req.body;
    let updated_chat= await chat.findByIdAndUpdate(id,{msg: msg , updated_at: new Date()},{runValidators:true},{new:true});
    console.log(updated_chat);
    res.redirect("/chats");
});

// Destroy Route
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deleted_chat= await chat.findByIdAndDelete(id);
    console.log(deleted_chat);
    res.redirect("/chats"); 
});

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
});

