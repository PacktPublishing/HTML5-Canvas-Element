const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const str = "Hello World";
ctx.font = 'italic 50px Comic';
ctx.fillStyle = 'blue';
//ctx.textAlign = 'left';
ctx.fillText(str, 100, 100);
ctx.font = 'bold 30px Arial';
ctx.fillStyle = 'red';
ctx.shadowOffsetX = -3;
ctx.shadowOffsetY = -2;
ctx.shadowBlur = 2;
ctx.shadowColor = 'rgba(0,0,0,0.8)';
for (let x = 1; x < 11; x++) {
  ctx.save();
  let tog = x % 2 ? -1 : 1;
  ctx.scale(tog, 1);
  ctx.fillText("counter:" + x, 350 * tog, (200 + (40 * x)));
  ctx.restore();
}