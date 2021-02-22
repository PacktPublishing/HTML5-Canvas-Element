const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const colorz = ctx.createLinearGradient(0, 0, 400, 400);
colorz.addColorStop(0, '#00ff00');
colorz.addColorStop(0.5, '#ff0000');
colorz.addColorStop(1, '#0000ff');
const colorz2 = ctx.createRadialGradient(300, 300, 0, 300, 300, 200);
colorz2.addColorStop(0, '#00ff00');
colorz2.addColorStop(0.5, '#ff0000');
colorz2.addColorStop(1, '#0000ff');
ctx.fillStyle = colorz2;
ctx.fillRect(100, 100, 500, 500);
ctx.strokeStyle = colorz2;
ctx.lineWidth = 10;
ctx.moveTo(10, 0);
ctx.lineTo(10, 500);
ctx.stroke();

ctx.rotate(30);