const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
window.requestAnimationFrame(draw);
const pos = { x:canvas.width/2, y:canvas.height/2, speed : 5};

function draw() {
pos.x += pos.speed;
if(pos.x > canvas.width){ pos.x =0;}
console.log(pos.x);
createImage();
window.requestAnimationFrame(draw);
}

function createImage(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(pos.x,pos.y,50,0,2*Math.PI);
ctx.fill();
}

