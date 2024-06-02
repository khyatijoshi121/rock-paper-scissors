let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscorepara = document.querySelector(".userScore");
const compscorepara = document.querySelector(".compScore");

const drawGame = () => {
    msg.innerText = "Game was Draw , Play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color="green";
    msg.style.fontWeight="bold";
    console.log("Game was draw.");
}

const showWinner = (userwin, userChoice ,comchoice) => {
     if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You Win! Your ${userChoice} Beates ${comchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        console.log("You win!");
     }
     else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText = `You Lost! ${comchoice} Beates Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        console.log("You lose.");
     }
}

const genComChoice= () => {
    let options = ["rock","paper","scissors"];
    let optionsInd = Math.floor(Math.random() * 3);
    return options[optionsInd];
}
const playGame = (userChoice ) =>{
    console.log("User choice =" , userChoice);
    let comchoice = genComChoice();
    console.log("Computer choice =" , comchoice);

    if(userChoice === comchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comchoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin = comchoice === "scissors" ? false : true;
        }
        else{
            userWin = comchoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice ,comchoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});