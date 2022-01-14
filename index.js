// gsap.registerPlugin(ScrollTrigger);

// gsap.defaults({
//     ease: "power2",
//     duration: 1
// })

// const animation1 = gsap.timeline();

// animation1.to({}, 1, {},  "o");

// animation1.fromTo("#text-ilu", { 
//     y: "50vw",
//     opacity: 0,
//  }, { 
//      y: "50vw",
//      opacity: 1 
//     });

// animation1.to({}, 1, {},  "o");

// animation1.from("#text-hola", {
//     y: "50vw"
// }, "a");

// animation1.to("#text-ilu", {
//     y: 0
// }, "a");

// animation1.from(".hola-img", {
//     "background-position-x": "100vw"
// });

// animation1.from(".instagram", {
//     opacity: 0
// })

// animation1.to({}, 0.5, {});


// ScrollTrigger.create({
//     animation: animation1,
//     trigger: ".hola",
//     end: "+=4000",
//     snap: {
//         snapTo: [1],
//         delay: 0,
//         ease: "none",
//         inertia: false,
//         duration: {
//             min: 0.2,
//             max: 4
//         }
//     },
//     pin: true,
//     scrub: true,
//     // markers: true,
// })