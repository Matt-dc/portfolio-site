$(document).ready(function(){

  $("#to-top").click(function(){
    $('html, body').animate({scrollTop: 0}, 400);
  });
});


var bgImg = document.getElementById('bg-image');
var siteName = document.getElementById('site-name');
var downArrow = document.getElementById('down-arrow');


//Front cover loader
var tlLoader = new TimelineMax();

tlLoader
  .from(siteName, 2, { autoAlpha: 0, scale: 1.5 })
  .from(bgImg, 2.5, {autoAlpha: 0, scale: 1.5, ease: Power1.easeOut }, '-=2')
  .from(downArrow, 0.7, {scaleY: 0, transformOrigin: "center top", ease: Power1.easeOut})
  .from('#li-1', 0.2, {autoAlpha: 0,  x: -200, ease: Power1.easeOut })
  .from('#li-2', 0.2, {autoAlpha: 0,  x: -200, ease: Power1.easeOut })
  .from('#li-3', 0.2, {autoAlpha: 0,  x: -200, ease: Power1.easeOut })
  .from('#li-4', 0.2, {autoAlpha: 0,  x: -200, ease: Power1.easeOut })
  .from('#li-5', 0.2, {autoAlpha: 0,  x: -200, ease: Power1.easeOut })

var controller = new ScrollMagic.Controller();


// set the timeline for fade out
var tlMain = new TimelineMax()
.add([
  TweenMax.to(bgImg, 2, {scale: 1.3, ease: Power1.easeInOut }),
  TweenMax.to(siteName, 2, { scale: 0.7, y: -20, autoAlpha: 0, ease: Power1.easeInOut }),
  TweenMax.to('.top-nav', 2, {autoAlpha: 0, ease: Power1.easeInOut }),


]);

// link animation to the scroll action
var home = new ScrollMagic.Scene({
  triggerElement: ".scene-pin1",
  triggerHook: 0,
  duration: '120%' // Nb: needs to be long enough to avoid img break
})
.setTween(tlMain)
.setPin('.scene-pin1')
.addIndicators()
.addTo(controller);


// Timeline for fading in about section

var about = new TimelineMax()
.add([
  TweenMax.to(bgImg, 2, { autoAlpha: 0 }),
  //.from('.about-section', 1, { autoAlpha: 0 })
  TweenMax.from('.about-section', 5, { autoAlpha: 0 }),

])

// link animation to the scroll action
var about = new ScrollMagic.Scene({
  triggerElement: '.about-section',
  triggerHook: 0,
  duration: '50%'
})
.setTween(about)
.setPin('.about-section')
.addIndicators()
.addTo(controller);


// fade out about section
var portfolio = new TimelineMax()
.add([
  TweenMax.to('.project-cover', 2, { autoAlpha: 0 }),
  TweenMax.from('#project1', 5, { x:  375 }),
  TweenMax.from('#project2', 5, { x:  175 }),
  //TweenMax.from('#project3', 5, { x: -100, autoAlpha: 0 }),
  TweenMax.from('#project4', 5, { x: -190 }),
  TweenMax.from('#project5', 5, { x: -380 }),

])

var about1 = new ScrollMagic.Scene({
  triggerElement: '.portfolio-section',
  triggerHook:0,
  duration: '100%'
})
.setTween(portfolio)
.setPin('.portfolio-section')
.addIndicators()
.addTo(controller);



var interestIcon = document.getElementsByClassName('interest-icon');


var interestIn = new TimelineMax()
  .staggerFrom(interestIcon, 0.5, { y: -120, autoAlpha: 0 }, 0.2)
  .staggerFrom(interestIcon, 1, { rotationY: 360})

var interest = new ScrollMagic.Scene({
  triggerElement: '.about-me',
  triggerHook: 0,  //trigger event when element is at 0 - top of page
  reverse: false
})
.setTween(interestIn)
.addTo(controller);



var portfolioHeader = document.getElementById("portfolio-header");

var portfolioIn = new TimelineMax()
  .from(portfolioHeader, 2, {autoAlpha: 0})
  .from('#top-line', 2, { width: 1, transformOrigin: "center", x: 470 }, '-=1')
  // .from('.project', 2, {autoAlpha: 0 })

  var portfolioScroll = new ScrollMagic.Scene({
    triggerElement: '#about-line-3',
    triggerHook: 0
  })
  .setTween(portfolioIn)
  .addTo(controller)

var dropperIn = new TimelineMax()
  .from('#drop2',0.2, {y : -50, autoAlpha: 0 })
  .from('#drop3',0.2, {y : -100, autoAlpha: 0 })

var dropScroll = new ScrollMagic.Scene({
  triggerElement: '.portfolio',
  triggerHook: 0
})
.setTween(dropperIn)
.addTo(controller)
