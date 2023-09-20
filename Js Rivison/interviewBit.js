//? JavaScript Interview Questions for Freshers
//? 1. What are the different data types present in javascript?
//? To know the type of a JavaScript variable, we can use the typeof operator.

//? 1. Primitive types

//string
//Number
//Boolean
//Symbol
//Undefine
//null
//BigInt

//? 2. Non-primitive types

//Object

//? Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

//!==================================================================

//? 2. Explain Hoisting in javascript.

// Hoisting is default behaviour in javascript in which all variable  and function declaration move on top.

//? Example 1:


//  a = 1;
//  alert('a =' + a)
//  var a;

//? Example 2:


// hositedVar = 6;
// console.log(hositedVar); // OutPut 6 even variable are declared after it is initialized
// var hositedVar;

//? Example 3:


// hoistedFunc() // Function in declared after calling

// function hoistedFunc(){
//   console.log("Hello lets learn Hoisting");
// }


//? Example 4:

// ? Hoisting takes place in the local scope as well

// function doSomething() {
//     x = 15
//     console.log(x);
//     var x;
// }

// doSomething()

//! Note - Variable initializations are not hoisted, only variable declarations are hoisted:

// var xy;
// console.log(xy); // Outputs "undefined" since the initialization of "xy" is not hoisted
// xy = 23;

//! Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:


// "use strict";
// xyz = 23;
// console.log(x);
// var xyz;


//!=========================================================================


//? 3. Why do we use the word “debugger” in javascript?

// The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

//!=======================================================


//? 4. Difference between “ == “ and “ === “ operators.

// Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.


//  var x = 5;
//  var y = "5";

//  console.log(x==y);
//  console.log(x===y)x

//!=======================================================


//? 5. Difference between var and let keyword in javascript.

//? 1. Introduction

// "var" was there in javascript from begining
// "let" introduced in 2015 also know as ES6

//? Scope

// "var" has functional scope that means it can be access anywhere whitin the function in which it has been declared
//"let" has block scope that means the are limited to block  {} in whiich they are declared

//? Eaxample

// function scopeCheck(){
//     if(true){
//         var x = 10;
//         let y = 20;

//     }
//     console.log(x);
//     console.log(y);
// }


// scopeCheck()

//? When javascript hoist "var" variable it not only move it on top but also give a default value "undefine"
//? It's like a "ghost" variable that's there but empty until you assign a value to it.

// console.log(a);
// var a = 5

//? when javascript hoist let variable it moves it to the top but it does not give any value;

// console.log(b);
// let b = 10;

// let toy;
// console.log(toy);

//!=======================================================



//? 6. Explain Implicit Type Coercion in javascript.

//? String coercion

// when number added to string using + operator it will convert number into

// var a = 2
// var b = "5"

// console.log(a + b);

//? when use - operator string will be converted to number

// var a = 5
// var b = "3"

// console.log(a - b);

//? Boolean Coercion

//! All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

// if(0){console.log("hi");}

//!=======================================================

//? Logical operators:

// (OR) || operator if first value is truthy then first value is returned otherwise it return second value

// (AND) && operator if both value is truth always second value i returned is first value is false then first value is returned if second value is false second value is returned.

//? Equality Coercion

// The ‘==’ operator, converts both the operands to the same type and then compares them.
// Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.


//!=======================================================

//? 7. Is javascript a statically typed or a dynamically typed language?

// javascript is dynamically typed language. in dynamically type language the type of variable is checked during runtime. in contract to static type language where the type of variable checked during compile-time.

//? Example
// var a = 2
// var a = "Hello world"

// console.log(a);

//!=======================================================


//? 8. What is NaN property in JavaScript?

// NaN properties indicate Not-a-Number value, it indicate a value that is not a legal number.
// To check if a value is NaN, we use the isNaN() function,

//! Note- isNaN() function converts the given value to a Number type, and then equates to NaN.


// console.log(typeof NaN);

// isNaN("Hello")  // Returns true
// isNaN(345)   // Returns false
// isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number)
// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
// isNaN(false) // Returns false
// isNaN(undefined) // Returns true

//!=======================================================

//? 9. Explain passed by value and passed by reference.

// In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.
// Therefore, non-primitive data types are always passed by reference.

//!=======================================================


//? 10. What is an Immediately Invoked Function in JavaScript?

// An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

// (function(){
//   console.log("Hello");
// })();


//!=======================================================


//? 11. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

// In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.

// Characteristics of strict mode in javascript

// Duplicate arguments are not allowed by developers.
// In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
// The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
// Engineers will not be allowed to create global variables in 'Strict Mode.

//!=======================================================

//? 12. Explain Higher Order Functions in javascript.

// the function which is passed to other function as a argument it is called as higher order function
//Higher-order functions are a result of functions being first-class citizens in javascript.

// function heigheOrder(fn){
//  return fn()
// }

// heigheOrder(function(){
//     console.log("Hello");
// })

// function higherOrder2() {
//     return function() {
//       return "Do something";
//     }
//   }
//   var x = higherOrder2();
//   x()   // Returns "Do something"


//? 13. Explain “this” keyword.

// The “this” keyword refers to the object that have function as a properties
// The value of "this" keyword always depends on the object that is invoking the function

// function doSomething() {
//     console.log(this);
// }

// doSomething()

// var obj = {
//     name: "vivek",
//     getName: function () {
//         console.log(this.name);
//     }

// }

// var getName = obj.getName;

// var obj2 = {
//     name: "akshay",
//     getName
// };
// obj2.getName();


// The silly way to understand the “this” keyword is, whenever the function is invoked, check the object before the dot. The value of this . keyword will always be the object before the dot.

//!=======================================================

//? 14. What do you mean by Self Invoking Functions?

// Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.

// Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions


//!=======================================================

//? 15. Explain call(), apply() and, bind() methods.

// 1. call():

// It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.

//!=======================================================


//? 17. What is currying in JavaScript?

// Currying in JavaScript works similarly. It's a technique where you transform a function that takes multiple arguments into a series of functions that each take one argument. Let's see it in code:

// So, currying in JavaScript is like breaking down a function that takes multiple arguments into a chain of functions, each taking one argument, making your code more flexible and modular.

//!=======================================================

//? 18. What are some advantages of using External JavaScript?

// External JavaScript is the JavaScript Code (script) written in a separate file with the extension.js, and then we link that file inside the <head> or <body> element of the HTML file where the code is to be placed. 

// It allows web designers and developers to collaborate on HTML and javascript files.
// We can reuse the code.
// Code readability is simple in external javascript.

//!=======================================================

//? 19. Explain Scope and Scope Chain in javascript.
  
// In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot access.

// There are three types of scopes in JS:

// Global Scope
// Local or Function Scope
// Block Scope

//? 20. Explain Closures in JavaScript.

// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

// A closure is a fundamental concept in JavaScript. It refers to the ability of an inner function to access variables from its outer function, even after the outer function has finished executing. In simpler terms, a closure "closes over" its surrounding scope, preserving access to its variables.


// function outerFunction() {
//     const outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   const closureFunc = outerFunction(); // outerFunction executed, and closureFunc captures innerFunction
  
//   closureFunc(); // Outputs: I am from the outer function

//!=======================================================

  
//?  25. What is memoization?

// Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.

//!=======================================================


//? 27. What is the use of a constructor function in javascript?

// Constructor functions are used to create objects in javascript.
// When do we use constructor functions?
// If we want to create multiple objects having similar properties and methods, constructor functions are used.

// function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
  
  
//   var person1 = new Person("Vivek", 76, "male");
//   console.log(person1);
  
//   var person2 = new Person("Courtney", 34, "female");
//   console.log(person2);

//!=======================================================


//? 29. Which method is used to retrieve a character from a certain index?

// The charAt() function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length

//!=======================================================


// 30. What do you mean by BOM?

// Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object












