// GSAP;
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_2",
        start: "0% 0%",
        end: "120% 0%",
        scrub: 1,
        pin: true
    }
});

tl.to(
    ".images .right",
    {
        marginTop: "0",
        duration: 2.5,
        duration: 1
    },
    0
);
tl.to(
    ".images .left",
    {
        marginTop: "150%",
        duration: 1
    },
    0
);

// 2nd html //

console.clear();

gsap.registerPlugin(ScrollTrigger);
const verticalContainer = document.getElementById("verticalContainer");
const leftSection = verticalContainer.querySelector(".left-section");
const rightSection = verticalContainer.querySelector(".right-section");
window.addEventListener("DOMContentLoaded", () => {
    gsap.timeline({
        defaults: {
            ease: "none",
        },
        scrollTrigger: {
            trigger: verticalContainer,
            start: "top top",
            end: "+=3000",
            pin: true,
            invalidateOnRefresh: true,
            markers: true,
            scrub: 0.5,
        },
    })
        .to(leftSection, {
            y: -(leftSection.clientHeight - verticalContainer.clientHeight)
        })
        .fromTo(rightSection, {
            y: (verticalContainer.clientHeight - rightSection.clientHeight)
        }, { y: 0 }, "<");
});