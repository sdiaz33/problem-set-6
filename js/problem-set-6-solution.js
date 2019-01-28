/*
 * Hello. SOLUTION.
 */

function sayHello() {
  let c = document.getElementById("canvas1");
  let ctx = c.getContext("2d");

  ctx.clearRect(0, 0, c.width, c.height);
  ctx.font = "48px sans-serif";
  ctx.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. SOLUTION.
 */

function drawRectangle() {
  let height = Number(prompt("Height: "));
  let width = Number(prompt("Width: "));
  let x = Number(prompt("X: "));
  let y = Number(prompt("Y: "));

  let c = document.getElementById("canvas2");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(x) || Number.isNaN(y)) {
    alert("One of your inputs is not a number.");
  } else if (width > 1023) {
    alert("The rectangle will not fit on the canvas.");
  } else if (width < 1) {
    alert("Your width is too small.");
  } else if (height > 511) {
    alert("The rectangle will not fit on the canvas.");
  } else if (height < 1) {
    alert("Your height is too small.");
  } else if ((width + x) > 1023) {
    alert("The rectangle will not fit on the canvas.");
  } else if (x < 5) {
    alert("Your x-coordinate is too small.");
  } else if ((height + y) > 511) {
    alert("The rectangle will not fit on the canvas.");
  } else if (y < 5) {
    alert("Your y-coordinate is too small.");
  } else {
    ctx.strokeRect(x, y, width, height);
  }
}

/*
 * Color. SOLUTION.
 */

function drawColoredRectangle() {
  let c = document.getElementById("canvas3");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let color = prompt("Color: ");
  if (color === "black"  ||
      color === "blue"   ||
      color === "green"  ||
      color === "orange" ||
      color === "purple" ||
      color === "red"    ||
      color === "yellow") {

    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 100, 50);
  } else {
    alert(color + " is not a supported color.");
  }
}

/*
 * Triangle. SOLUTION.
 */

function drawTriangle() {
  let c = document.getElementById("canvas4");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let s1 = Number(prompt("Side 1: "));
  let s2 = Number(prompt("Side 2: "));
  let s3 = Number(prompt("Side 3: "));

  if (Number.isNaN(s1) || Number.isNaN(s2) || Number.isNaN(s3)) {
    alert("One of your inputs is not a number.");
  } else if (((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1)) {
      let side1 = Math.min(s1, s2, s3);
      let side3 = Math.max(s1, s2, s3);
      let side2 = (s1 + s2 + s3) - side1 - side3;

      if (((side1 * side1) + (side2 * side2)) === (side3 * side3)) {
        let x = 10;
        let y = 10;

        if ((y + side1) > 511 || (x + side2) > 1023) {
          alert("The triangle will not fit on the canvas.");
        } else {
          ctx.beginPath();

          ctx.moveTo(x, y);
          ctx.lineTo(x, y + side1);
          ctx.lineTo(x + side2, y + side1);
          ctx.lineTo(x, y);

          ctx.closePath();
          ctx.stroke();
        }
      } else {
        alert("This is not a valid right triangle.");
      }
  } else {
    alert("That is not a valid right triangle.");
  }
}

/*
 * Smile. SOLUTION.
 */

function drawSmileyFace() {
  let c = document.getElementById("canvas5");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);

  let radius = Number(prompt("Radius: "));

  if (Number.isNaN(radius)) {
    alert("Your input is not a number.");
  } else if (radius < 1) {
    alert("Your radius is too small.");
  } else if ((radius * 2 + 10) > 511) {
    alert("The smiley face will not fit on the canvas.");
  } else {
    let faceX = radius + 10;
    let faceY = radius + 10;

    ctx.beginPath();

    ctx.arc(faceX, faceY, radius, 0, Math.PI * 2, true);  // draw the face
    ctx.moveTo(faceX + radius - radius * 0.3, faceY);
    ctx.arc(faceX, faceY, radius * 0.7, 0, Math.PI, false); // draw the mouth
    ctx.moveTo(faceX - radius * 0.35 + radius * 0.1, faceY - radius * 0.5);
    ctx.arc(faceX - radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true); // left eye
    ctx.moveTo(faceX + radius * 0.35 + radius * 0.1, faceY - radius * 0.5);
    ctx.arc(faceX + radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);  // right eye

    ctx.closePath();
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
