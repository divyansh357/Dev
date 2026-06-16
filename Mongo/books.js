// Schema Validations

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/amazon');

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author:{
        type: String,
    },
    price:{
        type : Number,
        min: [1,"Price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type : String,
        enum: ["Fiction","Non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: "200",
//     category: "Fiction",
//     genre: ["comics","superhero","fiction"]
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
// });

// Schema Validation in Updates and erors

Book.findByIdAndUpdate("68248ecaedc363a410674348",{price: -500},{runValidators: true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});