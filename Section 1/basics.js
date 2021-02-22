const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(100,100,500,300); //filled shape
ctx.strokeRect(90,90,520,320); // outline
ctx.clearRect(150,150,400,200);  //transparent

ctx.fillStyle = "#0000ff";
ctx.fillRect(40,40,100,100);

ctx.fillStyle = "#0f0";
ctx.fillRect(80,80,100,100);

ctx.fillStyle = "rgb(255,0,255)";
ctx.fillRect(120,120,100,100);

ctx.fillStyle = "rgba(255,0,255,0.1)";
ctx.fillRect(20,20,400,400);


ctx.fillStyle = 'red';
ctx.strokeStyle = "blue";
ctx.rect(100,100,200,100);
ctx.fill();
ctx.stroke();

ctx.strokeRect(200,200,200,100);

ctx.beginPath(300,300);
ctx.moveTo(50,400); //move pen
ctx.lineTo(50,100); // draws a line 
ctx.lineTo(500,100); // draws a line 
ctx.lineTo(500,400); // draws a line 
ctx.lineTo(80,300); // draws a line 
//ctx.fill();
ctx.stroke(); //applies the shape by drawing
ctx.closePath();
ctx.fillStyle = "purple";
ctx.strokeStyle = "purple";
ctx.beginPath(320,50);
ctx.moveTo(320,50);
ctx.lineTo(520,250);
ctx.lineTo(120,250);
ctx.lineTo(320,50);
ctx.fill();
ctx.stroke();








