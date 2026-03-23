//DOM-DOCUMENT OBJECT MODEL
/* 4pillars of DOM
-Simple Example of bulb or whatever clicking on the same button
-Multiple Events
-Selecting multiple elements at a same time
-setTimeout
-setInterval
*/
/* 4 Pillars of DOM
1- Selection of an element
2-Changing HTML
3-Changing CSS
4-Event Listener*/
//1-
// var a=document.querySelector("h1")
// console.log(a)
//2-Changing HTML
// var a=document.querySelector("h1")
// a.innerHTML= "Changed" //It changed the text bw h1 tag
//3-Changing CSS
// var a=document.querySelector("h1")
// a.style.color="blue"
// a.style.backgroundColor="white"
//4- EVENT LISTENER
// var a = document.querySelector("h1");
// a.addEventListener("click", function () {
//   a.innerHTML = "Bdal gya mai";
//   a.style.color = "yellow";
//   a.style.backgroundColor = "black";
// });
// For BULB GLOW-
// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var flag = 0;
// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     flag = 0;
//   }
// });
// var h=document.querySelectorAll("h2")
// console.log(h) // It only prints the first h2 tag.
// /* If we want to print all h2 tags then write document.querySelectorAll("h1")
// in the form of nodelist that is similiar to array*/
// /* h.forEach(funtion(e){
// console.log(e)
// })
// /*we can also do
// document.getElementById("box")
// document.getElementByClass("box")*/
// // TEXTCONTENT Vs INNERHTML
// /* document.querySelector.textContent= "<h1>Hello</h1>" This print as it is
// but if we select document.querySelector= "<h1>Hello</h1>" This prints only Hello*/
