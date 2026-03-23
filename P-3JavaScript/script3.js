/*higher order funstions
  constructor functions
  first class functions 
  new keyword
  iife 
  prototype
  prototypal inheritence
  this call apply bind
  pure functions
  closures*/
/* HIGHER ORDER FNCNS- are the fncns which accepts a function in a parameter
or return a fncn or both*/
// function abcd(a){
//     a()
// }
// abcd(function(){console.log("HELLO")})
// // THIS abcd is a higher order function.
/* CONSTRUCTOR FUNCTION- normal function jisme this ka istemal ho and aap
   fnction ko call karte waqt new keyword ka use kre*/
// function frameofBiscuit() {
//   this.width = 12;
//   this.height = 22;
//   this.color = "brown";
//   this.taste = "sugary";
// }
// var bis1 = new frameofBiscuit();
// var bis2 = new frameofBiscuit();
/*jab apke pas aisa koi bhi mauka ho ki ek jaisi property wale
  kai element bnane hai to constructor function bnate hai*/
//EX-
// function circularButton(color){
//   this.radius=22
//   this.color=color
//   this.icon=false
//   this.pressable=false
// }
// var redbtn=new circularButton("red")
// var greenbtn=new circularButton("green")
// IIFE-Immediately invoked function expression.
// function ko turant chalane ki kala is tarike se ki ham log koi private variable bna paye.
// var ans = (function () {
//   var privateval = 12; // We cannot access a this is private.
//   return {
//     getter: function () {
//       console.log(privateval);
//     },
//     setter: function (val) {
//       privateval = val;
//     }
//   };
// })();
// in ans there is blank object
//PROTOTYPE.-whenever we created a object it get prototype property automatically.
/*prototype contains many helper properties and methods which we can use to complete
our task,many properties and methods are already available to use built by js creators 
inside prototype of every object.*/
//EX-
//var a={name:"VANSH"}
//console.log(a.hasOwnProperty("name"))// we dont created hasOwnProperty by the help of prototype we can use.
// PROTOTYPAL INHERITENCE
// var human = {
//   canfly: false,
//   cantalk: true,
//   canwalk: true,
//   hasEmotions: true,
//   hasFourLeg: false,
// };
// var SheriyansStudent = {
//   canMakeWebsites: true,
//   canMakeAwesomeAnimations: true,
// };
// //PROTOTYPAL INHERITENCE
// SheriyansStudent.__proto__=human
/* this call apply bind 
jab bhi koi cheez {} brackets ke andar nahi hoti to hum use global scope khte hai.*/
// var a=12  //global me this ki value->window
// function abcd(){
//   var a=6
// }
// console.log(this) // Function me this ki value->window
// function abcde(){
//   console.log(this)
// }
// abcde()
// var obj={
//   baatKaro:function(){
//     console.log(this)
//   }
// }
// obj.baatKaro() // object me this ki value->object
//IN ANY METHOD THIS KEYWORD ALWAYS REFERS TO PARENT OBJECT.
//EVENT LISTENERS.
// var button =document.querySelector("button")
// button.addEventListener("click",function(){
//   //These both lines are same
//   console.log(this.style.color="red")
//   // console.log(button.style.color="red")
// }) // This value always refers to button (i.e anything before addeventListener)
/*Call apply bind-> agar tumharee paas koi function hai and koi object hai tumhe 
  fncn chalaa hai aur by default jo this ki value window na rakh kar point lrwana
  hai kisi object ki taraf*/
// function abcd() {
//   console.log(this);
// }
// var obj = { age: 21 };
// //We want that this points obj instead of window
// abcd.call(obj);
// APPLY
// function abcd(val1,val2,val3){
//   console.log(this,val1,val2,val3)
// }
// var obj={age:21}
// abcd.call(obj,1,2,3) // Here 1,2,3 is passed for val1,val2,val3 and obj for this
// // Here apply starts-we pass other arguements as array.
// abcd.apply(obj,[4,5,6])
// //BIND-this bind abcf function to obj and give a new binded function.
// var bindedFunction=abcd.bind(obj)
// bindedFunction();
/*PURE AND IMPURE FUNCNS
Pure- It should always return same output for same input
      It will never change/update the value of a global variable.*/
//This gives always different outputs.
// function ab(val) {
//   return Math.random() * val;
// }
// var ans1 = ab(2);
// var ans2 = ab(2);
//PURE FNCN
// var def = 12;
// function abcd(a, b) {
//   var def = 24; //Now this is not a pure fncn because it changes the value of a global variable.
//   return a * b;
// }
// var ans1 = abcd(2, 2);
// var ans2 = abcd(2, 2);
