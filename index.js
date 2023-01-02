const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

//setting the canvas screen width and height
canvas.height = 600;
canvas.width = 600;

//variable to match the camvas with and height
const Canvas_Width = 600;
const Canvas_Height = 600;

//instatiating a character object from the Image class
const character = new Image();

//using the src method to set the image into our character image
character.src = "shadow_dog.png";

//setting the image with to match just one character on the screen
const character_width = 575;
const character_height = 523;

let x_position = 0;
let y_position = 5;

let frameRate = 0;
const stagerFrame = 3;

const animate = () => {
  ctx.clearRect(0, 0, Canvas_Width, Canvas_Height);
  ctx.drawImage(
    character,
    x_position * character_width,
    y_position * character_height,
    character_width,
    character_height,
    0,
    0,
    character_width,
    character_height
  );

  if (frameRate % stagerFrame == 0) {
    if (x_position < 4) x_position++;
    else x_position = 0;
  }
  frameRate++;

  requestAnimationFrame(animate);
};

animate();
