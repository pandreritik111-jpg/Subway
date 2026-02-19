let player = document.getElementById("player");
let obstacle = document.getElementById("obstacle");
let score = document.getElementById("score");
 
let count = 0;
 
document.addEventListener("keydown", jump);
 
function jump() {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => {
      player.classList.remove("jump");
    }, 500);
  }
}
 
setInterval(() => {
  count++;
  score.innerText = count;
}, 1000);
 
setInterval(() => {
  let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
 
  if (obstacleLeft < 90 && obstacleLeft > 50 && playerBottom < 40) {
    alert("Game Over! Score: " + count);
    obstacle.style.animation = "none";
  }
}, 10);
