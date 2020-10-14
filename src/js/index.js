const batman = document.getElementById("batman");
const audioVengeance = document.getElementById("vengeance");
// const audioVengeance = new Audio("/i_am_vengeance.mp3");
/* const audioVengeance = document.createElement("audio");
audioVengeance.src = "audio/i_am_vengeance.mp3";
audioVengeance.crossOrigin = "anonymous"; */

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
  // console.log(audioVengeance);
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
