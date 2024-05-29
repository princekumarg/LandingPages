var crsr = document.querySelector('.cursor')
var cur = document.querySelector('.curb')
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    cur.style.left = dets.x - 200 + "px"
    cur.style.top = dets.y - 200 + "px"
})

gsap.to('.nav', {
    backgroundColor: '#000',
    duration: 0.5,
    height: '80px',
    scrollTrigger: {
        trigger: '.nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})
gsap.to('.main', {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.main',
        scroller: 'body',
        // markers: true,
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2
    }
})