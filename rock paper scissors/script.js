let userScore = 0;
let compScore = 0;
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score")


const choices = document.querySelectorAll(".choice");

const genComChoice =() =>{
    const options=["rock","paper","scissors"];
   const idx= Math.floor(Math.random()*3);
   return options[idx];
};
const draw =() =>{
    console.log("Game draw");
    msg.innerText="Game DRAW"
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("you Win");
        msg.innerText=`You WIN! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
       userscore.innerText=userScore;
    }else{
        console.log("you loose");
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
       compscore.innerText=compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("user Choice is", userChoice);
    const compChoice=genComChoice();
    console.log("computer choice is ",compChoice);
    if(compChoice === userChoice){
        draw();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin= compChoice ==="paper"?false:true;
        }else if(userChoice === "paper"){
            userWin= compChoice ==="scissors"?false:true;
        }else{
            userWin= compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
