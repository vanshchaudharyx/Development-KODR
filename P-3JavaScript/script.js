// console.log('This is Message')
// console.warn('This is warning')
// console.error('This is error')
// alert("ALERT")
// var aconfirm('Are u an adult')
// var a= 20
// console.log(a)
// prompt("Enter your name")
// var naam = prompt("Enter your name")
// console.log(naam)
/* JS datatypes
  1-Primitive
 Number(1,1.2)
 String('a','vansh')
 Boolean(true,false)
 undefined
 null
 symbol
 nan  
 2- Reference
  Array
  Object
  Function 
*/
// var a=10
// var b='VANSH'
// console.log(a*b) // OP-nan
// console.log(a+b) // OP-10VANSH
// // + for concatenation
// // IF-ELSE conditionals
// if(10<5){
//     console.log('correct')
// }
// else{
//     console.log('Not correct')
// }
// var age = prompt("Enter your age:");
// if (age >= 18) {
//   console.log("User is eligible");
// } else {
//   console.log("User is not eligible");
// }
// LOOPS
// var a=0
// while(5>a){
//   console.log("HELLO")
//   console.log(a)
//   a++
// }
// FOR Loop
// for(var a=0;a<5;a++){
//    console.log('Hello')
// }
//Comparison operator
/*var a = 10;
var b = "10";
// == compares only value
if (a == b) {
  console.log("Sahi hai");
} else {
  console.log("Galat hai");
}
// === compares data type and value both
if (a === b) {
  console.log("Sahi hai");
} else {
  console.log("Galat hai");
}*/
// Functions.
// function walk() {
//   console.log("Function");
// }
// walk();

// var b = function greet() {
//   console.log("Hello");
// };
// b() // Function Calling.
// // Third type of function. Fat arrow function.
// var c= () => {
//   console.log('Hello c')
// }
// c()
// var is a global variable
// Two more ways 1-let 2-const
// const is used for one time initialization
//  const groom='Selmon'
//  const bride='Kat'
//  If we want to assign a value to groom and bride then it shows error.
//  console.log(groom,"Weds",bride)
// ARRAY
// var a=[10,20,30,"sotware"]
// console.log(a)
// a.push(99)
// console.log(a)
// a.pop(99)
// console.log(a)
// a.unshift(0) // add in starting
// a.shift() // remove from starting
// a.splice(2,1) // removes the value at 2nd index and remove only 1 value from index 2 
// a.forEach(function(){   //This function runs for 4 time because array length is 4.
// console.log('Hello')
// })
//If we want to print each element of array with a word then:
// var arr=[10,20,30]
// arr.forEach(function(elem){   //This function runs for 4 time because array length is 4.
// console.log('Hello',elem)
// })
// OBJECTS. ()=Function,{}=Objects []=Array
// var obj = {
//   user: "Harsh",
//   age: 20,
//   greet: function () {
//   console.log("Good Morning")
//   }
// };
// console.log(obj.age);
// obj.greet(); // Calling method.
// OBJECTS IN ARRAY.
// var arr = [
//   { name: "Vansh", age: 21 },
//   { name: "Vikas", age: 69 },
//   { name: "Vin", age: 69 },
// ];
// console.log(arr)
// console.log(arr[0].name)
// DOM-DOCUMENT OBJECT MODEL (Frontend ki javascript)
/* Four Pillars of DOM 
-Selection of an element
-Changing HTML
-Changing CSS
-Event Listener*/
// var h1 = document.querySelector("h1")
// console.log(h1);
/* if there is div with class or id then
document.querySelector('.ele')
document.querySelector('#ele')*/
// CHANGING HTML
// h1.innerHTML="Changed"
//CHANGING CSS
// h1.style.color='red'
// h1.style.backgroundColor="royalblue"
//EVENT LISTENER
// var h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//   console.log("HELLO");
// });
                                           
