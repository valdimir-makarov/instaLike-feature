var tl= gsap.timeline();

tl.from("#nav",{
  y:-100,
  delay:1,
opacity:0,
duration:2,
stagger:1,
  
  

})
tl.from("#banner h1",{
  x:-100,
  delay:1,
opacity:0,
duration:1,
stagger:1,
})
tl.from("#banner-2 img",{
  scale:2,
  y:-100,
  delay:1,
opacity:0,
duration:2,
stagger:1,
})
tl.from("#page-2 .box,#img-section img",{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.3,
   scrollTrigger:{
    trigger:"#page2 .cards",
    scroller:"body"
   }
})
tl.from("#img-section img",{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.3,
   scrollTrigger:{
    trigger:"#page2 .cards",
    scroller:"body"
   }
})