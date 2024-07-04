var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function(dets){
  // console.log(dets.x);
  gsap.to('#cursor',{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"expo.out",
  })
})

imageDiv.addEventListener("mouseenter", function(){
  // console.log("click");
  cursor.innerHTML = "View More"
  gsap.to('#cursor',{
    scale:2,
    duration:1
  })
})

imageDiv.addEventListener("mouseleave", function(){
  // console.log("click");
  cursor.innerHTML = ""
  gsap.to('#cursor',{
    scale:1,
    duration:1
  })
})