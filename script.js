let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

btn.onclick = function () {
  let score = 0;
  let time = 30;
  container.innerHTML = "";

  let interval = setInterval(function showTarget() {
    // Corrected syntax for setInterval function
    // creation de la cible
    let target = document.createElement("img");
    target.id = "target";
    target.src = "bird.jpeg";
    container.appendChild(target);
    target.style.position = "absolute"; // Set position to absolute for positioning
    target.style.top = Math.random() * (500 - target.offsetHeight) + "px"; // Corrected typo in offsetHeight
    target.style.left = Math.random() * (600 - target.offsetWidth) + "px"; // Corrected typo in offsetWidth
    // faire disparaitre la cible
    setTimeout(function () {
      target.remove(); // Corrected syntax for removing target element
    }, 2000);
    // quand on clique sur la target
    target.onclick = function () {
      score += 1;
      target.style.display = "none";
      scoreContainer.innerHTML = `score : ${score}`; // Update score display after each click
    };
    time -= 1;
    // afficher les infos
    scoreContainer.innerHTML = `score : ${score}`;
    timeContainer.innerHTML = `temps restant : ${time} s`;
    // end of game time is over
    if (time < 0) {
      clearInterval(interval);
      container.innerHTML = " time over ";
      alert(" time is over try again !");
    }
  }, 500);
};
