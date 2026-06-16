const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("Conection Sucessful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats= [
    {
        from : "Divyansh",
        to : "Jayesh",
        msg : "Investment toh property main hi karna chahiye",
        date : new Date(),
    },
    {
        from : "Ishika",
        to : "Asmi",
        msg : "Kahana Chahiye",
        date : new Date(),
    },
    {
        from : "Harshit",
        to : "Divyansh",
        msg : "Overthinking hoo rahi yrr",
        date : new Date(),
    },
    {
        from : "Kavin",
        to : "Jayesh",
        msg : "Hub Chalega",
        date : new Date(),
    },
    {
        from :"Jayesh",
        to : "Divyansh",
        msg : "4th sem ke baad ek Us trip toh banti hai",
        date : new Date(),
    },
    {
        from : "Divyansh",
        to : "Harshit ",
        msg : "Dc Aaja",
        date : new Date(),
    },
];

chat.insertMany(allChats)
.then((res) => {
    console.log(res);
});