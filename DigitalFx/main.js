gsap.from(".img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: 60,
})
gsap.from(".img1", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60,
})
gsap.from(".img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60,
})
gsap.from(".main h2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
})
gsap.from(".main h5,.main2 h1, .main2 .about", {
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".main2 h5",
        scroller: "body",
        start: "top 50%",
    }
})