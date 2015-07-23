//Check canvas existence

function isCanvasSupported(){
 var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}





window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();


var canvas = document.getElementById("myDrawing");
     
                    var ctx = canvas.getContext("2d");
                     ctx.rotate(-0.15);
                    var x = canvas.width / 2;
                    var y = canvas.height / 2;
                    var radius = 100;
                    var startAngle = 0;
                    var endAngle = 2 * Math.PI;
     function drawFace() {
                   

                    ctx.beginPath();
                    ctx.arc(x, y, radius, startAngle, endAngle);
             ctx.fillStyle = "white";
          ctx.shadowColor = '#999';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX =10;
      ctx.shadowOffsetY = 10
      ctx.stroke();
      ctx.fill();
      ctx.save();
                    }

                    function drawSmile(){
                    var x = canvas.width / 2;
                    var y = 200
                    var radius = 50;
                    var startAngle = 1.1 * Math.PI;
                    var endAngle = 1.9 * Math.PI;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, startAngle, endAngle);
                    ctx.lineWidth = 2;
                    ctx.fillStyle="black";
                     ctx.fill();
                    // line color
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                    
                                            
                    }


                    function drawEyeLashLeft(){
                    var x = canvas.width / 2.5;
                    var y = 120
                    var radius = 40;
                    var startAngle = 1.2 * Math.PI;
                    var endAngle = 1.8 * Math.PI;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, startAngle, endAngle);
                    ctx.lineWidth = 5;
                   
                    // line color
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                    
                                            
                    }
                     
                                        function drawEyeBlushLeft(){
                    var x = canvas.width / 2.5;
                    var y = 120
                    var radius = 20;
                    var startAngle = 0.2 * Math.PI;
                    var endAngle = 0.8 * Math.PI;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, startAngle, endAngle);
                    ctx.lineWidth = 5;
                   
                    // line color
                    ctx.strokeStyle = 'pink';
                    ctx.stroke();
                    
                                            
                    }


                 
                    function drawEyeLashRight(){
                    var x = canvas.width / 1.7;
                    var y = 120
                    var radius = 40;
                    var startAngle = 1.2 * Math.PI;
                    var endAngle = 1.8 * Math.PI;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, startAngle, endAngle);
                    ctx.lineWidth = 5;
                   
                    // line color
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                    
                                            
                    }
                   
                    function drawEyeBlushRight(){
                    var x = canvas.width / 1.7;
                    var y = 120
                    var radius = 20;
                    var startAngle = 0.2 * Math.PI;
                    var endAngle = 0.8 * Math.PI;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, startAngle, endAngle);
                    ctx.lineWidth = 5;
                   
                    // line color
                    ctx.strokeStyle = 'pink';
                    ctx.stroke();
                    
                                            
                    }

                    function drawEyes(){
                        //right eye
                    var centerX = 40;
                    var centerY = 0;
                    var radius = 20;

                    // save state
                    ctx.save();

                    // translate context so height is 1/3'rd from top of enclosing circle
                    ctx.translate(canvas.width / 2, canvas.height / 2.8);

                    // scale context horizontally by 100%
                    ctx.scale(1, 1);

                    // draw circle which will be stretched into an oval
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

                    // restore to original state
                    ctx.restore();

                    // apply styling
                    ctx.fillStyle = 'none';
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'black';
                    ctx.stroke();

                    //left eye
                    var centerX = -40;
                    var centerY = 0;
                    var radius = 20;

                    // save state
                    ctx.save();

                    // translate context so height is 1/3'rd from top of enclosing circle
                    ctx.translate(canvas.width / 2, canvas.height / 2.8);

                    // scale context horizontally by 100%
                    ctx.scale(1, 1);

                    // draw circle which will be stretched into an oval
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

                    // restore to original state
                    ctx.restore();

                    // apply styling
                    ctx.fillStyle = 'none';
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                    }
                    

   function drawHappyFace(){
   drawFace();
   drawEyeLashLeft();
   drawEyeBlushLeft();
   drawEyeLashRight();
   drawEyeBlushRight();
   drawEyes();
   drawSmile();
}



if (isCanvasSupported()){ 
 //draw canvas if only the browser supports it
drawHappyFace();
}

function createRainbow() {
	
	var pieChart = new Rainbow( "rainbow", 
		{						data: [30, 30, 30,30,30,30,30,30,30,30,30,30],
			
			colors: [
            	["#FF0000"],
            	["#FF7FF0"],
            	["#FFFF00"],
                ["#00FF00"],
            	["#00FFFF"],
            	["#0000FF"],
                ["#8B00FF"],
            	["#FF0000"],
            	["#FF7FF0"],
            	["#FFFF00"],
                ["#00FF00"],
            	["#0000FF"]
			]
		}
	);

   
	pieChart.draw();

}

function Rainbow(id, o) {
	
	this.data = o.data ? o.data : [30, 70, 45, 65, 20, 130]; // in degrees
	
	this.colors = o.colors ? o.colors : [
        	["#bbddb3", "#1d8e04"], // green
        	["#e2f5b4", "#9edd08"], // yellow green
        	["#fdfbb4", "#faf406"], // yellow
        	["#fbd4b7", "#f2700f"], // orange
        	["#f8bdb4", "#ea2507"], // red
        	["#e2bcbd", "#9e2126"]  // purple
    	];

	this.canvas = document.getElementById(id);
    canvas2=this.canvas;
}

Rainbow.prototype = {
	draw: function() {
		var self = this;
		var context = this.canvas.getContext("2d");
        // Clear the canvas
  context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
  // Move registration point to the center of the canvas
  context.translate(this.canvas.width/2, this.canvas.width/2);
	
  // Rotate 1 degree
  context.rotate(Math.PI / 180);
    
  // Move registration point back to the top left corner of canvas
  context.translate(-this.canvas.width/2, -this.canvas.width/2);
       
		for (var i = 0; i < this.data.length; i++) {
			this.drawSegment(this.canvas, context, i, this.data[i], false);
		}
	},

	drawSegment: function(canvas, context, i, size, isSelected) {
		var self = this;
		context.save();
		var centerX = Math.floor(canvas.width / 2);
		var centerY = Math.floor(canvas.height / 2);
		radius = Math.floor(canvas.width / 2);
		
		var startingAngle = self.degreesToRadians(self.sumTo(self.data, i));
		var arcSize = self.degreesToRadians(size);
		var endingAngle = startingAngle + arcSize;

		context.beginPath();
		context.moveTo(centerX, centerY);
		context.arc(centerX, centerY, radius, startingAngle, endingAngle, false);
		context.closePath();
	    context.fillStyle = self.colors[i];
		context.fill();
		context.restore();
	},

	// helper functions
	degreesToRadians: function(degrees) {
		return (degrees * Math.PI)/180;
	},

	sumTo: function(a, i) {
		var sum = 0;
		for (var j = 0; j < i; j++) {
			sum += a[j];
		}
		return sum;
	}


}
createRainbow();

animate();  //  Start animating the star

      //  Animate calls the draw function every time the system lets it draw
      function animate() {
       createRainbow();
        //  requestAnimationFrame is a one shot function, needs to keep calling itself
        window.requestAnimationFrame(animate);
      }

function animateEye(canvas) {
        var context = canvas.getContext('2d');
        var time = (new Date()).getTime();

        // update
        var widthScale = Math.sin(time / 200) * 0.1 + 0.9;
        var heightScale = -1 * Math.sin(time / 200) * 0.1 + 0.9;

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        // draw
        context.beginPath();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(widthScale, heightScale);
        context.arc(0, 0, 15, 0, 2 * Math.PI, false);
        context.restore();
        context.fillStyle = 'black';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#555';
        context.stroke();
        context.beginPath();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(widthScale, heightScale);
        context.arc(-0.35, -2, 3.5, 0, 2 * Math.PI, false);
        
        context.restore();
        context.fillStyle = 'white';
        context.fill();
        for (var j=1;j<20;j++){
    context.save();
    context.fillStyle = 'white';
            context.scale(0.2,0.2);
    context.translate(1290-Math.floor(Math.random()*10),
                  540-Math.floor(Math.random()*90));
   context.scale(widthScale, heightScale); drawStar(context,Math.floor(Math.random()*4)+2);
    context.restore();
   
  }
        

        // request new frame
        requestAnimFrame(function() {
          animateEye(canvas);
        });
      }
      var canvas = document.getElementById('myCanvas');
      animateEye(canvas);
function drawStar(context,r){
  context.save();
  context.beginPath();
  context.moveTo(r,0);
  for (var i=0;i<40;i++){
    context.rotate(Math.PI/5);
    if(i%2 === 0) {
      context.lineTo((r/0.25)*0.20,0);
    } else {
      context.lineTo(r,0);
    }
  }
  context.closePath();
  context.fill();
  context.restore();
}
      function animateRightEye(canvas) {
        var context = canvas.getContext('2d');
        var time = (new Date()).getTime();

        // update
        var widthScale = Math.sin(time / 200) * 0.1 + 0.9;
        var heightScale = -1 * Math.sin(time / 200) * 0.1 + 0.9;

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        // draw
        context.beginPath();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(widthScale, heightScale);
        context.arc(0, 0, 30, 0, 2 * Math.PI, false);
        context.restore();
        context.fillStyle = 'black';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#555';
        context.stroke();
        context.beginPath();
        context.save();
        context.translate(canvas.width / 3, canvas.height / 3);
        context.scale(widthScale, heightScale);
        context.arc(-3, -6, 7.5, 0, 2 * Math.PI, false);
        
        context.restore();
        context.fillStyle = 'white';
        context.fill();
        for (var j=1;j<20;j++){
    context.save();
    context.fillStyle = 'white';
    context.translate(309-Math.floor(Math.random()*10),
                  140-Math.floor(Math.random()*80));
    drawStar(context,Math.floor(Math.random()*6)+2);
    context.restore();
   
  }
        

        // request new frame
        requestAnimFrame2(function() {
          animateEye(canvas);
        });
      }
         var canvas = document.getElementById('myCanvasRight');
      animateEye(canvas);
function drawStar(context,r){
  context.save();
  context.beginPath();
  context.moveTo(r,0);
  for (var i=0;i<9;i++){
    context.rotate(Math.PI/5);
    if(i%2 === 0) {
      context.lineTo((r/0.25)*0.10,0);
    } else {
      context.lineTo(r,0);
    }
  }
  context.closePath();
  context.fill();
  context.restore();
}

