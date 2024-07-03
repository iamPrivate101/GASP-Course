var initialPath = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  // console.log(dets.y);
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration:0.3,
    //gsap easing https://gsap.com/docs/v3/Eases/ watch this docs
    ease:"power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  // console.log("leaved");
  gsap.to("svg path",{
    attr:{d:finalPath},
    duration:2,
    ease:"elastic.out(1,0.1)"
  })
});
