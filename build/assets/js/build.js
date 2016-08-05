// TweenMax.to('.hero', 2, {left: 600, backgroundColor: 'orange'});

// TweenMax.to('.hero', 4, {
//     x: 600,
//     rotation: 360,
//     scale:0.5
// });



// TweenMax.to('.hero', 2, {
//     x: 600,
//     ease: Back.easeOut
// });

// TweenMax.from('.hero__h1', 5, {
//     x: 600,
//     opacity:0,
//     ease: Bounce.easeOut
// });
//
// TweenMax.staggerFrom('.box', 0.5, {
//     opacity:0,
//     y: 200,
//     rotation: 360,
//     scale: 2,
//     delay: 5
// }, 0.2
//
// );
//
// TweenMax.to('.hero__h1, .box', 0.5, {
//     opacity:0,
//     delay: 10,
//     onComplete:complete
// });
//
// function complete() {
//     alert('thats all folks!!!!')
// }


var heroid = document.getElementById('Layer_1');

TweenLite.to(heroid, 1, {
    opacity: 0,
    y: 50
});

