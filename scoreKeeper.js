let p1Btn = document.getElementById("p1");
let p2Btn = document.getElementById("p2");
let resetBtn = document.getElementById("reset");
let p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
let p2ScoreDisplay = document.getElementById("p2ScoreDisplay");
let inputTargetScore = document.getElementById("inputTargetScore");
let targetScoreDisplay = document.getElementById("targetScoreDisplay");

let p1Score = 0;
let p2Score = 0;
let gameOver = false; 
let winningScore = 0;


inputTargetScore.addEventListener("change", function(){
    winningScore = Number(inputTargetScore.value);
    targetScoreDisplay.textContent = winningScore;
    reset();
})

p1Btn.addEventListener("click", function(){
    if(!gameOver && winningScore !== 0){
        p1Score = p1Score + 1;
        console.log(p1Score);
        if(p1Score === winningScore) {
          gameOver = true;
          p1ScoreDisplay.classList.add("winner");
          
        }
        
    p1ScoreDisplay.textContent = p1Score;
    }
  
});

p2Btn.addEventListener("click", function(){
    if(!gameOver && winningScore !== 0){
        p2Score = p2Score + 1;
        console.log(p1Score);
        if(p2Score === winningScore) {
            gameOver = true;
            p2ScoreDisplay.classList.add("winner");
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});

resetBtn.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p1ScoreDisplay.classList.remove("winner");
    p2Score = 0;
    p2ScoreDisplay.textContent = p2Score;
    p2ScoreDisplay.classList.remove("winner");
    gameOver =false;
  
}






