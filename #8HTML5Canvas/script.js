const canvas = document.getElementById("draw");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = "round";
ctx.lineJoin = "round";

ctx.lineWidth = 100;

let direction = true;

let penDown = false;

let lastX = 0, lastY = 0;

let hue = 0;

//ctx.globalCompositeOperation ="multiply";

function draw(e) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    if(!penDown){return}
    ctx.beginPath()
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    //lastX=e.offsetX; lastY=e.offsetY; - alternative below, using destructuring an array
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if(ctx.lineWidth >= 100 || ctx.lineWidth <=1) {
        direction = !direction;
    }

    direction? ctx.lineWidth++: ctx.lineWidth--;
}

document.addEventListener('mousedown', (e) => {
    penDown = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

document.addEventListener('mousemove', draw);
document.addEventListener('mouseup', () => penDown = false);