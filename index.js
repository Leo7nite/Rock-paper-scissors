const buttonArray = document.querySelectorAll("button");
const choices = ["rock", "paper", "scissors"];
let playerCount = 0;
let computerCount = 0;
const para = document.createElement("p");
const para2 = document.createElement("p");
const boxEl = document.querySelector(".box");
boxEl.appendChild(para);
boxEl.appendChild(para2);
const para3 = document.createElement("p");
boxEl.appendChild(para3);
para3.textContent="Play a game! First to 5 wins!:D"
const winningMessage = document.createElement("h1");

para.textContent= "Your score - ";
para2.textContent="Computer score - ";
function computerRockPaper() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log(`${playerChoice} tie!`);
        para3.textContent = "It's a tie!"
        
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        para3.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerCount += 1;
        para.textContent = `Your score - ${playerCount}`;
        
        console.log(`You win - ${playerChoice}`);
        console.log(`Player Count: ${playerCount}`);
    } else {
        
        computerCount += 1;
        para3.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        para2.textContent = `Computer score - ${computerCount}`;
        
        console.log(`You lose against computer - ${computerChoice}`);
        console.log(`Computer Count: ${computerCount}`);
    }
    
    if (playerCount === 5) {
        winningMessage.textContent = "YOU WON THE GAME!"
        boxEl.appendChild(winningMessage);
        console.log("You won the game!");
        
        buttonArray.forEach(function(btn){
            btn.style.display = "none";
        

        })
        let resetBtn = document.createElement("button");
        resetBtn.textContent = "reset";
        
        boxEl.appendChild(resetBtn);
        resetBtn.addEventListener("click", function(event){
            playerCount = 0;
            computerCount = 0;
            para.textContent = "Your score - 0";
            para2.textContent = "Computer score - 0";
            winningMessage.textContent = "";
            boxEl.removeChild(resetBtn);
            buttonArray.forEach(function(btn) {
                btn.style.display = "inline";
            });
            resetBtn.removeEventListener("click", resetGame);
        })
    } 
    else if (computerCount === 5) {
        winningMessage.textContent = "YOU LOST THE GAME!"
        boxEl.appendChild(winningMessage);
        console.log("COMPUTER WON THE GAME");
        
        buttonArray.forEach(function(btn){
            btn.style.display = "none";
        })
        let resetBtn = document.createElement("button");
        resetBtn.classList.add("reset-btn");
        resetBtn.textContent = "reset";
        boxEl.appendChild(resetBtn);
        resetBtn.addEventListener("click", function(event){
            playerCount = 0;
            computerCount = 0;
            para.textContent = "Your score - 0";
            para2.textContent = "Computer score - 0";
            winningMessage.textContent = "";
            boxEl.removeChild(resetBtn);
            buttonArray.forEach(function(btn) {
                btn.style.display = "inline";
            });
            resetBtn.removeEventListener("click", resetGame);
            
        })
    }
}




buttonArray.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        const playerChoice = event.target.id;
        const computerChoice = choices[computerRockPaper()];
        playRound(playerChoice, computerChoice);
    });
});
