const selection=document.querySelectorAll(".button");
let result=document.querySelector('.computer');

let computerchoice;

let message=document.querySelector('.message');

let computerwins=0;
let playerwins=0;

let computerdata=document.querySelector('#playerwins');
let playerdata=document.querySelector('#computerwins');

selection.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.innerHTML; 
        const computerChoice = getRandomChoice(); 

        result.innerHTML = "Computer chooses " + computerChoice;

    
        if (
            (computerChoice === "✂️" && playerChoice === "📜") ||
            (computerChoice === "🪨"&& playerChoice === "✂️") ||
            (computerChoice === "📜" && playerChoice === "🪨" )
        ) {
            
            computerwins += 1;
            computerdata.innerHTML = computerwins;
            message.innerHTML = "Computer Wins 🏆";

        } else if (
            (playerChoice === "📜" && computerChoice === "🪨") ||
            (playerChoice === "✂️" && computerChoice === "📜") ||
            (playerChoice === "🪨" && computerChoice === "✂️")
        ) {
            
            playerwins += 1;
            playerdata.innerHTML = playerwins;
            message.innerHTML = "Player Wins 🏆";

        } 
        
        else {
            message.innerHTML = "It's a draw 📍";

            
        }
    });
});


function getRandomChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return '🪨';
    } else if (randomNumber < 0.66) {
        return '📜';
    } else {
        return '✂️';
    }
}

let reset=document.querySelector('.reset')

reset.addEventListener('click',()=>{
    location.reload();
})