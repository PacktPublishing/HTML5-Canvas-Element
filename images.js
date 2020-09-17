const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const logo = document.querySelector('img');
logo.style.display = 'none';
//ctx.drawImage(logo,50,50);
//ctx.drawImage(logo,50,350,100,100);
const myImg = new Image();
myImg.src = 'http://www.discoveryvip.com/img/d.png';
myImg.onload = function () {
  ctx.drawImage(myImg, 50, 50);
  //ctx.drawImage(myImg,50,350,100,100);
  ctx.drawImage(myImg, 50, 50, 100, 100, 100, 400, 200, 200);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(100, 100, 100, 100);
  ctx.strokeRect(100, 400, 200, 200);
}