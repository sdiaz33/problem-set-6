/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  var context = document.getElementById('canvas1')
  var context = canvas1.getContext('2d');
  context.font = '48px sans-serif';
  context.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  var rectangle = document.getElementById('canvas2');
  if (canvas2.getContext) {
    var context = canvas2.getContext('2d');
    let heightInput = prompt("Height: ");
    let widthInput = prompt("Width: ");
    let xInput = prompt("X: ");
    let yInput = prompt("Y: ");
    context.clearRect(0, 0, rectangle.width, rectangle.height);
    context.strokeRect(xInput, yInput, heightInput, widthInput);
  }

  if (heightInput<1) {
    alert("Your height is too small.");
  }

  if (widthInput<1) {
    alert("Your width is too small.");
  }

  if (xInput<5) {
    alert("Your X is too small.");
  }

  if (yInput<5) {
    alert("Your Y is too small.");
  }

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

  let rectangleDrawing = document.getElementById('canvas3');
  let context = rectangleDrawing.getContext("2d");
  context.clearRect(0, 0, rectangleDrawing.width, rectangleDrawing.height);

  let color;

    color = prompt("Please enter a color");
    if (color=="black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color=="red" || color=="yellow") {
      context.fillStyle = color;
      context.fillRect(10, 10, 100, 50);
    } else {
      window.alert('This is not a supported color.');
      context.clearRect(0, 0, rectangleDrawing.width, rectangleDrawing.height);
    }


}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const triangle = document.getElementById('canvas4');
  const ctx = triangle.getContext('2d');
  let side1;
  let side2;
  let side3;

  ctx.clearRect(0, 0, triangle.width, triangle.height);

  while(true) {
    side1 = Number(prompt("Side 1: "));
    side2 = Number(prompt("Side 2: "));
    side3 = Number(prompt("Side 3: "));
    if ((side1 * side1) + (side2 * side2) == (side3 * side3)) {
      side1 > 0 && side2 > 0 && side3 > 0 &&
      canvas4.width-10-side1 >= 0 && canvas4.height-10-side2 >= 0 && canvas4.height-10-side3 >= 0
        break;
    }
    else {
      alert("That is not a valid triangle.");
    }
  }
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 10 + side1);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 10 + side1);
  ctx.lineTo(10 + side2, 10 + side1);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10 + side2, 10 + side1);
  ctx.stroke();

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const smileyFace = document.getElementById('canvas5');
  const ctx = smileyFace.getContext('2d');

  let radius = 0;

  do{
   radius = Number(prompt("Please enter the radius:"));
  } while (radius < 10 || isNaN(radius) == true)

  ctx.beginPath();
  ctx.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(radius + 10, radius + 10, radius * 0.7, 0, Math.PI * 1);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(radius - 10, radius - 10, radius * 0.10, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(radius + 35, radius - 10, radius * 0.10, 0, Math.PI * 2);
  ctx.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  const star = document.getElementById('canvas6');
  const ctx = star.getContext('2d');

  ctx.clearRect(0, 0, star.width, star.height);

    let innerRadius = Number(prompt("Enter the Inner Radius: "));
    let outerRadius = Number(prompt("Enter the Outer Radius: "));

    if (outerRadius >= innerRadius && star.width >= outerRadius + 125 && star.height >= outerRadius + 125 && innerRadius >= 1 && outerRadius >=1) {
      let point = 5;
      let x1 = [];
      let y1 = [];
      let x2 = [];
      let y2 = [];

      for (let i = 0; i < point; i++) {
        x1.push(Math.cos((Math.PI*2*i) / point - (Math.PI / 2)) * outerRadius + 125);
        y1.push(Math.sin((Math.PI*2*i) / point - (Math.PI / 2)) * outerRadius + 125);
        x2.push(Math.cos((Math.PI*2*i) / point - (Math.PI / 2)) * innerRadius + 125);
        y2.push(Math.sin((Math.PI*2*i) / point - (Math.PI / 2)) * innerRadius + 125);
      }

    ctx.beginPath();
    ctx.moveTo(x1[0], y1[0]);

    for (let z = 0; z < x1.length; z++) {
      ctx.lineTo(x2[z], y2[z]);
      ctx.lineTo(x1[z + 1], y1[z + 1]);
    }
    ctx.lineTo(x1[0], y1[0]);
    ctx.stroke();
    ctx.closePath();
  } else {
    alert("Your outer radius mujst be larger than your inner radius")
  }

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  const stopSign = document.getElementById('canvas7');
  const ctx = stopSign.getContext('2d');

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(66, 10);
  ctx.lineTo(146, 10);
  ctx.lineTo(202, 66);
  ctx.lineTo(202, 146);
  ctx.lineTo(146, 202);
  ctx.lineTo(66, 202);
  ctx.lineTo(10, 146);
  ctx.lineTo(10, 66);
  ctx.closePath();

  ctx.fill();
  ctx.lineWidth = 0;
  ctx.font = "60px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("STOP", 30, 130);

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  const pyramid = document.getElementById('canvas8');
  const ctx = pyramid.getContext('2d');

  ctx.clearRect(0, 0, ctx.width, ctx.height);

  let length = Number(prompt("Enter Length:"));
  let x = 10;
  let y = pyramid.height - 10;
  let i = 0;
  let line = 0;

  while (i < 5) {
    for (let n = line; n <= 5; n += 1) {
      ctx.rect(x, y - length, length, length);
      ctx.stroke();
      x += length;
    }
    x = 10 + (length / 2) * line;
    y = y - length;
    line += 1
    i += 1;
  }
  ctx.beginPath();
  ctx.closePath();

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

  const house = document.getElementById('canvas9');
  const ctx = house.getContext('2d');

  ctx.clearRect(0, 0, ctx.width, ctx.height);

    let hColor;
    let dColor;
    let length = 700;
    let height = 500;
    let x = 150;
    let y = house.height - height - 10;

    while (true){
      hColor = prompt("House Color: ");
      dColor = prompt("Door Color: ");
      if ((hColor == "black" || hColor == "blue" || hColor == "green" || hColor == "purple" || hColor == "red" || hColor == "yellow" || hColor == "orange")
      && (dColor == "black" || dColor == "blue" || dColor == "green" || dColor == "purple" || dColor == "red" || dColor == "yellow" || dColor == "orange")){
          break;
      } else {
        alert("The Color is Not Supported");
      }
    }

    ctx.beginPath();
    ctx.fillStyle = hColor;
    ctx.fillRect(x, y, length, height);

    ctx.fillStyle = dColor;
    ctx.fillRect(x + (length / 2) - 30, y + 400, 85, 200);
    ctx.strokeRect(x + (length / 2)- 30, y + 400, 85, 200);
    ctx.stroke();

    ctx.fillStyle = "gray";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 350, 50);
    ctx.lineTo(x + length, y);
    ctx.lineTo(x, y);
    ctx.fill();

    ctx.fillStyle = "lightblue";
    ctx.fillRect(665, y + 150, 75, 75);
    ctx.fillRect(275, y + 150, 75, 75);
    ctx.fillRect(665, y + 350, 75, 75);
    ctx.fillRect(275, y + 350, 75, 75);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(545, 700, 6, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();

}
