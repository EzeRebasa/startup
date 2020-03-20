const canvas = document.getElementById("myCanvas"); // Search my canvas
const drawObject = canvas.getContext("2d"); // Create a drawing object 

let positionX = 0;
let positionY = 0;
let interval;

let drawAnimObject;
// Fill canvas
drawObject.fillStyle = "#116e56";
drawObject.fillRect(0, 0, 300, 150); // params (x, y , weight, height)

// Draw straight
drawObject.moveTo(0, 0); // Initial point
drawObject.lineTo(300, 150); // Final point
drawObject.stroke(); // todo the trace

// Draw circle
drawObject.fillStyle = "#E7FF33";
drawObject.beginPath(); // begins a path
drawObject.arc(50, 90, 30, 0, 2 * Math.PI);  // - creates an arc/curve params : (x,y,r,startangle,endangle) 
drawObject.fill();

drawObject.fillStyle = "#FF33D0";
drawObject.beginPath(); // begins a path
drawObject.arc(250, 60, 30, 0, 2 * Math.PI);  //  
drawObject.fill(); // fill the circle


function animate (){
   drawAnimObject = document.getElementById("myAnimCanvas").getContext("2d");
   interval = setInterval("draw()",100);
}
function draw () {
    drawAnimObject.clearRect(0,0,300,150);
    drawAnimObject.fillStyle = "#AED6F1";
    drawAnimObject.fillRect(positionX, positionY, 50, 50);
    if( positionX < 300){
        positionX += 10;

    }else{
        clearInterval(interval);
    }
    
}