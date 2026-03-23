/*HOISTING- variables and function are hoisted whch means their 
   declaration is moved on the top og the code*/
// print before declaration.
// console.log(a); // O/P undefined
// var a = 12
// Differnce bw let nd const
/* var old js me tha
   var function scoped hai =>parent function me khi bhi use ho skta hai.
   var adds itself to the window.
   let const new js me hai
   let const braces scoped hota hai
   let const doesnt add.*/
// function abcd() {
//   for (var i = 0; i < 11; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// abcd()
/*js me kai sare features hai par kuch hai jo hum use karte hai wo 
 features wo nahi wo nahi hai par fir bhi use kar pate hai kyoki 
 wo features js language use kar leti hai window se. 
 aur window ek box of features given by browsers*/
/* LIKE
-Alert.
-Prompt.
*/
// var a=12
// cost =99
// let b=9 //if we open window in browser then u see var but not let
// browser context api includes many things
//  window
//  stack
//  heap memory
/* jitne bhi variables and intermediate data hmare program me hota 
hai uske liye heap memory hota hai*/
// ex 1+2+3+4.
/*Execution context-jab bhi ham function chalayege function 
apna ek khud ka imaginary container bana lega jisme uski teen chize hongi
EC is a container where the function's code is executed and its created whenever 
a function is called.
1- Variables.
2-inner functions.
3-Lexical Enviroment of that function.ye btata hai hamara function access kr hai
kya nahi.*/
//ye jo container hai imaginary isse hi execution context kahte hai.
//funtion chalne ke sath hi imaginary container bnta hai.
// function abcd() {
//   var a = 12;
//   function def() {
//     var b = 12;
//   }
// }
// abcd();
//How to copy refernce values
// var a = [1, 2, 3, 4, 5];
// var b = [...a]; // ...-spread operator
//We can also copy objects.
// var obj = { name: "Vansh" };
// FOR-EACH loop is used or array only
// var a = [1, 2, 3, 4];
// a.forEach(function (val) {
//   console.log(val + 2);
// });// val is a variable
/* FOR-EACH by default apke array me kbhi bhi changes nhi krta
   array ki temporary copy me change krta hai.*/
// Objects par loop karne ke liye hota hai FOR-IN
// var obj={
//    name:"Vansh",
//    age:21,
//    city:"LMP"
// }
// for (var key in obj ){
//    console.log(key) //This only prints key
//    console.log(obj[key]) //This prints the value.
//    console.log(key,obj[key]) //This prints the key value pair.

// }
// CALLBACK FUNCTIONS.
/*jab bhi aisa code bad me chalta hai aap likhoge kyuki wo code bad me
chalta hai js ko pata nahi hota ki wo complete hua ya nhi, aisa code ke completion
par js ko btaya jaata hai ki wo complete ho gya hai aur aap use chala skte
ho. ye btane ka kam callback ka hota hai*/
// Kai bar third party se kuch leke aata hai hame nhi pta hota kbtk leke ayega.
// This is acallback function which runs when give time is completed.
// setTimeout(function(){ // This is asynchronus js.
// console.log("2 second bad chalao")
// },2000) //2000ms=2s
// // This below code prints before the function because there is 2 seconds delay
// console.log('Normal exection continues')
/* FIRST CLASS FUNTIONS- js me ek concept hota hai jiska mtlb hota hai ki aap func
ko use kr skte ho as a value*/
// function abcd(a){
//     a()
// }
//  abcd(function(){console.log("hey")})
// JS converts and store the array in then form of object.
// var arr = [1, 2, 3, 4];
// //This is how they can stored
// var arr2 = {
//   0: 1,
//   1: 2,
//}
// If we want to check it it array or object.
// console.log(Array.isArray([])); //Return true.
// console.log(Array.isArray({})); //Return false.
// DELETING OBJECT PROPERTIES.
// var a={
//    name:"Vansh",
//    age:24
// }
// delete a.age
