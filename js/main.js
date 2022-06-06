

const fadeEls = document.querySelectorAll('.intro .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1 ,{
    delay:(index +1)*.5,
    opacity:1
  });
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const headEl = document.querySelector('header');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 160){
    gsap.to(headEl, .6,{
      backgroundColor: '#171636',
    });
  }else{
    gsap.to(headEl, .6,{
      backgroundColor: "rgba(0,0,0,0)"
    });
    
  }
  }, 300));
