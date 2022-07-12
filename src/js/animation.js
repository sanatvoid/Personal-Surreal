import {gsap} from 'gsap';

console.log('hello world')
var wires = document.getElementsByClassName('wires');
// gsap.from(wires,{
//     scale:5, 
//     opacity: 0, 
//     duration: 10,
//     orgin: "center center"
// });

//Mouse Move
document.addEventListener('mousemove', move);
function move(event) {
    gsap.to(wires,{
        x: event.movementX*2,
        y: event.movementY*2,
        // scale:1.1,
        // scale: event.movementX,
        // opacity: -event.movementX,
        duration: 1,
        stagger: 0.03
    });
}



