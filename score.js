let p1Btn = document.getElementById("p1");
let p2Btn = document.getElementById("p2");
let resetBtn = document.getElementById("reset");
let p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
let p2ScoreDisplay = document.getElementById("p2ScoreDisplay");

let p1Score = 0;
let p2Score = 0;

p1Btn.addEventListener("click", function(){
    p1Score = p1Score + 1;
    console.log(p1Score);
p1ScoreDisplay.textContent = p1Score;
});

p2Btn.addEventListener("click", function(){
    p2Score = p2Score + 1;
    console.log(p1Score);
    p2ScoreDisplay.textContent = p2Score;
});


