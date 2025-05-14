// Installation and Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Models

const User = mongoose.model("User",userSchema);

//Inserting in Mongoose
// Creating User
// const user2 = new User({
//     name: "Jayesh",
//     email: "jayesh@gmail.com",
//     age: 20,
// });

// user2.save()   // Save in db
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Insert Multiple

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:40},
//     {name:"Peter",email:"peter@gmail.com",age:45},
//     {name:"Bruce",email:"bruce@gmail.com",age:50}
// ])
// .then((res)=>{
//     console.log(res);
// });

// Find

// User.find({age:{$gt: 44}})
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne({age:{$gt: 44}})
// .then((res)=>{
//     console.log(res.name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findById("6823ebf993caec6c22ee9284")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Update

// User.updateOne({name:"Bruce"},{age:49})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:{$gte: 45}},{age:55})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"Bruce"},{age:42},{new: true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndUpdate({_id: "6823ebf993caec6c22ee9284"},{age:48},{new: true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Delete


