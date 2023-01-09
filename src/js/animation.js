import {gsap} from 'gsap';

console.log('hello world')

// get a random number between -100 and 100 (no snapping)
gsap.utils.random(-100, 100);

// get variables
var wires = document.getElementsByClassName('wires');
var monk = document.getElementsByClassName('monk');
var moons = {
    red: document.getElementsByClassName('redMoon'),
    yellow: document.getElementsByClassName('yellowMoon')
};


//Mouse Move
document.addEventListener('mousemove', move);
function move(event) {
    gsap.to(wires,{
        x: event.movementX*2.5,
        y: event.movementY*2.5,
        duration: 1,
        stagger: 0.03
    });
}

//Mouse Move
document.addEventListener('mousemove', move2);
function move2(event) {
    gsap.to(monk,{
        x: event.movementX,
        y: event.movementY,
        duration: 0.5
    });
}

var tl = gsap.timeline({
    repeat: -1,
    yoyo: true
});

tl.to(monk,{
    ease: "Power4.easeIn",
    x:0,
    y: -15,
    duration: 2,
    delay: 0
    })
    .to(wires,{
    ease: "Power4.easeInOut",
    x:0,
    y: -50,
    duration: 2,
    stagger: 0.06
    });
tl.play();


// Animate moons Red
var moveMoonRed = gsap.timeline({
    repeat: -1,
    repeatRefresh:true,
    yoyo: true
});

moveMoonRed.to(moons.red,{
    ease:"Power4.ease",
    x: "random(-39, 27, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: "random(-42, 10, 3)",
    rotate: "random(0, 10)",
    duration: 2,
    // delay: 0,
    
    });
moveMoonRed.play();

// Animate moons Yellow
var moveMoonYellow = gsap.timeline({
    repeat: -1,
    repeatRefresh:true,
    yoyo: true
});

moveMoonYellow.to(moons.yellow,{
    ease:"Power4.ease",
    x: "random(-45, 30, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: "random(-35, 26, 3)",
    rotate: "random(0, 10)",
    duration: 3,
    // delay: 0
    });
moveMoonYellow.play();
