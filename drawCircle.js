/* Assume our HTML file has a canvas setup already

<canvas id="myCanvas" width="500" height="500"></canvas>


GOAL: Draw a circle on the canvas using vanilla JS
*/

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.width / 2;
var radius = 10;

context.beginPath();
// arc(x, y, radius, starting Angle, end Angle, counter-clockwise?)
context.arc(centerX, centerY, radius, 0, 2 * Math*PI, false);

context.fillStyle = "black";
context.fill();

context.lineWidth = 1;
context.strokeStyle = "black";
context.stroke();



