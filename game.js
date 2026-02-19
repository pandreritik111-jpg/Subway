let player = document.getElementById("player");
let obstacle = document.getElementById("obstacle");
let scoreEl = document.getElementById("score");
 
let count = 0;
let speed = 3;
 
document.addEventListener("keydown", function () {
  jump();
});
 
function jump() {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => {
      player.classList.remove("jump");
    }, 600);
  }
}
 
let obstacleMove = setInterval(() => {
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );
 
  if (obstacleLeft < -40) {
    obstacle.style.left = "700px";
    count++;
    scoreEl.innerText = count;
    speed += 0.1;
  } else {
    obstacle.style.left = obstacleLeft - speed + "px";
  }
 
  let playerBottom = parseInt(
    window.getComputedStyle(player).getPropertyValue("bottom")
  );
 
  if (obstacleLeft < 90 && obstacleLeft > 40 && playerBottom < 50) {
    alert("Game Over! Score: " + count);
    location.reload();
  }
}, 20);
