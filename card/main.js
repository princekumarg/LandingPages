const tl = gsap.timeline();
tl.from(".main-container .img", {
    y: -100,
    duration: 0.9,
    ease: Power1.easeInOut
}).from(".main-container h2", {
    x: -50,
    duration: 1.2,
    opacity: 0,
    ease: Elastic.easeOut
}, "-=0.5").from(".main-container p", {
    x: -50,
    duration: 1,
    opacity: 0,
    ease: Elastic.easeOut
}, "-=0.9").from(".main-container .btn", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: Elastic.easeOut
}, "-=0.7");
