// "use strict"

//? -------Higher Order Function.-----------------


//  function sum(x, y){
//     return x + y
// }

// function substract(x, y){                                        
//     return x - y
// }


// function calc(fn, x ,y){
//     return fn(x, y) 
// }

// console.log(calc(sum, 1, 2)) 

//?===========================================

// const upperCase = function(str){
//      return str.toUpperCase()
// }

// const lowerCase = function(str){
//     return str.toLowerCase()
// }

// const transform = function(str, fn){
//     return fn(str)
// }


// console.log(transform("AmAn", lowerCase))
// console.log(transform("gupta", upperCase))

//?===============================================

//?  IIFE
//?  Immediately invoke finction expression
//?  Execute only once


// (function(name){
//     console.log("i am", name)
// })("aman")


//?===============================================================

//? setTimeOut
//? setInterval

// setTimeout ==> "run once"
// setIntervel ==> runs repeteadly after the interval of time.
// async


// function gretting(name){
//     console.log("welcome ", name)
// }

// setTimeout(gretting, 3000, "Aman")


// setTimeout(function(){
//     console.log("hello")
// },6000)


// setInterval(gretting, 1000, "PRIYA")

//?=====================================================================

//? Hoisting
//==> Variable "declaration" are "hoisted" towards "top" of their scope

// x= 10;
// console.log(x)
// var x;

// test()

// function test(){
//     console.log("Test done")
// }

//==========================================================================

//?-------Object------------

// let car= {
//     color: "black",
//     model: "xyc",
//     company: "hondai"
// }

// console.log(car["model"])
// console.log(car.company)

// delete car.model
// console.log(car)

//========================================================

//?-----Function vs Method-------------------

// Method --  it is nothing but object property(key) holding function as "value"

// let person =  {
//    ageCalc: function(birthYear){
//     let age = 2023 - birthYear
//     return age;
//    }
// }

// console.log(person.ageCalc(2000))

//================================================================

//? ---this Keyword-------

//In each method we have access of special keyword called "this"

//"this" keyword represent the object. "calling" the "method" in which "this" is "present"

// let person ={
//     firsName: "Aman",
//     lastName: "Gupta",
//     age: 20,
//     City: "Delhi",
//     getSummery: function(){
//         return `${this.firsName} ${this.lastName} ${this.age}`
//     }
// }

// console.log(person.getSummery())

//================================================================

//? ----for Each mehod of array----------

// let dishes =["Biryani", "Manchurian", "puri", "sabji"]

// dishes.forEach(function(elem){
//   console.log(elem)
// })

//----Object inside array---

// const blockList =[{userName: "Aman",reason: "Copyright"},{userName: "Priya", reason: "Abausive content"}]

// for(let i = 0; i<blockList.length; i++){
//     console.log(blockList[i].userName)
// }

//================================================================

//?---Math Object ---


// console.log(Math);
//round , ceiling, trunc, floor

//Function

//=================================================================================

//?---Call and apply method--
//we can manually set the value of "this" keyword using
//call and apply.

// let mainPlane = {
//     airline: "Air india",
//     code: "AIR",
//     booking: [],
//     book: function(name, flightNum){
//         console.log(`${name} booked a flight on ${this.airline} with flight number ${flightNum}`)
//         this.booking.push({flightName: `${this.airline}`, name: name, flightNumber: flightNum})
//     }
// }

// mainPlane.book("Aman", 65846)
// mainPlane.book("Priay", 7846)

// console.log(mainPlane)

// let childPlane ={
//     airline: "Child Plane",
//     code: "AIR C",
//     booking:[]
// }

// let book = mainPlane.book;

// book.call(childPlane, "Krishna", 108)
// book.call(mainPlane, "Radha", 101)

// //  apply

// book.apply(childPlane, ["shiva", 111])


// ?--bilnd ----

// function greet(){
//     console.log(`${this.firstName} ${this.lastName}`)
// }


// let user={
//     firstName: "Aman",
//     lastName: "Gupta"
// }

// let gretting = greet.bind(user)

// gretting()

//============================================================================

//?---"Object/arrays" how "reference" are passed to variable


// let arr = [1, 2, 3, 4, 5, 6]

// let getRef = arr;

// arr.pop()
// getRef.shift()

// console.log(arr)
// console.log(getRef)

// console.log("********************")
// ---Pass by Value----

// let getValue = [...arr];

// getValue.pop()
// getValue.shift()

// console.log(arr)
// console.log(getValue)


//==================================================================

//?--for-in loop (Each iteration return a "key" of object)


// let car = {
//     model: 2022,
//     color: "Black",
//     company: "Tata"
// }

// let x = ""
// for(let key in car){
//     x= x + car[key]
// }

// console.log(x)


//============================================================
//? --------DOM -------------

//?---Form-----

//======================================

//? ---Array Method-----------

//Revverse (Mutate the original array)

// let letter = ["a", "b", "c", "d"]

// let reverse = letter.reverse()

// console.log(letter)
// console.log(reverse)

//======================================


//? .concate
// Not Mutate the original array make a separate copy
// let nums= [1, 2, 3, 4]

// let concat = nums.concat(letter)

// console.log(concat)

//======================================


//? .join convert array to string
//non- mutating

// let join = letter.join("---")
// console.log( join)

//======================================


//? --Slice Method---- 
//? non mutating

//use to extract part of array
//Array.slice(startIndex, lastIndex(excluded))
//Return new array with extracted elements

// let num = [1,2,3,4,5,6,7,8]

// let extractedArray = num.slice(4)
// console.log(extractedArray);

//======================================


//? splice method
//? Mutating

//used to add new elements into the array
//Array.splice(index,deletedValue,valuetoBeAdded)


// let num = [1,2,3,4,5,6,7,8]

// let updated = num.splice(1,3,1)

// console.log(num);
// console.log(updated);


//at()

//======================================

//? Map Method

// let salaries = [200,400,500,800,900]

// let newSalaries = salaries.map((salary)=>{
//   let incrementAmount = salary / 2;
//   return salary + incrementAmount;
// })

// console.log(newSalaries);


//======================================

//? .filter Method

// let gift = ["watch", "ring","car", "Bike","watch"]

// let filteredArray = gift.filter(gift=>{
//     if(gift == "watch" || gift == "ring"){
//         return gift
//     }
// })

// console.log(filteredArray);

//======================================


//? .reduce()

// let num = [1,2,1,8,2,6]

// let sum = num.reduce((total, currVal)=>{
//   return total + currVal
// },0)

// console.log(sum);

//======================================

//?.find

// let  student = [{name: "aman", id: 5}, {name: "priya", id: 2}]

//  let resut = student.find(student=>{
//     return student.id == 2
//  })


//  console.log(resut);
//  console.log(resut);

//======================================

//? findIndex Method

// let age = [10,15,52,1,6,7]

// let result = age.findIndex(age=>{
//    return age >18
// })

// console.log(result);


//======================================


//? "some" and "every" method


// let score = [55,56,58,65,52,56,55,74]

// let result = score.some(score=>{
//  return score > 80;
// })

// console.log(result);

// let newResult = score.every(function(score){
//   return score > 50
// })

// console.log(newResult);


//======================================

//? -----"flat" Method--------

//  let arr = [1,2,3,[6,7,8,9,[10,11,12,[13,14]]]]
//  console.log(arr);

//  let flatedArr = arr.flat(3)
//  console.log(flatedArr);


//?----flatMap Method

//it is a combination of "map()" method
//folloed ny the "flat()" method of depth "1"

// let cart = [
//    {
//       name: "Mobile Phone",
//       qty: 2,
//       price: 5000
//    },
//    {
//       name: "Tablet",
//       qty: 1,
//       price: 1000
//    }

// ]

// let newCart = cart.flatMap(item =>{
//    if(item.name === "Mobile Phone"){
//       return[item, {
//          name: "screen guadrd",
//          qty: 1,
//          price: 0
//       }]
//    }else{
//       return[item]
//    }
// })

// console.log(newCart);

//======================================

//? ----sorting of Array----

// let num = [2,8,1,6,3,12,5]

// num.sort((a, b)=>{
//     return a - b;
// })

// console.log(num);

//--Chain of method ----

// let num = [1,2,3,4,5,6,7,8,9]


// let result = num.slice(0,3).splice(1,2,6).push(10)

// console.log(num)

// console.log(result);

//?======================================

//?-----Date and Time

// let currentDate = new Date(2015,3,2,11,5,10)
// console.log(currentDate);

// let currentDate = new Date().getTime()
// console.log(currentDate);

// let dateAndTime = new Date()
// console.log(dateAndTime);


//?Get Full Year

// console.log(dateAndTime.getFullYear());

//?Get Month

// console.log(dateAndTime.getMonth()); // 0 to 11

//?Week Days

// console.log(dateAndTime.getDay());
// 0 - sunday

//?Date

// console.log(dateAndTime.getDate());

//?Hours

// console.log(dateAndTime.getHours());

//?getMinutes


// console.log(dateAndTime.getMinutes());


//?get Second

// console.log(dateAndTime.getSeconds());

//?get MiliSecond

// console.log(dateAndTime.getMilliseconds());


//? ======================================

//?---- Local Storage-------

//setItem
//getItme
//updateItem


// localStorage.setItem("Aman", "I am Happy")
// localStorage.setItem("Priya", "she is Happy")
// localStorage.setItem("AP", "Both are Happy")


// localStorage.clear()


//? How to store complex data structure like array of object
//? local storage data store in string format only

// let vehicles = [
//     {
//         company: "honda",
//         model: 2015
//     },
//     {
//         company: "Toyta",
//         model: 2018
//     }
// ]

// console.log(typeof vehicles);

// let stringOfVehicles = JSON.stringify(vehicles)
// console.log(stringOfVehicles);

// localStorage.setItem("Vehicles", stringOfVehicles)
// console.log(localStorage);


// let storedData = localStorage.getItem("Vehicles")

// let changeFormat = JSON.parse(storedData)

// console.log(changeFormat)


// localStorage.clear()

//?======================================
//? Object Oriented Programming (js)
//? Constructor function and the "new" Operator
//? we can not use arrow function as constructor
//? call "constructor" function using "new" keyword

// let Car = function (color, model) {
//     this.color = color;
//     this.model = model;
// }

// Car.prototype.startEngine = function(){
//     console.log("This is start engine Method");
// }

// console.log(Car.prototype);

// let car1 = new Car("Black", 101)
// console.log(car1);
// let car2 = new Car("Yellow", 102)
// console.log(car2);

// car1.startEngine();

// console.log(car1.__proto__);

// console.log(car1 instanceof Car);

//?======================================================
//? ES6 Classes (They still implement prototypal inheritance)
//? behind the scence)

//? class declaration

// class Car {
//     constructor(color, model){
//         this.color = color;
//         this.model = model;
//     }
//       startEngine(){
//         console.log("This is start engine method of car class");
//       }
// }

// Car.prototype.wheels = function(){
//     console.log("Wheels added");
// }

// let honda = new Car("Red", 109)
// console.log(honda);
// console.log(honda.__proto__);

//! important point
//? classes are not hoisted
//? classes are also first class citizen(pass as an argument or return)
//? classes are executed in strict mode

//?============================================= 

//?--- setter and getters-----

// class Car{
//     constructor(color, model){
//         this.color = color;
//         this.model = model;
//     }

//     get _engine(){
//          console.log("This is engine");
//     }

//     set discription(val){
//         return this.color = val;
//     }
// }

// let honda = new Car("Grey", 804422)
// console.log(honda.discription ="Black");

// console.log(honda);
// honda.engine

//? ---static method-----((can never inherit to object)
//? statis method (method which is not present on constructor)
//? "prototype" property but "constructor" itself

// class Car{
//    constructor(color, model){
//     this.color = color;
//     this.model = model;
//    }
// }

// Car.breathMethod = function(){
//     console.log("this is break method");
// }

// Car.breathMethod()

// let honda = new Car("blue", 502)
// console.log(honda);

//?====================================================

//? class inheritance(sub class)
//? class declaration
//? parent class

// class Car {
//     constructor(color, model) {
//         this.color = color;
//         this.model = model;
//     }
//     startEngine() {
//         console.log("This is engine method");
//     }
// }

//child class

// class Bike extends Car {
//Add new properties and method as well
//     constructor(color, model, enginepower) {
//         super(color, model)
//         this.enginepower = enginepower;
//     }
//     bikeMethod() {
//         console.log("this is Bike Method");
//     }
// }


// let newBike1 = new Bike("pink", 108, "1000CC")
// let newBike2 = new Bike("Blue", 109, "1500CC")
// console.log(newBike1, newBike2);


//child class

// let Bikes = function (color, model, enginepower) {
//     Car.call(this, color, model)
//     this.enginepower = enginepower;
// }

// inherit from parent class

// Bikes.prototype = Object.create(Car.prototype)

//Not inherit

// Bike.prototype.ownBike = function () {
//     console.log("this is own Bike")
// }

// let bike3 = new Bike("green", 2023, "100CC")
// console.log(bike3);

//?=========================================================
//? Chainin of method

// class banKAccount {
//     constructor(owner, pin) {
//         this.owner = owner
//         this.pin = pin
//         this.movements = [];
//     }
//     getMovements() {
//         return this.movements
//     }
//     deposit(val) {
//         this.movements.push(val)
//         return this;
//     }
//     withdraw(val) {
//         this.deposit(val)
//         return this
//     }
// }

// let account = new banKAccount("Aman", 1256)
// console.log(account);

// account.deposit(45).withdraw(5).deposit(500).withdraw(100)

// console.log(account.getMovements());


//?===================================================

//?----Asynchronous Javascript--------------------

// console.log(1);
// console.log(2);

//Async code

// setTimeout(()=>{
//     console.log("call back function run after 3 second");
// },3000)

// console.log(3);
// console.log(4);


//?Asynchoronous Javascript
//?Making HTTP Request

// let todos = (callback) => {
//     let request = new XMLHttpRequest();
//     // console.log(request,request.readyState);

//     request.addEventListener("readystatechange", () => {
//         // console.log(request, request.readyState);
//         let datafromApi = JSON.parse(request.responseText)
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(request.responseText);
//             callback(undefined,datafromApi)
//         }else if(request.readyState ===4){
//             // console.log("Data could not fetch");
//             callback("Data could Not fetch",undefined)
//         }
//     })

//? set up Request
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos")

//     //? sending the request
//     request.send()
// }

// todos((error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })


//? Value   state                Discription
//   0      UNSENT                Client has been created. open() not called yet.
//  1      OPENED                open() has been called.
//  2      HEADER_RECIEVED       send() has been called, and headers recieved
//  3      LOADING Downloading   responseText holds partial data.
//  4      DONE                  The operation is complete

//? HTTP Respose status code

// Informational responses (100 — 199)
// Successful responses (200 - 299)
// Redirection messages (300 - 399)
// Client error responses (400 - 499)
// Server error responses (500 — 599)

// function getSomething() {

//     return new Promise((resolve, reject) => {
//         // resolve("Some Data")
//         reject("Some Error")
//     });
// }

// getSomething().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

//?======================================================

//? Asychronous JavaScript
//?fetch API

// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     console.log("Promose Resolved", response);
// }).catch((error) => {
//     console.log(error);
// })



// function double(x){
//     return x * 2
// }

// setInterval((cb)=>{
//     cb(double(4));
// },5000,print)

// function print(result){
//     console.log(result);
// }

//?=======================================

//? ES6
//? Array Destructuring

// let hotel = {
//     name: "Taj",
//     location: "Delhi",
//     category:["chinise","italian","english"]

// }

// let item = [4,8,9,6,3]

// let[x,y,z] = item

// console.log(x,y,z);

// let[first,,third]= hotel.category;
// console.log(first,third);

// [first,third] = [third,first]

// console.log(first,third);

// let num = [2,3,[6,9]]

// let[a, ,[c, d]] = num

// console.log(a,c,d);

//?====================================================

//?Destructuring of object

let hotel ={
    name: "Taj",
    loc: "Delhi",
    mainMenu: ["paneer","mashroom","roti"]
}

// let{name,loc,mainMenu} = hotel;
// console.log(name,loc,hotel);

//? Set Customize name of object Propert

// let{name:hotelName, loc:locations, mainMenu:menu} =hotel;
// console.log(hotelName,locations,menu);

//? setting Default values

// let{name,category=[],mainMenu=[]} = hotel;
// console.log(name,category,mainMenu);


//?Destructuring of nested object

//?Spread operator(unpacking the array elements)
// let num = [1,6,4,4]
// console.log(num);

// let newArr = [...num ,9,9,9]
// console.log(newArr);


//? create a shallow copy using spread operator

//?==========================================================

//?Rest Operator and parameter


//?----Shirt Circuiting (&&, ||)

//? falsy avlue => 0, false,null,undefine, ""(empty string)

// let result = "coder" && 0 && "5";
// console.log(result);

// let result = "" || null
// console.log(result);


//? Nullish coalescing operator(??)

//?for - of loop

//?Enchnces Object Literals

// let openingHours = {
//     sunday: {open:"09:00AM", close: "11:00PM"},
//     monday: {open:"09:00AM", close: "11:00PM"},
//     tuesday: {open:"09:00AM", close: "11:00PM"}
// }


//?--- optional chaining--
//? Check privious value of the operator => null or undefined


//?=================================================


//?------Sets-----------

// let nums = [1,1,2,8,4,5,6,6,3,4,9,2,1,6,5,6]

// let itemSet = new Set(nums)
// console.log(itemSet);
// console.log(itemSet.size);
// console.log(itemSet.has(2));
// itemSet.add(55)
// itemSet.delete(9)

// for(let item of itemSet){
//     console.log(item);
// }

// let itemSet = new Set("Programmer")
// console.log(itemSet);

//? set are also Iteralble

//?=========================================

//?----- Maps -----
//? its is data structure which is used to map values into keys
//? in map the data types of key can be "any"

// let restoMap = new Map()

// restoMap.set("name", "My name is Aman")
// restoMap.set(1, "Address One")
// restoMap.set(2, "addres 2")
// console.log(restoMap);
// console.log(restoMap.get(1));
// console.log(restoMap.size);

//?============================================

//? Exporting and importing ES6 modules

//?=================================================


//? Modern javascript Modules, and tooling

//? Top level await ES2022
//? Before ES2022 we can use await only inside async function
//? but i ES2022 introduced top level await
//? it means now we can use await outside the async function
//! Top level await block the execution of next code part


//========================================================

//?Module Pattern
//?IIFE

//? Introduction to NPM (node package manager)
//?======================================================
//? nodemon

//?-----Closures------

//? Clouser means "inner" function has access to the variable 
//? and parametrs of "outer" function ever after outer function
//? has returned

// let outerFunction = function(outerPara){
//     let outerVariable = "outer variable"


//     let innerFunction = function(){
//         console.log(outerVariable,outerPara);
//     }

//     return innerFunction;
// }

// let innfun = outerFunction("i am outer parameter");
// innfun();

// let counter = function(){
//     let count = 0;

//     let innerCounter = function(){
//         return count = count + 1;
//     }

//     return innerCounter;
    
// }

// let innerCount = counter();

// console.log(innerCount());











