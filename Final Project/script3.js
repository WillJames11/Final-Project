var canvas = document.getElementById('canvasFORTRAIL');
var d = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var trail = [];
document.addEventListener('mousemove', function(event) {
    trail.push({
        x: event.clientX,
        y: event.clientY,
        sigma: 1.1 
    });
});
function Trailthingie() {
    d.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < trail.length; i++) {
        var circletrails = trail[i];
        d.fillStyle = 'red'; 
        d.fill();
        circletrails.sigma -= 0.03; 
        if (circletrails.sigma <= 0) {
            trail.splice(i, 1);
            i--; 
        }
        d.globalAlpha = circletrails.sigma;
        d.beginPath();
        d.arc(circletrails.x, circletrails.y, 15, 0, Math.PI * 2);
    }
    requestAnimationFrame(Trailthingie);
}
Trailthingie();
//Credit to Code Morphism for inspiration but I changed most of the code (video name: Satisfying Black Fire Cursor Trail Animation)