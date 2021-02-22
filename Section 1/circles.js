const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(320, 320, 200, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.moveTo(240, 250);
ctx.fillStyle = 'black';
ctx.arc(200, 250, 40, 0, 2 * Math.PI);
ctx.moveTo(440, 250);
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
//arc(x, y, radius, startAngle, endAngle, anticlockwise)