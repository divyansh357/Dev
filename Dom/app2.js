// Js-9
// making changes in h1 tag
// console.dir(document);
// document.all[8].innerText = "Peter Parker";

// Selecting Elements 

// getElementById

// let imgObj= document.getElementById("mainImg");
// console.dir(imgObj);
// console.log(imgObj.src);
// console.log(imgObj.tagName);
// console.log(imgObj.id);

// // making changes
// imgObj.src = "assets/creation_1.png";
// imgObj.src = "assets/spiderman_img.png";

// Paragraph Object
// let parObj = document.getElementById("description");
// console.dir(parObj);

// Wrong Id
// console.dir(document.getElementById("aghfg"));

//getElementByClassName 

//let smallImages = document.getElementsByClassName("oldImg")
// for(let i=0;i<smallImages.length;i++)
// {
//     console.dir(smallImages[i]);
// }
// console.log(document.getElementsByClassName("oldImg")[0].src);

// for(let i=0;i<smallImages.length;i++)
// {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`Value of image no. ${i} is changed.`);
    
// }

// Empty Collection
//console.log(document.getElementsByClassName("abcd")); 

// getElementByTagName

// console.dir(document.getElementsByTagName("p"));

// document.getElementsByTagName("p")[1].innerText = "abc";

// Empty Collection
//console.dir(document.getElementsByTagName("span"));

// Query Selectors

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// Nesting
// Getting anchor tag inside div
// console.dir(document.querySelector("div a"));

// // Getting all values 

// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("p"));

// Setting Content in Objects

// let para = document.querySelector('p');
// console.dir(para);
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);

// para.innerText = "Hi, I am Peter Parker!";
// para.innerHTML = "Hi, I am <b>Peter Parker</b>!";

//let heading = document.querySelector('h1');
//heading.innerHTML = "<u>Spider Man</u>";
//heading.innerHTML = `<u>${heading.innerText}</u>`;

// Manipulating Attributes
// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id','spidermanImg');

// img.setAttribute('src','assets/creation_3.jpeg')

// img.setAttribute('class','images');

// Manipulating Style

// let img = document.querySelector('img');
// console.dir(img.style);

// let heading = document.querySelector('h1');
// heading.style.color = 'green';
// heading.style.backgroundColor = "yellow";

// let links = document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color = "purple";
// }

// for(let i=0;i<links.length;i++)
// {
//     links[i].style.color = "purple";
// }

// External Css

// let box = document.querySelector(".box");
// console.log(box.style);

// Using classList

// let img = document.querySelector('img');
// console.log(img.classList);

// let heading = document.querySelector('h1');

// heading.classList.add('green','underline');
// console.log(heading.classList);
// heading.classList.remove('green');

// console.log(heading.classList.contains('green'));
// console.log(heading.classList.contains('underline'));

// heading.classList.toggle('green');

// let box = document.querySelector(".box");
// box.classList.add("yellowBg");

// Navigation On Page 

// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);
// console.log(h4.children);

// let box = document.querySelector('.box');
// console.log(box.children);
// console.log(box.childElementCount);

// let ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);

// let img = document.querySelector('img');
// img.previousElementSibling.style.color = "green";

// Adding Elements on Page 

// let newPara = document.createElement('p');
// newPara.innerText = "Hi, I am a new Para.";
//console.dir(newPara);

// appendChild
//let body = document.querySelector('body');
//body.appendChild(newPara);

// let box = document.querySelector('.box');
// box.appendChild(newPara);

// let btn = document.createElement('button');
// btn.innerHTML = "Click Me!";
// box.appendChild(btn);

//append
// newPara.append("this is new Text");
// newPara.append(btn);
// newPara.append("do not click this button!");

// prepend
//box.prepend(newPara);

// insertAdjacent

//let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn);
// p.insertAdjacentElement('afterbegin',btn);
// p.insertAdjacentElement('beforeend',btn);
// p.insertAdjacentElement('afterend',btn);

// Removing Elements 
//box.removeChild(btn);
// btn.remove();
// p.remove();

// let body = document.querySelector('body');
// body.remove();


// Practice Question

// let body = document.querySelector('body');

// let para1 = document.createElement('p');
// para1.innerHTML = "Hey I'm red!";
// body.append(para1);
// para1.classList.add('red');
 
// let h3 = document.createElement('h3');
// h3.innerHTML = "I'm a blue h3";
// body.append(h3);
// h3.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');
// h1.innerHTML = "I'm in a div";
// para2.innerHTML = "ME TOO!";
// div.append(h1);
// div.append(para2);
// div.classList.add('box');

// body.append(div);

// Js-9 Sheet

//q1
// let body = document.querySelector('body');
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerHTML = "Click me";
// body.append(input);
// body.append(btn);

//q2
// input.setAttribute("placeholder","username");
// btn.setAttribute("id","btn");

//q3
// let button = document.querySelector("#btn");
// button.classList.add("btn");

//q4
// let body = document.querySelector('body');
// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";
// body.append(h1);
// h1.style.color = "purple";

//q5
// let body = document.querySelector('body');
// let para = document.createElement('p');
// para.innerHTML = "Apna College <b>Delta</b> Practice";
// body.append(para);


// Js-10

// Dom Events 
// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     alert("Button was clicked.");
// };

// function sayHello(){
//     alert("Hello");
// };
//btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for(btn of btns)
// {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function (){
//         console.log("You entered a button.");
//     }
// }

// Event Listeners 

// function sayName() {
//     alert("Divyansh Gupta");
// }

// for(btn of btns)
//     {
//         btn.onclick = sayHello;
//         btn.onclick = sayName;
//     }

// for(btn of btns)
// {
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("You double clicked");    
//     });
// }

// Random Color Generator

// let btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     let h3 = document.querySelector('h3');
//     let randomColor = getrandomColor();
//     h3.innerHTML = randomColor;
//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomColor;
//     console.log("Color Updated");
    
// });

// function getrandomColor(){
//     let red = Math.floor(Math.random()*256);
//     let green = Math.floor(Math.random()*256);
//     let blue = Math.floor(Math.random()*256);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

//Event Listeners for Elements 
// let p = document.querySelector('p');
// p.addEventListener('click',function(){
//     console.log("Paragraph was clicked.")
// });

// let div = document.querySelector('div');
// div.addEventListener('mouseenter',function(){
//     console.log("Mouse entered the div")
// });

// this in Event Listeners

//let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     console.dir(this);
//     this.style.backgroundColor = "pink";
// });

// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "pink";
    
// }
 
// btn.addEventListener('click',changeColor);
// h1.addEventListener('click',changeColor);
// h3.addEventListener('click',changeColor);
// p.addEventListener('click',changeColor);

// Keyboard Events

//let btn = document.querySelector('button');

// default event argument in addEventListener
// btn.addEventListener('click',function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// btn.addEventListener('dblclick',function(event){
//     console.log(event);
//     console.log("button clicked");
// });

//let inp = document.querySelector('input');

// inp.addEventListener("keydown",function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("Key was pressed.");
// });

// inp.addEventListener("keyup",function(){
//     console.log("Key was released.");
// });

//game 
//let inp = document.querySelector('input');

// inp.addEventListener("keydown",function(event){
//     console.log(event.code);
//     if(event.code=="KeyW")
//     {
//         console.log("Character moves upward");
//     }
//     else if(event.code=="KeyS")
//     {
//         console.log("Character moves downward");  
//     }
//     else if(event.code=="KeyA")
//     {
//         console.log("Character moves left");  
//     }
//     else if(event.code=="KeyD")
//     {
//         console.log("Character moves right");  
//     }
// });

// Form Events
//let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault(); // to prevent the default task
//     alert("Form Submitted.");
// });

// Extracting Form data

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp = document.querySelector('input');
//     console.dir(inp);
//     console.log(inp.value);
// });

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi, ${user.value} your password is set to ${pass.value}`);
// });

//acessing values through elements of form 
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi, ${user.value} your password is set to ${pass.value}`);
// });

// More Events 
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });

// //change event
// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("change event.");
//     console.log("Final value:",this.value);
  
// });

// user.addEventListener("input",function(){
//     console.log("Input event.");
//     console.log("Final value:",this.value);
  
// });

// Text Editor 
// let inp = document.querySelector("input");
// let p = document.querySelector("p");
// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     p.innerHTML = inp.value;
// });

// Js-10 Sheet

//q1
// let inp = document.querySelector("input");
// inp.addEventListener("mouseout",function(){
//     console.log("Mouse is out of input");
// });
// inp.addEventListener("keypress",function(){
//     console.log("Key is pressed");
// });
// document.addEventListener("scroll",function(){
//     console.log("Scroll is used");
// });
// window.addEventListener("load",function(){
//     console.log("Page has been fully loaded");
// });

//q2
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.style.color = "green";
// });

//q3
// let inp = document.querySelector("input");
// let h2 = document.querySelector("h2");
// inp.addEventListener("input",function(event){
//     const input = event.target;
//     const value = input.value;
//     const newvalue = value.replace(/[^a-zA-Z ]/g, "");
//     input.value = newvalue 
//     h2.innerHTML = input.value;
// });

// Java Script- Mini Project

// Event Bubbling

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("Div was clicked");
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

// Building To do with dom

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let list = document.querySelector("ul");
// btn.addEventListener("click",function()
// {
//     let item = document.createElement('li');
//     let butn = document.createElement("button");
//     item.innerHTML = inp.value;
//     butn.innerHTML = "delete";
//     butn.classList.add("delete");
//     item.appendChild(butn);
//     list.appendChild(item);
//     inp.value = "";
// });

// let deleteBtns = document.querySelectorAll(".delete");
// for(delBtn of deleteBtns)
// {
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();  
//     });
// }

// Event Delegation

// list.addEventListener("click",function(event){
//     if(event.target.nodeName== "BUTTON")
//     {
//         let listItem = event.target.parentElement; 
//         listItem.remove(); 
//         console.log("Deleted");
//     }
// });

// Simon Say Game

// // Creating Variables 
// let gameSeq = [];
// let userSeq = [];
// let started = false;
// let lvl = 0;
// let highestScore = 0;
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let btns = ["red","yellow","green","purple"];

// //Start Game 
// document.addEventListener("keypress",function(){
//     if(started==false)
//     {
//         console.log("Game Started");
//         started=true;
//         levelUP();
//     }
// });


// // Level Up 
// function levelUP(){
//     userSeq = [];
//     lvl++;
//     h3.innerText = `Level ${lvl}`;
//     let randIdx = Math.floor(Math.random()*4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(`Game: ${gameSeq}`);
//     btnFlash(randBtn);
// }

// // Button Falsh
// function btnFlash(btn)
// {
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// } 

// // BtnPress 
// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns)
// {
//     btn.addEventListener("click",btnPress);
// }

// function btnPress(){
//     let btn = this;
//     btnFlash(btn);
//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     console.log(`User: ${userSeq}`);
//     checkAns(userSeq.length-1);
// }

// //check Answer
// function checkAns(idx)
// {
//     // console.log(`Current level: ${lvl}`);
//     if(userSeq[idx]==gameSeq[idx])
//     {
//         if(userSeq.length==gameSeq.length){
//             setTimeout(levelUP,1000);
//         }
//     }
//     else
//     {
//         h3.innerHTML =  `Game Over! Your score was <b>${lvl}</b> <br> Press any key to start.`;
//         if(highestScore<lvl)
//         {
//             highestScore = lvl;
//         }
//         h2.innerHTML = `Highest Score : ${highestScore}`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor = "white";
//         },150);
//         reset();
//     }
// }

// function reset(){
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     lvl = 0; 
// }
