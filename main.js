canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "Purple";
ctx.lineWidth= 5;
ctx.rect(185, 195, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "Black";
ctx.lineWidth= 5;
ctx.rect(195, 205, 410, 180);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(310, 270, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(400, 270, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(490, 270, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(356, 320, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(445, 320, 40, 0, 2*Math.PI);
ctx.stroke();
