//Js-2

// console.log("Hello World!");
// console.log("Divyansh Here!");
// let a =10;
// let b = 5;
// console.log("Sum is :",a+b);

//Template Literals : used to add embedded expressions in a string

// let pencilPrice = 10;
// let earsersPrice = 5;
// //let output = "The total price is : "+ (pencilPrice + earsersPrice)+ " Rupess";
// //Template Literals
// // ``= backticks are used to write the string in a better way and we can use the variables in the string by using ${variableName}
// let output = `The total price is : ${pencilPrice + earsersPrice} Rupess`;
// console.log(output);

//Aritmetic Operators

// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(++a);

//Comparison Operator

// let age = 19;
// console.log(age==18);

// let num = 5;
// let str = '5';
// console.log(num==str);// Compares value, not type
// console.log(num===str);// Compares type and value
// console.log(0==' ');
// console.log(0===' ');
// console.log(0==false);
// console.log(0===false); // there is a true or false associated with every value
// console.log(null==undefined);
// console.log(null===undefined);

//Comparison for non-numbers = Unicode

// console.log('a'<'A');
// console.log('A'<'B');
// console.log('*'<'&');

//Conditional Statements

//If statement

// let age =23;
// if(age>=18)
// {
//     console.log("You can vote");
//     console.log("You can drive");
//     let a =5;
//     console.log(5*a)
// }
// if(age<18)
// {
//     console.log("You cannot vote.")
// }
// if(age>=20)
// {
//     console.log("You are in your 20's")
// }

// let firstName = "Divyansh";
// if(firstName=="Divyansh")
// {
//     console.log(`Welcome ${firstName}`)
// }

//Traffic light

// let color = "green";

// if(color=="red")
// {
//     console.log("Wait! Light color if Red");
// }
// else if(color=="yellow")
// {
//     console.log("Slow down! Light color is Yellow");
// }
// else if(color=="green")
// {
//     console.log("Go! Light color is Green")
// }
// else
// {
//     console.log("Traffic light is broken");
// }

//Else- if

//Grading System

// let marks = 33;

// if(marks>=90)
// {
//     console.log("A grade");
// }
// else if(marks>=80)
// {
//     console.log("B grade");
// }
// else if(marks>=70)
// {
//     console.log("C grade");
// }
// else if(marks>=33)
// {
//     console.log("D grade");
// }
// else if(marks<33)
// {
//     console.log("You fail! Better luck next time")
// }

//Popcorn Prices 

// let size = "M";
// let price = null;

// if(size=="XL")
// {
//     price = 250;
//     console.log(`You bill amount is ${price} rupees.`);
// }
// else if(size=="L")
// {
//     price = 200;
//     console.log(`Your bill amount is ${price} rupees.`);
// }
// else if(size=="M")
// {
//     price = 100;
//     console.log(`Your bill amount is ${price} rupees.`);
// }
// else if(size=="S")
// {
//     price = 50;
//     console.log(`Your bill amount is ${price} rupees.`);
// }
// else 
// {
//     console.log("You have chosen invalid size.")
// }

//Nested if-else

// let marks = 80;
// if(marks>=33)
// {
//     console.log("Pass!");
//     if(marks>=90)
//     {
//         console.log("Grade: A");
//     }
//     else if(marks>=80)
//     {
//         console.log("Grade: B")
//     }
// }
// else
// {
//     console.log("Better luck next time.")
// }

// Logical Operators

// let marks = 33;

// if(marks>=33 && marks>=80)
// {
//     console.log("Pass!");
//     console.log("Grade: A");
// }
// if((marks>=33) || marks>=70)
// {
//     console.log("Pass!");
//     console.log("Grade: B");
// }

// console.log(!(5<3)) // not  reverse the final answer

//Combining multiple logical operators

// let marks = 32;
// if((marks>33 && marks<=80) || !false)
// {
//     console.log("Pass!");
// }

// Practice Questions

//q1

// let str = "ample";
// if((str[0]==="a"||str[0]=="A")&& str.length>3)
// {
//     console.log("Good String.");
// }
// else
// {
//     console.log("Not a good string.");
// }

//q2

// let num = 12;
// if((num%3===0)&&((num+1===15)||(num-1===11)))
// {
//     console.log("Safe");
// }
// else
// {
//     console.log("Unsafe");
// }

//Truthy and falsy

// if(null)
// {
//     console.log("It has true value.")
// }
// else
// {
//     console.log("It has false value");
// }

// let str = "";
// if(str)
// {
//     console.log("String is not empty.")
// }
// else
// {
//     console.log("String is empty.");
// }

// let num = 0;
// if(num)
// {
//     console.log("Number is not equal to zero.")
// }
// else
// {
//     console.log("Number is equal to zero.");
// }    

// Switch Statement

// let color = "green";

// switch(color)
// {
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow" :
//         console.log("Slow down"); 
//         break;   
//     case "green" :
//         console.log("Go"); 
//         break;       
//     default:
//         console.log("Broken Light")    
// }

// Question 

// let day = 4;

// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;            
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Inavlid day.");    
// }

// Alerts and Prompts

// alert : it pops up when we refresh the page
//alert("This is a simple alert!");

// different messages

// console.error("This is an error message.");

// console.warn("This is a warn message.");

//Prompts : Inputs in js

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let name1 = firstName + " " + lastName;
// let str = "Welcome "+ name1 + " !";
// alert(str);


//Practice

//q1

// let num = prompt("Enter a number:");
// if(num%10===0)
// {
//     alert("good");
// }
// else
// {
//     alert("bad");
// }

//q2

// let name1 = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name1} is ${age} years old.`);

//q3

// let quarter = 4;

// switch(quarter)
// {
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Invalid quarter.");    
// }

//q4

// let str = "apples";
// if((str[0]=="a"||str[0]=="A") && str.length>5)
// {
//     console.log("Golden String");
// }
// else
// {
//     console.log("Not a golden string.");
// }

//q5

// let a = 20;
// let b = 19;
// let c = 18;

// if(a>b)
// {
//     if(a>c)
//     {
//         console.log(`${a} is largest.`);
//     }
//     else
//     {
//         console.log(`${c} is largest.`);
//     }
// }
// else
// {
//     if(b>c)
//     {
//         console.log(`${b} is largest.`);
//     }
//     else
//     {
//         console.log(`${c} is largest`);
//     }
// }


//bonus


// Conflicted Solution
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");
// if(num1[num1.length-1]==num2[num2.length-1])
// {
//     console.log(num1[num1.length-1]);
//     console.log(num2[num2.length-1]);
//     console.log("Same");
// }
// else
// {
//     console.log(num1[num1.length-1]);
//     console.log(num2[num2.length-1]);
//     console.log("Not same");
// }


//Solution

// let num1 = 100;
// let  num2 = 20030;

// if((num1%10)==(num2%10))
// {
//     console.log("Numbers have the same last digit which is:",num1%10);
// }
// else
// {
//     console.log("Numbers don't have the same last digit.");
// }


//Js-3
//String Methods

//1.trim method

// let msg = "  hello  ";
// console.log(msg.trim());

// let password = prompt("Set your password:");
// let newPass = password.trim();
// console.log(password);
// console.log(newPass);

//Strings are immutable in js

// let msg = "      divyansh   ";
// let str = msg.trim();
// console.log(str);
// console.log(msg); // No change in original string

// let name1 = "Divyansh";

// //2. toUpperCase method
// console.log(name1.toUpperCase());

// //3. toLowerCase method
// console.log(name1.toLowerCase());

// 4. indexOf method

// let str = "ILoveCoding";
// console.log(str.indexOf("Love")); // returns the index of the first occurence of the substring
// console.log(str.indexOf("Coding"));
// console.log(str.indexOf("o",4)); // returns the index of the substring after the given index

// Method chaining

// let msg = "    hello     ";

// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);

//It can be done in one line with method chaining

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

//5.slice method

// let msg = "Divyansh Gupta";
// console.log(msg.slice(5,8));
// console.log(msg.slice(5)); // if we give only one argument then it will slice from the given index to the end of the string

// //pasing negative index
// console.log(msg.slice(-1)); // it will slice from the end of the string

//6.replace method

// let msg = "I Love Coding";

// console.log(msg.replace("Love","like")); // replaces the first occurence of the substring
// console.log(msg.replace("o","x")); // replaces the first occurence of the character

//7.repeat method

// let fruit = "Mango";
// console.log(fruit.repeat(5)); // it will repeat the string 5 times

//Quetions

//q1
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

//q3

// let str = "ApnaCollege";

// let newStr = str.slice(str.indexOf("College")).replace("l","t").replace("l","t");
// console.log(newStr);

//Array DS

// let students = ["Divyansh","Rahul","Rohit","Rajat"];
// console.log(students);

// console.log(typeof students);

//mixed array
//let arr = ["Divyansh",20,true,5.5];
// console.log(arr);
// console.log(arr.length);

// let newArr = [];
// console.log(newArr);
// console.log(newArr.length);

// console.log([0,1].length);

//Accessing elements of an array

// console.log(arr[0][0]);
// console.log(arr[0].length);

//Arrays are mutable

// let fruits = ["Apple","Banana","Mango"];
// fruits[0] = "Pineapple";
// console.log(fruits);
// fruits[10] = "Orange"; // it will create empty slots in the array
// console.log(fruits);
// console.log(fruits[5]);

//Array Methods

//1. push method : it adds the element at the end of the array
// let cars = ["BMW","Audi","Mercedes","Toyota"];
// console.log(cars.push("Ford")); // adds the element at the end of the array
// console.log(cars);

//2. pop method : it removes the last element of the array
// console.log(cars.pop()); // removes the last element of the array
// console.log(cars);

//3. unshift method : it adds the element at the start of the array
// console.log(cars.unshift("Ford")); // adds the first element of the array
// console.log(cars);

//4. shift method : it removes the first element of the array
// console.log(cars.shift()); // removes the first element of the array
// console.log(cars);

// //example

// let followers = ["Divyansh","Rahul","Rohit","Rajat"];

// let blocked = followers.shift();

// console.log(followers);
// console.log(blocked);    

//question

// let months = ["january","july","march","august"];
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);

//5.indexOf method : it returns the index of the element

// let colors = ["red","blue","green"];
// console.log(colors.indexOf("blue")); // returns the index of the element
// console.log(colors.indexOf("yellow")); // returns -1 if the element is not present in the array
// console.log(colors.indexOf("Green"));


// //6. includes method : it returns true or false
// console.log(colors.includes("blue")); // returns true if the element is present in the array
// console.log(colors.includes("yellow")); // returns false if the element is not present in the array

// //7. concat method : it returns the new array
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1);// no change in the original array

// //8. reverse method : it og reverses the array
// console.log(arr3.reverse());
// console.log(arr3); // original array is also reversed

// 9. slice method : it returns the copy of the array

// let cars = ["BMW","Audi","Mercedes","Toyota"];

// console.log(cars.slice()); // it will return the copy of the array
// console.log(cars.slice(1)); // it will return the array from the given index to the end of the array  
// console.log(cars.slice(1,3)); // it will return the array from the given start index to the end index-1
// console.log(cars.slice(cars.length-1)); // it will return the last element of the array
// console.log(cars.slice(5));  // it will return an empty array
// console.log(cars.slice(-2)); // it will return the last two elements of the array
// console.log(cars.slice(-5)); 

//10. splice method : makes changes in the original array

// let colors = ["red","yellow","blue","orange","pink","white"];

// console.log(colors.splice(4)); // it will remove the elements from the given index to the end of the array
// console.log(colors);
// console.log(colors.splice(1,2)); // it will remove the elements from the given start to count of elements
// console.log(colors);
// colors.push("blue");
// colors.push("pink");
// console.log(colors);
// colors.splice((1,2));
// console.log(colors);
// colors.splice(0,0,"green","purple");
// console.log(colors);
// colors.splice(1,0,"black"); // adds the element at the given index
// console.log(colors);
// colors.splice(1,1,"blue"); // replaces the element at the given index
// console.log(colors);

//10. sort method : it sorts the array

// let cars = ["BMW","Audi","Mercedes","Toyota"];
// console.log(cars.sort());
 
// let chars = ['q','a','m','b'];
// console.log(chars.sort());

// //But it doesn't work for numbers as it converts the numbers into strings and then sorts them 

// let nums = [10,5,20,15];
// console.log(nums.sort());

//Questions

//q1 

// let months = ["january","july","march","august"];
// months.splice(0,2,"july","june");
// console.log(months);

//q2

// let tech = ['c',"c++","html","javascript","python","java","c#","sql"];
// console.log(tech.reverse().indexOf("javascript"));

//Array References: arrays are compared by reference not by value

//This condition will always return 'false' since JavaScript compares objects by reference, not value
// console.log([1]===[1]); // false
// console.log([]===[]);  // false

// let arr = ['a','b'];
// let arrCopy = arr; // it will copy the reference of the array
// console.log(arrCopy);
// arrCopy.push('c');
// console.log(arr);
// console.log(arrCopy);

// console.log(arr===arrCopy); // true

// let arr1 = ['a','b','c'];
// console.log(arr1===arr); // both are different as references are different although the elements are same
// arr1.pop();
// console.log(arr);

// Constant Arrays

// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr = [4,5,6]; // it will give an error : Assignment to constant variable

// Nested Arrays

// let arr = [[1,2],[3,4],[5,6]];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0].length);
// console.log(arr.length);
// console.log(arr[1][1]);

//Questions

// let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(game);
// game[0][1] = 'O';

//Sheet

//q1

// let arr = [7,9,0,-2];
// let n = prompt("Enter the number:");
// console.log(arr.slice(0,n));

//q2

// let arr = [7,9,0,-2];
// let n = prompt("Enter the number:");
// console.log(arr.slice(-n));

//q3

// let str = " "; 
// if(str.length==0)
// {
//     console.log("Empty");
// }
// else
// {
//     console.log("Not Empty");
// }

//q4

// let str = "ApNaCoLlEgE";
// let idx = 3;
// if(str[idx]==str[idx].toLowerCase())
// {
//     console.log("Character is lowercase");
// }
// else
// {
//     console.log("Character is uppercase");
// }

//q5

// let str = prompt("Enter a string:");
// let newStr = str.trim();
// console.log(newStr);

//q6
// let arr = ["hello",'a',23,64,99,-6];
// let item = 64;
// if(arr.includes(item))
// {
//     console.log("Element present in the array.");
// }
// else
// {
//     console.log("Element not present in the array.");
// }

//  Js-4
//Loops

//1. for loop

// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }

// for(let i=10;i>=1;i=i-3)
// {
//     console.log(i);
// }

//Odd numbers from 1 to 15
// for(let i=1;i<=15;i+=2)
// {
//     console.log(i);
// }

// for(let i=15;i>=1;i-=2)
// {
//     console.log(i);
// }

// Even numbers from 2 to 10

// for(let i=2;i<=10;i+=2)
// {
//     console.log(i);
// }    

// for(let i=10;i>=2;i-=2)
// {
//     console.log(i);
// }

// Infinite loop

// for(let i=1; ; i++)
// {
//     console.log(i);
// }

// Multiplication table

// for(let i=5;i<=50;i+=5)
// {
//     console.log(i);
// }

// let num = prompt("Enter a number:");
// num = parseInt(num); // converting integer to number 
// for(let i=num;i<=num*10;i+=num)
// {
//     console.log(i);
// }

// Nested for loop

// for(let i=1;i<=3;i++)
// {
//     console.log(`Outer loop:${i}`);
//     for(let j=1;j<=3;j++)
//     {
//         console.log(j);
//     }
// }

// 2. while loop

// let i =1;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }

// // backwards

// let j = 5;
// while(j>=1)
// {
//     console.log(j);
//     j--;
// }

// let k=0;
// while(k<=20)
// {
//     console.log(k);
//     k+=2;
// }

// Favorite Movie

// const movie = "The Dark Knight";
// let guess = prompt("Guess my favorite movie:");

// while((guess!="The Dark Knight")&&(guess!="quit"))
// {
//     guess = prompt("Wrong guess. Please try again:");
// }

// if(guess=="The Dark Knight")
// {
//     console.log("You guessed it right!");
// }
// else
// {
//     console.log("You quit the game.");
// }

//break keyword

// let i =1;
// while(i<=5)
// {
    
//     if(i==3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// Customize favorite movie with break

// const favMovie = "Avengers";
// let guess = prompt("Guess my favorite movie:");
// while(guess!="Avengers")
// {
//     if(guess=="quit")
//         {
//             console.log("You quit the game.");
//             break;
//         }
//     guess = prompt("Wrong guess. Please try again or you can quit by typing quit:");
// }
// if(guess=="Avengers")
// {
//     console.log("You guessed it right!");
// }

// Loops with arrays

// let fruits = ["Apple","Banana","Mango","Pineapple","Orange"];
// fruits.push("Grapes");
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(i,fruits[i]);
// }

// for(let i = fruits.length-1;i>=0;i--)
// {
//     console.log(i,fruits[i]);
// }

// Loops with nested arrays

// let heros = [["ironman","spiderman","thor"],
//                 ["superman","wonder woman","flash"]];
// for(let i=0;i<heros.length;i++)
// {
//     console.log(i,heros[i]);
//     for(let j=0;j<heros[i].length;j++)
//     {
//         console.log(`j=${j} ${heros[i][j]}`);
//     }
// }

// let student = [["Divyansh",20,],["Rahul",21],["Rohit",22]];
// for(let i=0;i<student.length;i++)
// {
//     console.log("Info of student:",i+1);
//     for(let j=0;j<student[i].length;j++)
//     {
//         console.log(student[i][j]);
//     }
// }

// for of loop

// let fruits = ["Apple","Banana","Mango","Pineapple","Orange"];
// for(let fruit of fruits)
// {
//     console.log(fruit);
// }

// for(char of "apna college")
// {
//     console.log(char);
// }

// Nested for of loop

// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(list of heroes)
// {
//     console.log(list);
//     for(hero of list)
//     {
//         console.log(hero);
//     }
// }

// To-do App

// const toDos = [];
// let choice=prompt("What would you like to do:");
// while(true)
// {
//     if(choice=="quit")
//     {
//         console.log("You quit the app.");
//         break;
//     }    
//     else if(choice=="list")
//     {
//         console.log(`Your current to-do list:`);
//         for(let i=0;i<toDos.length;i++)
//         {
//         console.log(i,toDos[i]);
//         }    
//         console.log("-----------------");
//     }    
//     else if(choice=="add")
//     {
//         let newToDo = prompt("Enter the new to-do:");
//         toDos.push(newToDo);
//         console.log("Task added");
//         console.log(`Your current to-do list:${toDos}`);
//     }
//     else if(choice=="delete")
//     {
//         let idx = prompt("Please enter the task index:");
//         toDos.splice(idx,1);
//         console.log(`Your current to-do list:${toDos}`);
//     }
//     else
//     {
//        console.log("Invalid choice.");
//     }
//     choice = prompt("What would you like to do:list,add ,delete or quit the app");
// }

//Questions

//q1

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==num)
//     {
//         arr.splice(i,1);
//     }
// }
// console.log("Array after deletion of num:",arr);

//q2
// let number = 287152;
// let count =0;
// let copy = number;
// while(copy>0)
// {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

//q3
// let num = 287152;
// let sum =0;
// let rem = 0;
// while(num>0)
// {
//     rem = num%10;
//     sum+=rem;
//     num = Math.floor(num/10);
// }
// console.log(sum);

//q4
// let n = 5;
// let factorial =1;
// for(let i=1;i<=n;i++)
// {
//     factorial*=i;
// }
// console.log(`Factorial: ${factorial}`);

// q5
// let largest = 0;
// let arr = [2,5,10,4,2,7,1,9];
// for(num of arr)
// {
//     if(num>largest)
//     {
//         largest = num;
//     }
// }
// console.log(largest);

//Object Literals

// const student = {
//     name: "Divyansh",
//     age: 20,
//     marks: 90
// };

// const item = {
//     price : 100.99,
//     discount : 50,
//     colors : ["red","pink"]
// };

// Twitter Post

// const post = {
//     username : "@divyansh123",
//     content : "I am enjoying my day",
//     likes : 10000,
//     reposts : 200000,
//     tags : ["@harshitgour","@jayeshmalviya"]
// };

// Get values

// console.log(post["likes"]); // passing key as string
// console.log(post.likes); // Using the dot operator
// console.log(post.tags);
// console.log(post.tags[0]);

// When we have to use variables we use square brackets method
// let property = "reposts";
// console.log(post[property]);

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// Convert key as string automatically
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[null]);
// console.log(obj[true]);
// console.log(obj[undefined]);

//console.log(obj.1);// Unexpected number
// console.log(obj.true);
// console.log(obj.null);
// console.log(obj.undefined);

// Add/Update value

// const student = {
//     name : "Divyansh",
//     age : 20,
//     marks: 90,
//     city : "Indore"
// };
// console.log(student);
// student.city = "Mumbai";
// console.log(student);

// //new key creation 
// student.gender = "male";
// console.log(student);
// student.marks = "A";
// console.log(student);
// student.marks = [99,90,92];
// console.log(student);

// // key Deletion
// delete student.gender;
// console.log(student);

//Nested Objects : Object of objects

// const classInfo = {
//     divyansh :{
//         grade : "A+",
//         city : "Mumbai"
//     },
//     harshit:{
//         grade: "A+",
//         city : "Mumbai"
//     },
//     jayesh:{
//         garde : "A+",
//         city : "Mumbai"
//     }
// };

// console.log(classInfo);
// console.log(classInfo.divyansh);
// console.log(classInfo.harshit.grade);
// classInfo.divyansh.city = "Texas";
// classInfo.harshit.city = "Texas";
// classInfo.jayesh.city = "Texas";
// console.log(classInfo);

// Array of objects 

// const classInfo = [
//     {
//         name : "Divyansh",
//         grade : "A+",
//         city : "Indore"
//     },
//     {
//         name : "Harshit",
//         grade : "A+",
//         city : "Indore"
//     },
//     {
//         name : "Jayesh",
//         grade : "A+",
//         city : "Indore"
//     }     
// ];
// console.log(classInfo);
// console.log(classInfo[0].name);
// console.log(classInfo[1].city);
// classInfo[1].gender = "female";
// classInfo[2].gender = "male";
// classInfo[0].gender = "male";
// console.log(classInfo[1]);
// console.log(classInfo);

// Math Objects 

// Math properties
// console.log(Math.PI);
// console.log(Math.E);

// Math Functions

// absolute(abs) fxn
// console.log(Math.abs(-12)); // Returns absolute value
// console.log(Math.abs(12.3));

//pow fxn
// console.log(Math.pow(2,4));
// console.log(Math.pow(2,5));

//Floor fxn
// console.log(Math.floor(5.9));
// console.log(Math.floor(-5.5));

//Ceil fxn

// console.log(Math.ceil(5.5));
// console.log(Math.ceil(5.0225));
// console.log(Math.ceil(-5.5));

// Random fxn
//console.log(Math.random());// any random value from 0 to 1(exclusive)

// Random Integers

// From 1 to 10
// let num = Math.random();
// num = num*10;
// num = Math.floor(num);
// num+=1;
// console.log(num);

// In one line
// let num = Math.floor(Math.random()*10)+1;
// console.log(num);

// //q1
// let num = Math.floor(Math.random()*100)+1;
// console.log(num);

// //q2
// let num1 = Math.floor(Math.random()*5)+1;
// console.log(num1);

// from 21 to 25
// let num = Math.floor(Math.random()*5)+21;
// console.log(num);

// Guessing Game 
// const max = prompt("Enter the maximum number:");
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt("Guess the number:");
// while(true)
// {
//     if(guess=="quit")
//     {
//         console.log("User Quit.");
//         break;
//     }
//     if(guess==random)
//     {
//         console.log("Congrats! You guessed it right. Random number was: "+random); 
//         break;
//     }
//     else if(guess<random)
//     {
//         guess= prompt("Your guess was too small. Please try again:");
//     }
//     else if(guess>random)
//     {
//         guess = prompt("Your guess was too large. Please try again:")
//     }
//     else
//     {
//         guess = prompt("Your guess was wrong. Please try again");
//     }
// }

// Questions

//q1

// let dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

//q2

// let car = 
// {
//     name : "BMW",
//     model : "E-class",
//     color : "White"
// };
// console.log(car.name);

// q3

// const Person = {
//     name : "Divyansh",
//     age : 21,
//     city : "Indore"
// };
// Person.city = "New York";
// Person.country = "United States";
// console.log(Person);

// Js - 6 

// Functions in js 

// function hello()
// {
//     console.log("Hello");
// }
// hello();
// hello();

// function printName()
// {
//     console.log("Divyansh Gupta");
// }
// printName();

// function print1to5()
// {
//     for(let i =0;i<=5;i++)
//     {
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult()
// {
//     let age = 18;
//     if(age>=18)
//     {
//         console.log("Adult");
//     }
//     else
//     {
//         console.log("Not adult");
//     }
// }
// isAdult();

// Print poem

// function printPoem()
// {
//     console.log("Twinkle twinke little star");
//     console.log("How I wonder what you are");
//     console.log("Up above the world so high");
// }
// printPoem();

// dice roll

// function rollDice()
// {
//     let num = Math.floor(Math.random()*6)+1;
//     console.log(num);
// }
// rollDice();
// rollDice();

// Function with argument

// function info(name,age)
// {
//     console.log(`${name}'s age is ${age}`);
// }
// info("Divyansh",21);
// info("Jayesh",21);
// info("Harshit");
// info(40);

// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(10,20);
// sum(9562,95623);

// avg of 3 numbers

// function clcAvg(a,b,c)
// {
//     avg = (a+b+c)/3;
//     console.log(avg);
// }
// clcAvg(1,2,3);
// clcAvg(2,4,6);

// Table 

// function printTable(n)
// {
//     for(let i = n; i<=n*10; i+=n)
//     {
//        console.log(i); 
//     }
// }
// printTable(5);
// printTable(7);
// printTable(73);

// Return keyword

// arr = [2,3,4,8,9];
// let part = arr.slice(2,4);
// console.log(part);

// function sum(a,b)
// {
//     return a+b;
// }
// let s = sum(3,4);
// console.log(s);

// console.log(sum(10,12));

// finding sum of 3 numbers
//console.log(sum(sum(2,3),8));

// function isAdult(age)
// {
//     if(age>=18)
//     {
//         return "adult";
//     }
//     else
//     {
//         return "not adult";
//     }
// }

// console.log(isAdult(20));

// q5

// function getSum(n)
// {
//     let sum =0;
//     for(let i=0;i<=n;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// console.log(`Sum: ${getSum(1000)}`);

// q6

// function concatenate(arr)
// {
//     let length = arr.length;
//     let result = "";
//     for(let i=0;i<arr.length;i++)
//     {
//         result+=arr[i];
//     }
//     return result;
// }

// let arr = ["Hi ","hello ","bye ","!"];
// console.log(concatenate(arr));

// Scope


// let sum = 54; // Global Scope

// // Function Scope
// function calSum(a,b)
// {
//     let sum = a+b; // Function Scope
//     return sum;

//     //Function scope ends here
// }
// console.log(calSum(4,5)); 
// console.log(sum);


// Block Scope

// {
//     // const a= 25;
//     // let b = 10;
//     var c = 20;

// }

// console.log(a);
// console.log(b);
//console.log(c); // It works as block scope do not effect var keyword but using it is a bad practice


// for(let i=0;i<=5;i++)
// {
//     console.log(i);
// }

// console.log(i);

// let age = 25;
// if(age>=18)
// {
//     let str = "Adult";
// }
// console.log(str);

// Lexical Scope

// function outerFunc()
// {
//     let x = 5;
//     let y = 6;
//     function innerFunc()
//     {
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc();

// Hoisting : Hoisting is JavaScript's default behavior of moving all declarations 
// to the top of the current scope (to the top of the current script or the current function).

// By hoisting

// function outerFunc()
// {
//     function innerFunc() // Function Scope
//     {
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     // console.log(a); // lexical scope do not work from inside to outside but it works outside to inside
//     let x = 5;
//     let y = 6;
//     innerFunc();
// }
// outerFunc();

// innerFunc(); cannaot be used as it is defined inside outerFunc 

//question

// let greet = "hello"; // Global Scope
// function changeGreet() // Fxn
// {
//     let greet = "namaste"; // fxn scope
//     console.log("Greet");
//     function innerGreet() // never called
//     {
//         console.log(greet); // lexical scope
//     }
// }
// console.log(greet);
// changeGreet();

// Function Expressions

// const sum = function(a,b)
// {
//     return a+b;
// }
// console.log(sum(1,2));


// let hello = function()
// {
//     console.log("hello");
// }
// hello();

// hello = function()
// {
//     console.log("Namaste");
// }
// hello();

// High Order Functions 

// function multipleGreet(func,count)
// {
//     for(let i=1;i<=count;i++)
//     {
//         func();
//     }
// }

// let greet = function()
// {
//     console.log("Hello");
// }

// //multipleGreet(greet,100);

// //Or we can declare it inside also

// multipleGreet(function() {console.log("Namaste")},1000)

// Higher order function which returns a function

// function oddEvenFactory(request) // Factory Function
// {
//     if(request=="odd")
//     {
//         return function(n)
//         {
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request=="even")
//     {
//         return function(n)
//         {
//             console.log(n%2==0);
//         }
//     }
//     else
//     {
//         console.log("Wrong request");
//     }
// }

// let request = "even";
// let func = oddEvenFactory(request);
// console.log(func(10));

// let request = "odd";
// let func = oddEvenFactory(request)
// console.log(func(2));

// Methods 

// const calculator = {
//     num : 55,
//     add : function(a,b)
//     {
//         return a+b;
//     },
//     sub : function(a,b)
//     {
//         return a-b;
//     },
//     mul : function(a,b)
//     {
//         return a*b;
//     }
// };
// console.log(calculator);
// console.log(calculator.num);
// console.log(calculator.mul);
// console.log(calculator.add);
// console.log(calculator.mul(6,5));

// Shorthand to declare methods inside object

// const calculator = {
//     add(a,b)
//     {
//         return a+b;
//     },
//     sub(a,b)
//     {
//         return a-b;
//     }
// };

// console.log(calculator.add(2,5));

// Practice questions 

//q1

// let arr = [1,10,2,5,60,12,4,8,13,19];
// let num = 5;
// function greater(arr,num)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>num)
//         {
//             console.log(arr[i]);
//         }
//     }
// }
// greater(arr,num);

//q2

// let str = "abcdabcdefgggh";
// function getUnique(str)
// {
//     let extract = "";
//     for(let i=0;i<str.length;i++)
//     {
//         let currChar = str[i];
//         if(extract.indexOf(currChar)==-1)
//         {
//             extract+=currChar;
//         }
//     }
//     return extract;
// }
// console.log(getUnique(str));

//q3

// let country = ["Australia","Germany","United States Of America"]
// function largest(country)
// {
//     let ansIdx = 0;
    
//     for(let i=1;i<country.length;i++)
//     {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen>ansLen)
//         {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(largest(country));

//q4

// let str = "Abeighopab";
// function countVovels(str)
// {
//     str = str.toLowerCase();
//     let count = 0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]=='a'||str[i]=='e'||str[i]=="i"||str[i]=="o"||str[i]=="u")
//         {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVovels(str));

//q5

// function random(start,end)
// {
//     let randomNum = Math.floor(Math.random()*(end-start+1))+start;
//     return randomNum;
// }
// console.log(random(2,10));

//Js- 7

//This keyword

// const student = {
//     name : "Divyansh",
//     age : 21,
//     eng : 95,
//     math : 90,
//     phy : 92,
//     getAvg()
//     {
//         console.log(this);
        
//         let avg = (this.eng + this.math+this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
        
//     }
// }
// console.log(student.getAvg());

// function explain()
// {
//     console.log(this); // prints window object
// }
// explain();

// window.alert("Hello");

// Try and Catch block

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// try{
//     console.log(a);
// }catch(e){
//     console.log("Caught an error... a is not defined.");
//     console.log(e); 
// }
// console.log("hello2");


// Arrow Functions

// const sum = (a,b)=>{
//     console.log(a+b);
// };

// sum(2,3);

// const cube = (n)=>{
//     console.log(n*n*n);
// };
// cube(5);

//Power Function
// const pow = (a,b) =>{
//     return a**b;
// }

// console.log(pow(2,3));

// When only single argument passes parenthesis can be ignored

// const cube = n => {
//     return n*n*n;
// }
// console.log(cube(5));

// Implicit return in arrow function

// const mul = (a,b) => (a*b);
// console.log(mul(4,5));

// Set Timeout function

// console.log("Hi there");

// setTimeout(()=>{
//     console.log("Apna College");
// },4000);

// console.log("Welcome to");

// // Set Interval Function

// let id = setInterval(()=>{
//     console.log("Divyansh Gupta"); 
// },2000);

// console.log(id);

// let id2 = setInterval(()=>{
//     console.log("Hello!");
// },3000);

// console.log(id2);

// // To stop the setIntervalby call id
// setTimeout(()=>{
//     clearInterval(id);
// },5000);

// this keyword with Arrow Functions

// const student ={
//     name: "Divyansh",
//     marks: 95,
//     prop: this, // Global Scope : Window object
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); // Parent's Scope : window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout(()=>{
//             console.log(this); // student Object
//         },2000);
//     },
//     getInfo2 : function(){
//         setTimeout(function(){
//             console.log(this); // window object
//         },2000);
//     }
// };

// console.log(student);
// console.log(student.getName()); // Normal function call 
//console.log(student.getMarks()); // Arrow function call
 
// student.getInfo1();
// student.getInfo2();

// Questions
//q1
// const square = (n) => (n*n);
// console.log(square(11));

//q2

// let id = setInterval(()=>{
//     console.log("Hello World");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Clear Interval Ran");
// },10000);

//  Sheet

//q1
// const arrayAverage = (arr)=> {
//     let sum =0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(arrayAverage([2,3,4,5]));

// q2

// const isEven = (num) => num % 2 == 0;

// console.log(isEven(12));

// q3

// let object={
//     message:"Hello,World!",
//     logMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

//q4

// let length = 4;
// function callback()
// {
//     console.log(this.length);
// }

//  object = {
//     length: 5,
//     method(callback)
//     {
//         callback();
//     }
// };

// object.method(callback,1,2);

// JS - 8

// Array Methods 

// forEach

//let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// alternatively

// arr.forEach((el) => {
//     console.log(el);  
// });

// arr.forEach(function(el){
//     console.log(el);
// });

//forEach for objects stored in an array
// let arr = [{
//     name : "Divyansh",
//     marks: 95
// },{
//     name: "Harshit",
//     marks: 94
// },{
//     name: "Jayesh",
//     marks: 92
// }];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });

// Map Function

// let num = [1,2,3,4];

// let double =num.map((n)=>{
//     return n*2;
// });

// console.log(double);

// let students = [{
//     name : "Divyansh",
//     marks: 95
// },{
//     name: "Harshit",
//     marks: 94
// },{
//     name: "Jayesh",
//     marks: 92
// }]; 

// let gpa = students.map((el)=>{
//     return el.marks/10;
// });

// console.log(gpa);

// Filter 

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newArr = arr.filter((el)=>{
//     return el%2==0 ; // We can write any condition we have to filter array on
// });

// console.log(newArr);

// Every Method

// console.log([2,4,6].every((el) => el%2==0));
// console.log([2,4,1,5].every((el)=> el%2==0));

// Some Method

// console.log([1,2,3,4].some((el)=> el%2==0));
// console.log([1,3].some((el)=> el%2==0));q

// Reduce Method

// Finding sum
// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);

// Finding maximum using reduce method 

// let arr = [1,4,5,6,11,22,3];

// let max = arr.reduce((max,el)=>{
//     if(max<el)
//     {
//         return el;
//     }
//     else
//     {
//         return max;
//     }
// });

// console.log(max);

// Practice Questions 

//q1
// let nums = [10,20,30,40,50];

// let ans = nums.every((el)=>el%10==0);
// console.log(ans);

//q2

// function getMin(nums)
// {
//     let min = nums.reduce((min,el)=>{
//         if(min<el)
//         {
//             return min;
//         }
//         else
//         {
//             return el;
//         }
//     });
//     return min;
// }
// let nums = [102,5,14,3,70,0,45];

// console.log(getMin(nums));

// Default Parameters 

// function sum(a, b=2)
// {
//     return a+b;
// }
// console.log(sum(1));
// console.log(sum(4,5));

// function add(a=2,b)
// {
//     return a+b;
// }

// console.log(add(1,5));
// console.log(add(1)); // a=1, b=undefined

// Spread 

// console.log(Math.min(10,20,0,-1));

// let arr = [10,20,3,45,95,63,4,2,45,78];
// console.log(...arr);
// console.log(Math.min(...arr));
// arr.push(-1);
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// console.log(..."apnacollege");

// Spread with array literals 

// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// console.log(newArr);

// newArr.push(6);
// console.log(newArr);
// console.log(arr);

// let chars = [..."hello"];
// console.log(chars);


// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...even, ...odd]
// console.log(nums);

// Spread With Object Literals 

// let data = {
//     email: "dkgupta@gmail.com",
//     password: "abcd"
// };

// let dataCopy = {...data, id: 123, country: "India"};

// console.log(data);
// console.log(dataCopy);

// let arr = [1,2,3,4,6];
// let obj1 = {...arr}; // passing array in object literal
// console.log(obj1);

// let obj2 = {..."hello"}; // passing string in object literal
// console.log(obj2);

// Rest 

// function print(...args)
// {
//     for(let i=0;i<args.length;i++)
//     {
//         console.log("You gave us:",args[i]);
//     }
// }

// print(1,2,4);

// // arguments : is a type of collection of all arguments passed in function 
// function min()
// {
//     console.log(arguments);
//     console.log(arguments.length);
// }

// min(1,2,3,4);

// function to calculate sum of arguments
// function sum(...args)
// {
//     return args.reduce((sum,el)=> sum+el);
// }

// console.log(sum(2,3,6,5,4));

// Tacking other parameters with arguments
// function min(msg , ...args)
// {
//     console.log(msg);

//     return args.reduce((min,el)=>{
//         if(min>el)
//         {
//             return el;
//         }
//         else
//         {
//             return min;
//         }
//     });
// }

// console.log(min("hello",10,25,3,65));

// Destructuring(Arrays) : Storing values of array into multiple values
// let names = ["dk","jm","hg","ij"];

// let [winner,runnerup,...others]= names;
// console.log(winner);
// console.log(runnerup);
// console.log(others);

// Destructuring(Objects) : Storing values of objects in multiple values

// const student = {
//     name : "Divyansh",
//     age : 20,
//     subjects : ["Ds","Oopm","Dm"],
//     username : "Divyansh@123",
//     password : "Pass",
//     city : "Dallas"
// };

// let {username , password} = student;
// console.log(username);
// console.log(password);

// Giving different names to variables

// let {username : user, password : secret } = student;
// console.log(user);
// console.log(secret);

// Assigning default values to variables 

// let {city: place = "Austin"} = student;
// console.log(place);


// Assignment- Js(8)

//q1
// let arr = [1,2,3];
// let square = arr.map((el)=>el*el);
// let sum = square.reduce((sum,el)=>sum+el);
// let avg = sum/arr.length;
// console.log(avg);

//q2
// let arr = [1,2,3,4,5];
// let newArr = arr.map((el)=>el+5);
// console.log(newArr);

//q3
// let lowerCase = ["Divyansh Gupta","Harshit Goud","Jayesh Malviya"];
// let upperCase = lowerCase.map((el)=>{
//     return el.toUpperCase();
// });
// console.log(upperCase);

//q4
// let arr = [10,20,30,40,50];
// const doubleAndReturnArgs= (arr,...args)=>
// [
//     ...arr,...args.map((v)=>v*2)
// ];
// console.log(doubleAndReturnArgs(arr,25,60,45,70));

//q5
// let obj1 = 
// {
//     name : "Divyansh Gupta",
//     branch : "IT",
//     subject : "Web Development",
//     class : "IT1"
// };
// let obj2 =
// {
//     college : "AITR",
//     rollNo : 42
// };

// function mergeObjects(args1,args2)
// {
//     let dataCopy = {...args1,...args2};
//     return dataCopy;
// }
// console.log(mergeObjects(obj1,obj2)); 

// Js - 9 

// Document Object : Automatically generated for html,css code 
console.dir(document);
































































































































