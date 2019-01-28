/*
 * Hello. SOLUTION.
 */

function sayHello() {                                                               //declares sayHello function
  let c = document.getElementById("canvas1");                                       //sets variable c to be printed to the console
  let ctx = c.getContext("2d");                                                     //sets it to be a drawing

  ctx.clearRect(0, 0, c.width, c.height);                                           //sets the words with shape of rectangle to be printed
  ctx.font = "48px sans-serif";                                                     //sets font to "48px sans-serif"
  ctx.strokeText("Hello, World!", 10, 50);                                          //sets specifics to what the text will say "Hello, world!" and specific heiht and width measurements
}

/*
 * Rectangle. SOLUTION.
 */

function drawRectangle() {                                                          //declares drawRectangle function
  let height = Number(prompt("Height: "));                                          //prompts user to enter a number for height and will save that input as variable height
  let width = Number(prompt("Width: "));                                            //prompts user to enter a number for width and will save that input as variable width
  let x = Number(prompt("X: "));                                                    //prompts user to enter a number for x and will save that input as variable x
  let y = Number(prompt("Y: "));                                                    //prompts user to enter a number for y and will save that input as variable y

  let c = document.getElementById("canvas2");                                       //sets variable c to be printed to the console
  let ctx = c.getContext("2d");                                                     //sets it to be a drawing
  ctx.clearRect(0, 0, c.width, c.height);                                           //sets the shape of rectangle to be printed

  if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(x) || Number.isNaN(y)) {    //sets if statement for if one of the input are not a number
    alert("One of your inputs is not a number.");                                             //will alert one of the inputs is not a number
  } else if (width > 1023) {                                                                  //says width cannot be larger than 1023
    alert("The rectangle will not fit on the canvas.");                                       //will alert the rectangle will not fit on the canvas
  } else if (width < 1) {                                                                     //says width cannot be <1
    alert("Your width is too small.");                                                        //will alert the width input is too small
  } else if (height > 511) {                                                                  //says height cannot be >511
    alert("The rectangle will not fit on the canvas.");                                       //will alert the rectangle will not fit on the canvas
  } else if (height < 1) {                                                                    // says heiht cannot be <1
    alert("Your height is too small.");                                                       //will alert height is too small
  } else if ((width + x) > 1023) {                                                            // says width+x cannot be >1023
    alert("The rectangle will not fit on the canvas.");                                       //will alert the rectangle will not fit on the canvas
  } else if (x < 5) {                                                                         // says x cannot be <5
    alert("Your x-coordinate is too small.");                                                 //will alert that the y-coordinate is too small
  } else if ((height + y) > 511) {                                                            //says height+y cannot be > 511
    alert("The rectangle will not fit on the canvas.");                                       //will alert the rectangle will not fit on the canvas
  } else if (y < 5) {                                                                         //says y cannot be <5
    alert("Your y-coordinate is too small.");                                                 // says y-coordinate is too small
  } else {                                                                                    // if all of these condition are satified it does the next line
    ctx.strokeRect(x, y, width, height);                                                      //prints x and y as 0 and height and width
  }
}

/*
 * Color. SOLUTION.
 */

function drawColoredRectangle() {                                                   //declares drawColoredRectanle function
  let c = document.getElementById("canvas3");                                       //sets variable c to be printed to the console
  let ctx = c.getContext("2d");                                                     //sets it to be a drawing
  ctx.clearRect(0, 0, c.width, c.height);                                           //sets the shape of rectangle to be printed
  
  let color = prompt("Color: ");                                                    //prompts user to enter a color
  if (color === "black"  ||                                                         //if statement set to only accept black or....
      color === "blue"   ||                                                         //blue or....
      color === "green"  ||                                                         //green or...
      color === "orange" ||                                                         //orange or...
      color === "purple" ||                                                         //purple or...
      color === "red"    ||                                                         //red or...
      color === "yellow") {                                                         //yellow 

    ctx.fillStyle = color;                                                          //will fill redctangle with one of the allowed colors
    ctx.fillRect(10, 10, 100, 50);                                                  //sets dimensions for rectangle
  } else {                                                                          //if a not allowed color is inputed it does not line
    alert(color + " is not a supported color.");                                    //alerts user that color inputed is not a supported color
  }
}

/*
 * Triangle. SOLUTION.
 */

function drawTriangle() {                                                           //declares drawTriangle function
  let c = document.getElementById("canvas4");                                       //sets variable c to be printed to the console
  let ctx = c.getContext("2d");                                                     //sets it to be a drawing
  ctx.clearRect(0, 0, c.width, c.height);                                           //sets the shape of rectangle to be printed

  let s1 = Number(prompt("Side 1: "));                                              //prompts user to enter a number for side 1 and saves input as variable s1
  let s2 = Number(prompt("Side 2: "));                                              //prompts user to enter a number for side 2 and saves input as variable s2
  let s3 = Number(prompt("Side 3: "));                                              //prompts user to enter a number for side 3 and saves input as variable s3

  if (Number.isNaN(s1) || Number.isNaN(s2) || Number.isNaN(s3)) {                   //sets an if statement for if any of the side inputs is not a number
    alert("One of your inputs is not a number.");                                   //then will alert that one of the inputs is not a number
  } else if (((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1)) {            //if (((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1)) then it does the next few lines
      let side1 = Math.min(s1, s2, s3);                                             //will then declare side1 as Math.min(s1, s2, s3)
      let side3 = Math.max(s1, s2, s3);                                             //will then declare side3 as Math.max(s1, s2, s3)
      let side2 = (s1 + s2 + s3) - side1 - side3;                                   //will then declare side2 as (s1 + s2 + s3) - side1 - side3

      if (((side1 * side1) + (side2 * side2)) === (side3 * side3)) {                //if (((side1 * side1) + (side2 * side2)) === (side3 * side3)) then it will do the next two lines
        let x = 10;                                                                 //will then declare x as 10
        let y = 10;                                                                 //will then declare y as 10 

        if ((y + side1) > 511 || (x + side2) > 1023) {                              //if ((y + side1) > 511 || (x + side2) > 1023) then will do next lines
          alert("The triangle will not fit on the canvas.");                        //then will alert that the triangle will not fit on the canvas
        } else {                                                                    //otherwise it will do ...
          ctx.beginPath();                                                          //start the path to make a triangle

          ctx.moveTo(x, y);                                                         //makes path for triangle by startin at(x,y)
          ctx.lineTo(x, y + side1);                                                 //makes path for triangle moves it to (x,y+side1)
          ctx.lineTo(x + side2, y + side1);                                         //makes path for triangle moves it to (x+side,y+side1)
          ctx.lineTo(x, y);                                                         //makes path for triangle moves it to (x,y)

          ctx.closePath();                                                          //closes path
          ctx.stroke();
        }
      } else {                                                                      //otherside it...
        alert("This is not a valid right triangle.");                               //alerts that it is not a valid triangle
      }
  } else {                                                                          //otherside it...
    alert("That is not a valid right triangle.");                                   //alerts that it is not a valid triangle
  }
}

/*
 * Smile. SOLUTION.
 */

function drawSmileyFace() {
  let c = document.getElementById("canvas4");                                       //sets variable c to be printed to the console
  let ctx = c.getContext("2d");                                                     //sets it to be a drawing
  ctx.clearRect(0, 0, c.width, c.height);                                           //sets the shape of rectangle to be printed

  let radius = Number(prompt("Radius: "));                                          //prompts user to enter a number for radius and sets input as variable radius

  if (Number.isNaN(radius)) {                                                       //sets an if statement for if radius is not a number
    alert("Your input is not a number.");                                           //alerts that the input is not a number
  } else if (radius < 1) {                                                          // otherwise then if radius<1 then...
    alert("Your radius is too small.");                                             //will alert the radius is too small
  } else if ((radius * 2 + 10) > 511) {                                             // otherwise then if (radius * 2 + 10) > 511 then...
    alert("The smiley face will not fit on the canvas.");                           //will alert the smiley face will not fit on the canvas
  } else {                                                                          // otherwise then...
    let faceX = radius + 10;                                                        //will set faceX as radius+10
    let faceY = radius + 10;                                                        //will set faceY as radius+10

    ctx.beginPath();                                                                           //starts path to draw

    ctx.arc(faceX, faceY, radius, 0, Math.PI * 2, true);                                       //draws the face 
    ctx.moveTo(faceX + radius - radius * 0.3, faceY);                                          //sets a radius
    ctx.arc(faceX, faceY, radius * 0.7, 0, Math.PI, false);                                    //draw the mouth
    ctx.moveTo(faceX - radius * 0.35 + radius * 0.1, faceY - radius * 0.5);                    //sets a radius
    ctx.arc(faceX - radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);  //left eye
    ctx.moveTo(faceX + radius * 0.35 + radius * 0.1, faceY - radius * 0.5);                    //sets a radius
    ctx.arc(faceX + radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);  //right eye

    ctx.closePath();                                                                           //closes path
    ctx.stroke();
  }
}

/*
 * Star. SOLUTION.
 */

function drawStar() {
  let c = document.getElementById("canvas6");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let pts = 5;
  let x = 125;
  let y = 125;

  let outer = Number(prompt("Outer Radius: "));
  let inner = Number(prompt("Inner Radius: "));

  if (Number.isNaN(outer) || Number.isNaN(inner)) {
    alert("One of your inputs is not a number.");
  } else if (outer < 2) {
    alert("Your outer radius is too small.");
  } else if (inner < 1) {
    alert("Your inner radius is too small.");
  } else if (outer <= inner) {
    alert("Your outer radius must be larger than your inner radius.");
  } else {
    ctx.beginPath();

    for (let vtx = 0; vtx <= 2 * pts; vtx++) {
      let angle = vtx * Math.PI / pts - Math.PI / 2;

      let radius;
      if (vtx % 2 == 0) {
        radius = outer;
      } else {
        radius = inner;
      }

      ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
    }

    ctx.closePath();
    ctx.stroke();
  }
}

/*
 * Stop Sign. SOLUTION.
 */

function drawStopSign() {
  let c = document.getElementById("canvas7");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let x = 10;
  let y = 150;
  let length = 80;

  ctx.beginPath();

  ctx.moveTo(x, y);
  y = y - length;
  ctx.lineTo(x, y);

  let angle = 315.0;
  for (let i = 0; i < 7; i++) {
    x = x + length * Math.cos(Math.PI * angle / 180.0);
    y = y + length * Math.sin(Math.PI * angle / 180.0);
    ctx.lineTo(x, y);

    angle = angle + 45.0;
    if (angle > 359.0) {
      angle = angle - 360.0;
    }
  }

  ctx.fillStyle = "red";
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = "65px sans-serif";
  ctx.fillText("STOP", 18, 135);
}

/*
 * Pyramid. SOLUTION.
 */

function drawPyramid() {
  let c = document.getElementById("canvas8");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let length = Number(prompt("Length: "));

  if (Number.isNaN(length)) {
    alert("Your input is not a number.");
  } else if ((length * 5 + 10) > 1023 || (length * 5 + 10) > 511) {
    alert("The pyramid will not fit on the canvas.");
  } else {
    let x = 10;
    let y = c.height - 10 - length;

    let offset = 0;
    for (let n = 0; n < 5; n++) {
      for (let o = 0; o < 5 - n; o++) {
        ctx.strokeRect(x + offset, y, length, length);
        offset = offset + length;
      }

      x = x + Math.floor(length / 2);
      y = y - length;
      offset = 0;
    }
  }
}

/*
 * House. SOLUTION.
 */

function drawHouse() {
  let c = document.getElementById("canvas9");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let house = prompt("House Color: ");
  let door = prompt("Front Door Color: ");

  if ((house !== "blue"   &&
       house !== "brown"  &&
       house !== "green"  &&
       house !== "orange" &&
       house !== "purple" &&
       house !== "red"    &&
       house !== "yellow") ||
      (door !== "blue"   &&
       door !== "brown"  &&
       door !== "green"  &&
       door !== "orange" &&
       door !== "purple" &&
       door !== "red"    &&
       door !== "yellow")) {

    alert("One of your colors is not supported.");
  } else {
    let width = c.width - 300;
    let height = (c.height / 5) * 3;
    let x = 150;
    let y = c.height - 10 - height;

    // draw the frame
    ctx.fillStyle = house;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);

    // draw the roof
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    ctx.lineTo(x, y);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    // ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();

    // draw the door
    ctx.fillStyle = "gold";
    ctx.fillRect(c.width / 2 - 50, (c.height / 5) * 4 - 9, 100, 150);
    ctx.beginPath();
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.fillStyle = door;
    ctx.fill();
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.stroke();

    // draw windows
    ctx.fillStyle = "lightBlue";
    ctx.fillRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);

    ctx.strokeRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);
  }
}
