Shery.mouseFollower()
Shery.makeMagnet(".magnet")
Shery.textAnimate(".lol")
Shery.hoverWithMediaCircle(".hvr", {videos: ["https://cuberto.com/assets/featured/header.mp4", "https://cuberto.com/assets/projects/puntopago/cover.mp4", "https://cuberto.com/assets/projects/kzero/cover.mp4?2", ""]})
Shery.hoverWithMediaCircle(".ani", {videos: ["https://cuberto.com/assets/projects/cisco/cover.mp4", "https://cuberto.com/assets/projects/potion/cover.mp4?2", "https://cuberto.com/assets/projects/zelt/cover.mp4", ""]})

gsap.to(".fleftlm", {
    scrollTrigger:{
        trigger: '#fimages',
        pin: true,
        start: 'top top',
        end: 'bottom bottom',
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})


let sections = document.querySelectorAll(".fleftlm")
Shery.imageEffect(".images", {
    style: 4,
    scrollSnapping: true,
    scrollSpeed: 6,
    touchSpeed: 6,
    damping: 7,
    // config: {onMouse: {value: 1}},
    // slideStyle: (setScroll) => {
    //     sections.forEach(function(section, index){
    //         ScrollTrigger.create({
    //             trigger: section,
    //             start: 'top top',
    //             scrub: 1,
    //             onUpdate: function(prog){
    //                 setScroll(prog.progress+index)
    //             }   
    //         })
    //     })
    // },
});