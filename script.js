// Get the canvas object from the DOM (document object model)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas.width = document.innerWidth;
// canvas.height = document.innerHeight;
canvas.width = 500
canvas.height = 500

const circle = {
    x: 200,
    y: 200,
    radius: 30,
    dx: 5,
    dy: 4,
}

// function animate() {
//     // Clear
//     ctx.clearRect(0, 0, 500, 500)

//     // Draw
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
//     ctx.fillStyle = 'red'
//     ctx.fill()

//     // Update location
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     if (circle.x + circle.radius > canvas.width) {
//         circle.dx *= -1
//     }

//     if (circle.x - circle.radius < 0) {
//         circle.dx *= -1
//     }

//     if (circle.y + circle.radius > canvas.height) {
//         circle.dy *= -1
//     }

//     if (circle.y - circle.radius < 0) {
//         circle.dy *= -1
//     }

//     requestAnimationFrame(animate);
// }

// animate();



//=============================================================================
// Rectangles

// fillRect(x, y, width, height)
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);

// strokeRect(x, y, width, height)
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.strokeRect(100, 100, 150, 100);



// // NOTE: Images are loaded async so this won't happen immediately
// const sprite = new Image();
// sprite.src = "player.jpg";
// sprite.onload = loadImages;

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.drawImage(spite, 0, 0, sprite.width, sprite.height);
//     updatePosition();
//     requestAnimationFrame(animate);
// }

// let numOfImages = 1;
// function loadImages() {
//     if (--numOfImages > 0) return;
//     animate();
// }


// const playerImage = document.getElementById('playerImage');

// const player = {
//     x: 50,
//     y: 200,
//     w: 50,
//     h: 70,
//     speed: 5,
//     dx: 0,
//     dy: 0,
// }

// function drawPlayer() {
// }

// function updatePosition() {
//     player.x += player.dx
//     player.y += player.dy
// }

// function moveUp() {
//     player.dy = -player.speed
// }

// function moveDown() {
//     player.dy = player.speed
// }

// function moveRight() {
//     player.dx = player.speed
// }

// function moveLeft() {
//     player.dx = -player.speed
// }

// function keyDown(e) {
//     if (e.key === 'ArrowRight' || e.key === 'Right') {
//         moveRight();
//     } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
//         moveLeft();
//     } else if (e.key === 'ArrowUp' || e.key === 'Up') {
//         moveUp();
//     } else if (e.key === 'ArrowDown' || e.key === 'Down') {
//         moveDown();
//     }
// }

// function keyUp(e) {
//     if (e.key === 'ArrowRight' ||
//         e.key === 'Right' ||
//         e.key === 'ArrowLeft' ||
//         e.key === 'Left' ||
//         e.key === 'ArrowUp' ||
//         e.key === 'Up' ||
//         e.key === 'ArrowDown' ||
//         e.key === 'Down') {
//         player.dx = 0
//         player.dy = 0
//     }
// }

// update();

// document.addEventListener('keydown', keyDown)
// document.addEventListener('keyup', keyUp)


// function update() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)

//     drawCircle();

//     circle.x += circle.dx;
//     circle.y += circle.dy;
//     circle.radius += circle.dRadius

//     if (circle.x + circle.radius > canvas.width) {
//         circle.dx *= -1
//         circle.dRadius *= -1
//     }

//     if (circle.x - circle.radius < 0) {
//         circle.dx *= -1
//         circle.dRadius *= -1
//     }

//     if (circle.y + circle.radius > canvas.height) {
//         circle.dy *= -1
//         circle.dRadius *= -1
//     }

//     if (circle.y - circle.radius < 0) {
//         circle.dy *= -1
//         circle.dRadius *= -1
//     }

//     requestAnimationFrame(update);
// }

// update();

// //=============================================================================
// // Paths

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50); // or ctx.closePath();
// ctx.fillStyle = 'red';
// ctx.fill();
// // ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.fillStyle = 'blue';
// ctx.fill();


// //=============================================================================
// // Arcs (Happy Face)

// const x = canvas.width / 2
// const y = canvas.height / 2

// ctx.beginPath();

// // Head
// ctx.arc(x, y, 200, 0, Math.PI * 2)
// ctx.stroke()

// // Mouth
// ctx.moveTo(x + 100, y)
// ctx.arc(x, y, 100, 0, Math.PI, false)
// ctx.stroke()

// // Left eye
// ctx.moveTo(x - 60, y - 80)
// ctx.arc(x - 80, y - 80, 20, 0, Math.PI * 2)
// ctx.fillStyle = 'blue';
// ctx.fill()

// // Right eye
// ctx.moveTo(x + 100, y - 80)
// ctx.arc(x + 80, y - 80, 20, 0, Math.PI * 2)
// ctx.fillStyle = 'green';
// ctx.fill()



// //=============================================================================
// // Text

// // fillText(x, y, width, height)
// // strokeText
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50);
