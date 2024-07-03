gsap.from("#page1 #box", {
  scale: 0,
  rotate: 360,
  delay: 1,
  duration: 2,
});

gsap.from("#page2 #box", {
  scale: 0,
  rotate: 360,
  // delay:1,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    // markers: true,
    start: "top 40%",
  },
});


//enable animation when we scrolle to the resective section
gsap.from("#page3 h1", {
  x:500,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller:"body",
    // markers:true,
    start:"top 56%",
  }
})

gsap.from("#page3 h2", {
  x:-500,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
  }
})


//enable animation  along with the scroll
gsap.from("#page4 #box", {
  rotate:360,
  scale:0,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#page4 #box",
    scroller:"body",
    markers:true,
    start:"top 100%",
    end: "top 30%",
    //scrub handles the anamitionrespective to the scroll bar and interacts along with scrollbar
    // scrub:true , 1 to 5, for smoothness choose higer number but dont make too smooth
    scrub:3,
  }
}) 

/////////////////////////////////////////////////////////////////

// implementation.html gsap

gsap.to("#page7 h1",{
  duration:2,
  transform:"translateX(-180%)",
  scrollTrigger:{
    trigger: "#page7",
    markers:true,
    scroller:"body",
    start:"top 0%",
    end: "top -100%",
    scrub:3,
    pin:true,
  }
})
