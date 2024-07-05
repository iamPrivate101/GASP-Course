function breakTheText() {
  var heading = document.querySelector(".heading");
  var headingText = heading.textContent;

  var splitText = headingText.split("");
  var halfValue = splitText.length / 2;
  clutter = "";
  splitText.forEach(function (element, index) {
    if(index < halfValue){
      clutter += `<span class="left-span">${element}</span>`;
    }else {
      clutter += `<span class="right-span">${element}</span>`;
    }
  });

  heading.innerHTML = clutter;
}

breakTheText();

// gsap.from(".heading span",{
//   y:50,
//   duration:1,
//   opacity:0,
//   delay:0.5,
//   stagger: 0.3
// })

gsap.from(".heading .left-span", {
  y:50,
  duration:1,
  opacity:0,
  delay:0.5,
  stagger:-0.3
})

gsap.from(".heading .right-span", {
  y:50,
  duration:1,
  opacity:0,
  delay:0.5,
  stagger:0.3

})