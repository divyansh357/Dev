// Call Stack
// function hello(){
//     console.log("Inside hello function");
//     console.log("Hello");
// }
// function demo()
// {
//     console.log("Calling hello function");
//     hello();
// }
// console.log("calling demo fxn");
// demo();
// console.log("Done, bye!");

//Visualizing the Call Stack

// function one()
// {
//     return 1;
// }
// function two()
// {
//     return one() + one();
// }
// function three()
// {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

//Breakpoints: Debugging the code -> Sources -> Braekpoints, Call Stack

// Js is Single Threaded
  
// setTimeout(()=>{
//     console.log("Divyansh Gupta");
// },2000);

// console.log("Hello...");

// Callback Hell

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange)
// {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("Yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

// Promises : Used in callback hell

// function saveToDb(data,success,failure)
// {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4)
//     {
//         success();
//     }
//     else
//     {
//         failure();
//     }
// }

// saveToDb("Divyansh Gupta",
//     ()=>{
//     console.log("Success: data was saved.");
//     saveToDb("Harshit Goud",
//     ()=>{
//         console.log("Succcess2 : data was saved.");
//         saveToDb("Jayesh Malviya",
//         ()=>{
//             console.log("Success3 : data was saved.");
//         },
//         ()=>{
//             console.log("Failure3 : weak connection");
//         });
//         },
//     ()=>
//     {
//         console.log("Failure2 : weak connection.");
//     }
//     );
//     },
//     ()=>{
//     console.log("Failure: slow internet speed.");
// });

// Optimising above problem with promises

// function saveToDb(data){
//     return new Promise((resolve,reject) =>
//     {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4)
//         {
//             resolve("Success : data was saved.");
//         }
//         else
//         {
//             reject("Failure : weak connection.");
//         }
//     });
// }

// console.log(saveToDb("Divyansh Gupta"));

// then and catch

// let request = saveToDb("Divyansh Gupta");
// request
// .then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
    
// })
// .catch(() => {
//     console.log("Promise was rejected");
//     console.log(request);
// });

// Comapact version

// saveToDb("Divyansh Gupta")
// .then(()=>{
//     console.log("Promise was resolved");
// })
// .catch(() => {
//     console.log("Promise was rejected");
// });

// Promise Chaining

// saveToDb("Divyansh Gupta")
// .then(()=>{
//     console.log("data1 saved.");
//     return saveToDb("Jayesh Malviya");
// })
// .then(()=>{
//     console.log("data2 saved.");
//     return saveToDb("Harshit Goud");
// })
// .then(()=>{
//     console.log("data3 saved.");
// })
// .catch(()=>{
//     console.log("promise was rejected.");
// });

// result and errors in promises

// saveToDb("Divyansh Gupta")
// .then((result)=>{
//     console.log("data1 saved.");
//     console.log("Result of promise:",result);
//     return saveToDb("Jayesh Malviya");
// })
// .then((result)=>{
//     console.log("data2 saved.");
//     console.log("Result of promise:",result);
//     return saveToDb("Harshit Goud");
// })
// .then((result)=>{
//     console.log("data3 saved.");
//     console.log("Result of promise:",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected.");
//     console.log("Error of promise:",error);
// });

// Applying Promises to Color Callback Hell

// let h1 = document.querySelector("h1");

// function changeColor(color,delay)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("Color Changed.")
//         },delay);
//     });
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("red was completed.");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange was completed.");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green was completed.");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue was completed.");
// });

// Js-12

// Async Functions

// async keyword
// async function greet()
// {
//     throw "404: Page not found!"; // throws an error
//     return "hello world"; // returns a promise
// }
// //console.log(greet());

// greet()
// .then((result)=>{
//     console.log("Promise was resolved ");
//     console.log("Result was: ",result);
// })
// .catch((err)=>{
//     console.log("Promise was rejected with error:",err);
// });

// let demo = async () => {
//     return 5;
// }
// console.log(demo());

// await keyword

// function numGen()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// } 

// async function demo() {
//     await numGen();    
//     await numGen();    
//     await numGen();   
//     numGen();
// }
// console.log(demo());

// changeColor with await

// let h1 = document.querySelector("h1");

// function changeColor(color,delay)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             console.log(`Color changed to: ${color}`);
//             resolve("Color Changed!");
//         },delay);
//     });
// }

// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     changeColor("blue",1000);
// }
// console.log(demo());

// Handling Rejections

// let h1 = document.querySelector("h1");

// function changeColor(color,delay)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1;
//             if(num>3)
//             {
//                 reject("Promise Rejected");
//             }
//             h1.style.color = color;
//             console.log(`Color changed to: ${color}`);
//             resolve("Color Changed!");
//         },delay);
//     });
// }

// async function demo() {
//     try{
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//     }
//     catch(err)
//     {
//         console.log("Error was caught");
//         console.log(err);
//     }

//     let newNum = 3;
//     console.log("New number:",newNum);
// }
// console.log(demo());

// What is an API

// Accessing Data from JSON

//JSON.parse method

// let jsonRes = '{"fact":"Purring does not always indicate that a cat is happy. Cats will also purr loudly when they are distressed or in pain.","length":117}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);

// // JSON.stringify

// let student = {
//     name : "Divyansh",
//     sgpa : 7.5,
// }

// let jsonData = JSON.stringify(student);
// console.log(jsonData);

//Adding info in urls

// Harry Potter API

// https://api.potterdb.com/

// Routes
// https://api.potterdb.com/v1/movies/bb71cc0d-32b7-4a05-876b-4774064a5cec

// University API

// http://universities.hipolabs.com/
// http://universities.hipolabs.com/search?name=US

// Our First Request
// using fetch
// let url = "https://catfact.ninja/fact";

// fetch(url) // returns a promise
// .then((res)=>{
//     console.log(res); 
    
//     return res.json(); // makes data readable and returns it as promise
// })
// .then((data1)=>{
//     console.log("data1:",data1.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2:",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error-",err);
// })

// Using fetch with async and await

// let url = "https://catfact.ninja/fact";

// async function getFacts()
// {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(err)
//     {
//         console.log("Error:",err);
//     }
//    console.log("Hellooo...");
// }

// getFacts();

// Js-13

// Axios Library

// let url = "https://catfact.ninja/fact";
// async function getFacts()
// {
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.fact);    
//     }
//     catch(err)
//     {
//         console.log("Error:",err);
//     }
// }
// getFacts();

// let para = document.querySelector("#fact");
// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     para.innerHTML = fact;
// })

// let url = "https://catfact.ninja/fact";
// async function getFacts()
// {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;    
//     }
//     catch(err)
//     {
//         console.log("Error:",err);
//         return "No fact found";
//     }
// }

// Dog Pictures API

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// let img = document.querySelector("#images");
// btn.addEventListener("click",async()=>{
//     let source = await getImg();
//     img.setAttribute("src",source);
// })

// async function getImg() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(err)
//     {
//         console.log("Error:",err);
//         return "/"
//     }
// }

// Sending Headers with API request

// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// getJokes();

// Updating Query Strings

// let url = "http://universities.hipolabs.com/search?country=";
// let para = document.querySelector("#result");
// let btn = document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let country = document.querySelector("input").value;
//     let clgs = await getColleges(country);
//     console.log(clgs);
//     show(clgs);
// });

// function show(clgs)
// {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(clg of clgs)
//     {
//         console.log(clg.name);
//         let li = document.createElement("li");
//         li.innerText = clg.name;
//         list.appendChild(li);
//     }
// }
// async function getColleges(country)
// {
//     try{
//         let res = await axios.get(url+country);
//         //console.log(res.data);
//         return res.data;
//     }
//     catch(err)
//     {
//         console.log("error",err);
//         return [];
//     }
// }


// OOPs in Js 

// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayHello = ()=>{
//     console.log("Hello!, I am arr");
// };

// arr2.sayHello = ()=>{
//     console.log("Hello!, I am arr 2");
// };

// arr1.__proto__.push = (n)=>{
//     console.log("Pushing Number: ",n);
// }

// console.log(arr1.push(3));

// // Different copy for different array even though same method
// console.log(arr1.sayHello === arr2.sayHello);

// // Same copy for all strings 
// console.log("abc".toLowerCase === "xyz".toLowerCase);

// Factory Functions

// function personMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return person;
// }

// let p1 = personMaker("Divyansh",20); // copy
// console.log(p1);
// p1.talk();

// let p2 = personMaker("Harshit",20); // copy
// console.log(p2);
// p2.talk();

// console.log(p1.talk === p2.talk); // different copies of talk for all persons

// Constructors : don't return anything an starts with capital letter

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi my name is ${this.name}`);    
// }

// let p1 = new Person("Divyansh",20);
// let p2 = new Person("Harshit",20);

// p1.talk();

// console.log(p1.talk === p2.talk ); // both shares the same talk from prototype without making separate copies

// Classes

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk()
//     {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Divyansh",20);
// let p2 = new Person("Harshit",20);

// console.log(p1);

// p1.talk();
// console.log(p1.talk === p2.talk ); // shares same copy don't make separate copies

// Inheritance

// class Person{
//     constructor(name,age){
//         console.log("Person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// class Student extends Person {
//     constructor(name,age,marks){
//         console.log("Student class constructor");
//         super(name,age); // parent class constructor is being called
//         this.marks = marks;
//     }
// }

// let stu1 = new Student("adam",25,95);
// console.log(stu1);


// class Teacher extends Person {
//     constructor(name,age,subject){
//         super(name,age); // parent class constructor is being called
//         console.log("Teacher class constructor");
//         this.subject = subject;
//     }
// }

// let t1 = new Teacher("eve",40,"Data Structure");
// console.log(t1);

// Example

// class Mamals{
//     constructor(name,type)
//     {
//         this.name = name;
//         this.type = "warm-blooded";
//     }

//     eat(){
//         console.log("I, am eating");
//     }
// }

// class Dog extends Mamals{
//     constructor(name){
//         super(name);
//     }
//     bark(){
//         console.log("Wooff..");
//     }
//     eat(){
//         console.log("Dog is eating");   
//     }
// }

// class Cat extends Mamals{
//     constructor(name)
//     {
//         super(name);
//     }
//     meow(){
//         console.log("Meow..");
//     }
// }

// let woffie = new Dog("woffie");

// let meow = new Cat("meow");