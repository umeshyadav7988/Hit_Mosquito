let hitcount = 0;
let isGameStart = false;

function startGame() {
  isGameStart = true;
  hitcount = 0;
  document.getElementById("gameStart").innerHTML="Game Started";
  let mosquito = document.getElementById("mosquito");

  let time = setInterval(() => {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    mosquito.style.left = i + "px";
    mosquito.style.top = j + "px";
  }, 1000);
  setTimeout(() => {
    clearTimeout(time);
    isGameStart = false;
    document.getElementById("gameStart").innerHTML="Game Over";
  }, 30000);
}

function hitMosquito() {
  if (isGameStart) {
    hitcount++;
    document.getElementById("totalHit").innerHTML = hitcount;
  }
}
