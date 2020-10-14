import audios from "../audio/*.mp3";

const audioVengeance = new Audio(audios.i_am_vengeance);
const batman = document.getElementById("batman");

let position = 0;

document.body.onkeyup = function(e) {
  if (e.keyCode === 32) { // Spacebar
    batman.classList.remove("stay-right");
    batman.classList.add("jump");
    setTimeout(() => {
      batman.classList.remove("jump");
      batman.classList.add("stay-right");
    }, 1200);
  } else {
    batman.className = "";
    batman.classList.add("stay-right");
  }
};

document.body.onkeydown = function(e) {
  if (e.keyCode === 39 || e.keyCode === 68) { // Arrow Right || "D"
    batman.className = "";
    batman.classList.add("run-right");
    moveBatmanRight();
  }
  if (e.keyCode === 37 || e.keyCode === 65) { // Arrow Left || "A"
    batman.className = "";
    batman.classList.add("run-left");
    moveBatmanLeft();
  }
};

batman.addEventListener("click", function() {
  audioVengeance.play();
});

function moveBatmanLeft() {
  position -= 15;
  if (position > 0) {
    batman.style.left = position + "px";
  } else {
    position = 0;
  }
}

function moveBatmanRight() {
  position += 15;
  if (position <= 675) {
    batman.style.left = position + "px";
  } else {
    position = 675;
  }
}
