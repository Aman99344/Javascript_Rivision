//todos :Chapter 1 (Data Types)

//?1.1: Create a code to check difference between null and undefined data type. Also check their type using typeof.

// let nullVar = null;
// console.log(nullVar);
// console.log(typeof nullVar);

// let undefinedVar;
// console.log(typeof undefinedVar);

//!===============================================

//? 1.2: Which type of variables (var, let or const) must be initialized at the time of declaration?

//Ans-> const must be initialized at the time of declaration.

//!==============================================

//? 1.3: Guess the Output and Explain Why?

//  let languages = 'Programmer';

// let result = languages.lastIndexOf('r');

// console.log(result);

//Ans- it will give the index of last occurance and -1 if not found.

//!===============================================

// //?1.4: Guess the Output and Explain Why?

// let variable = 'hello programmers';

// let result = Number(variable);

// console.log(result);

//Ans -- its does not contain any numberic character


//!===============================================


//? 1.5: Guess the Output and Explain Why?

// let num1 = 32;

// let num2 = '32';

// let result1 = num1 !== num2;
// let result2 = num1 != num2;

// console.log(result1, result2); true, false

//Ans- (!==) chaking strict not eual num1 data type is number and num2 data type is String.

//(!=) loose inequality it does not check data types

//!===============================================

//? 1.6: Guess the Output and explain Why?

// let str = 'Hello Programmers';

// let result = str.includes('P');

// console.log(result);

//Ans- The includes() method is then used on the string to check if it includes the character 'P'.

//!===============================================

//?1.7: Guess the Output and Explain Why?

// let num1 = 2;

// let num2 = 5;

// let result = num1 ** num2 * 2;

// console.log(result);

//Ans - (**) exponentiation operator,

//!===============================================

//?1.8: Guess the Output and Explain Why?


// let num1 = [1, 2, 4, 5];

// let num2 = [6, 5, 8, 0];

// let result = num1.concat(num2);

// console.log(result);

//Ans- .cancat method used to merge two or more array and ir does not modify original array instread it return new array

//!===============================================

//?1.9: Guess the Output and Explain Why?

// let a = 5;    

// let b = 7;  //false 0  // true 1

// let c = 8;   

// let result = a > b > c;

// console.log(result);

//Ans==> a < b: This evaluates to true because 5 is indeed less than 7.
// true > c: Here, true is implicitly coerced to 1, and then compared to 8. 1 is not greater than 8, so this part of the expression evaluates to false

//!===============================================

//?1.10: If your State is split into four equal parts such that in each part there are 1/4 number of people live. You have to find how many people would live in each part? which operators will you use ?

//Ans- number of people in each part= totalpeople / 4

//!===============================================


//todos: Chapter 2 (Control Flow / Conditional)


//?2.1: Guess the Output and Explain Why?

// let i = 4;

// for (let j = 0; i < 10; i++) {
//   if (j === 1 || i === 6) {
//     continue;
//   } else {
//     console.log(i, j);

//     if (i === 7) {
//       break;
//     }
//   }
// }

// iteration 1 -> i < 10 condition is true then it move to if block
//(j === 1 || i === 6) does not match the condition in if block so it move to else
// now it print i = 4, j = 0

//iteration 2 -> now i is incremented and new value is 5 it still satisfy the condition i<10 
//again it move to if block (j === 1 || i === 6) condition does not satisfy so it move to else 
//block and it print i = 5, j = 0;

//interation 3 --> now i = 6; and j is 0 and i is still less than 10 
//now in  if block (j === 1 || i === 6) condition satisfy so there is "continue" statement so this step will skip

// iteration -> 4 now i = 7 and still less than 10 so it move to if block 
//(j === 1 || i === 6) condition not satisfied so it move to else block and print
// i = 7 j = 0;

//inside else block there is a if block (i === 7) and condition satisfy so it has "break" statement so it come out of loop and terminate execution

//!===============================================

//?2.2: Guess the Output and Explain Why?

// let i = 0;

// for (i; i < 5; i++) {
//   console.log(i);
// }

//Ans- loop run until the condition i<5 so the result is 0,1,2,3,4

//!===============================================

//? 2.3: Write a simple Program in which You have to print first 10 numbers in descending order (10...1)?

// for(let i =10; i>0; i--){
//   console.log(i);
// }

//!===============================================

//? Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food.

//?Write an if/else if statement to help john figure out Your country is right for him?


// let population = 11
// let lang = "english"
// let food = "english"

// if(population < 10 && lang === "english"){
//     console.log("live");
// }
// else if(food === "spanish" || food === "english"){
//    console.log("Here also");
// }

//!===============================================

//? 2.5: Guess the Output And Explain Why?

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// However, since i was declared with let inside the loop, it's limited in scope to the loop block. Outside the loop, the variable i is not defined, leading to a ReferenceError.

//!===============================================

//?2.6: use nested-if statement to check your age>18 than check your height height > 5.10. If both true show any message(I can sit in exam) in the console?

// let age = 20;
// let height = 6.11

// if (age > 18){
//     if(height > 5.10){
//         console.log("i can sit in exam");
//     }
// }

//!===============================================

//?2.7: Create two variables grade and passingYear.Check if your grade == "A" and passingYear < 2020 with the help of ternary operator(Not allowed to use any logical operator).If both condition true print on console Qualify. Otherwise Fail

// let grade = "2"
// let passingYear = 2018

// let result = grade === "A" ? passingYear < 2020 ? "Qualify" :"passing year requirement":"Grade is low"

// console.log(result)

// if(grade === "A"){
//     if(passingYear < 2022){
//         console.log("qualify");
//     }else{
//         console.log("passingYear rquirements did not match");
//     }
// }else{
//     console.log("GRADE requirement did not match");
// }

//!===============================================

//todos Chapter 3 (Functions)

//? 3.1: Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place. Based on this input function should return a String with this format.

// function describeYourState(population,traditionalFood,historicalPlace){
//    return `My state population is ${population} its traditionl food is ${traditionalFood} and historical place name is ${historicalPlace}`
// }

// console.log(describeYourState(21,"littiChoka", "golghar"));


//!===============================================

//?3.2: Create a function expression which does the exact same thing as defined in Question 1

// const myState = function(population,traditionalFood,historicalPlace){
//     return `My state population is ${population} its traditionl food is ${traditionalFood} and historical place name is ${historicalPlace}`
// }

// console.log(myState(21,"littiChoka", "golghar"));

//!===============================================

//?  3.3: Create function addition which takes two numbers as an parameter And return the result of sum of two numbers
//? Important Note: In the function call you are not passing any arguments. You can modify function to achieve this.

// function addition(num1=1, num2=4){ //Default parameters
//     return num1 + num2
// }

// console.log(addition());

//!===============================================

//? 3.4: Identify which type of value passed below into the function greet(). What will be the return value of greet ?

// let person = {
//     name: 'john',

//     age: 25,
//   };

//   function greet(person) {
//     person.name = `Mr ${person.name}`;

//     return `Welcome ${person.name}`;
//   }

//   console.log(greet(person));

//!===============================================


//? 3.5: Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.


// function upperCase (str) {
//     return str.slice(0,1).toUpperCase()
// }

// function transformer(firstUpperCaseWord, string) {
//     return firstUpperCaseWord(string)
// }

// console.log(transformer(upperCase, "aman"));

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter("hello"));


// function applyToEachWord(str, transformation) {
//     return str.split(' ').map(transformation).join(' ');
// }



// const inputString = "hello my  name is aman";
// const transformedString = applyToEachWord(inputString, capitalizeFirstLetter);


// console.log(transformedString);

//!===============================================

//? 3.6: create function which will display Your name after every 5 second


// function myName(name) {
//     console.log(name)
// }

// setInterval(myName, 1000, "aman")

// setInterval(function(){
//     console.log("hello");
// },1000)

// setInterval(() => {
//     console.log(myName("Aman"));
// }, 1000)


// setInterval(()=>{
//     console.log("Aman");
// },1000)

//!===============================================


//? 3.7: Guess the Output And Explain Why?

// let arrowFunction = (name = 'Coders') => { //Default parameter
//     return `Welcome ${name}`;
// };

// console.log(arrowFunction('Programmers'));

//!===============================================

//? 3.8: Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.


// function area_of_triangle(a,b,c) {
//    let s = (a+b+c)/2
//    let area = Math.sqrt(s * (s - a)* (s - b) *(s - c))
//    return area.toFixed(2)
// }

// console.log(area_of_triangle(5,6,7));

//!===============================================

//? 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}



console.log(capitalize("aman gupta"));