// Node.js

//Node REPL
// let n =5;
// for(let i=0;i<n;i++)
// {
//     console.log("Hello,",i);
// }

// console.log("Bye");

//Process object
// console.log(process.argv);

// let args = process.argv;
// for(let i=2;i<args.length;i++)
// {
//     console.log("Hello to",args[i]);
// }

//module.exports
// requiring Files

// const someVal = require("./math");
// console.log(someVal);

// const math = require("./math");
// console.log(math.sum(2,2));
// console.log(math.PI)
// console.log(math.mul(2,3));

// Requiring directories

// const info = require("./Fruits");

// console.log(info);

// Through Global Installation
// const figlet = require("figlet");

// figlet("Divyansh Gupta!!", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

//import 

// import {sum, PI} from "./math.js";

// console.log(sum(1,2));
// console.log(PI);

import { generate, count } from "random-words";

console.log(generate());
