let p1Btn = document.getElementById("p1");
let p2Btn = document.getElementById("p2");
let resetBtn = document.getElementById("reset");
let p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
let p2ScoreDisplay = document.getElementById("p2ScoreDisplay");

let p1Score = 0;
let p2Score = 0;
let gameOver = false; 
let winningScore = 5;

p1Btn.addEventListener("click", function(){
    if(!gameOver){
        p1Score = p1Score + 1;
        console.log(p1Score);
        if(p1Score === winningScore) {
          gameOver = true;
        }
        
    p1ScoreDisplay.textContent = p1Score;
    }
  
});

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score = p2Score + 1;
        console.log(p1Score);
        if(p2Score === winningScore) {
            gameOver = true;
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});


