// using to -> initial to final position
gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5, //make large or small
//   repeat: 5, //it will run for 6 times, by default 1 time and plus repeat 5 times
  repeat:-1,  //it will run for infinite time
  yoyo: true, //its like playing yoyo, initial to final and final to initial
});

// using from -> final position to initial position
gsap.from("#box2", {
  x: 1000,
  y: -300,
  duration: 2,
  delay: 1,
});

gsap.from("h1", {
  opacity: 0,
  duration: 3,
  delay: 1,
  y: 30,
  stagger: 1, //stagger will run the tag one by one
});


//timeline  ->will run the animation after the compeletion of first animation

var tl = gsap.timeline()

tl.to("#box3",  {
    x:1000,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box4",  {
    x:1000,
    rotate:360,
    duration:1.5,
    scale:0.7,
})

tl.to("#box5",  {
    x:1000,
    rotate:360,
    duration:1.5,
    scale:1.2,
    borderRadius:"50%",
})


//nav animation
var navtl = gsap.timeline()

navtl.from("h2", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

navtl.from("h4", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})

navtl.from("#title",{
    opacity:0,
    scale:0.2,
    duration:2
})