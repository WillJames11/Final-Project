const mover = document.getElementById("character");
let X = 100; 
let Y = 100; 
mover.style.left = `${X}px`;
mover.style.top = `${Y}px`;
const Fast = 10;
window.addEventListener("keydown", (e) => {
    switch (e.key) {
    case "ArrowUp":
    Y -= Fast;  
    break;
    case "ArrowLeft":
    X -= Fast;  
    break;
    case "ArrowDown":
    Y += Fast;  
    break;
    case "ArrowRight":
    X += Fast;  
    break;
    }
    mover.style.left = `${X}px`;
    mover.style.top = `${Y}px`;
});
//credit to Code With Bubb for inspiration but I also changed most of the code(video name: How to move an object with arrow keys using java script)