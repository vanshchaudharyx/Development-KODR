var elem = document.querySelectorAll(".elem"); // It only pick starting element.
// var elemImage = document.querySelector("#elem1 img");
// elem1.addEventListener("mousemove", function (dets) {
//     elemImage.style.left=dets.x+"px"
//     elemImage.style.top=dets.y+"px"

// });
// elem1.addEventListener("mouseenter", function (dets) {
//     elemImage.style.opacity=1;

// });
// elem1.addEventListener("mouseleave", function (dets) {
//     elemImage.style.opacity=0;

// });
elem.forEach(function (val) {
  //console.log(val)// It selects the all elem
  console.log(val.childNodes);

  val.addEventListener("mouseenter", function (dets) {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function (dets) {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", function (dets) {
   img.style.left = dets.x - 55 + "px"; 
    img.style.top = dets.y - 55 + "px";
  });
});
