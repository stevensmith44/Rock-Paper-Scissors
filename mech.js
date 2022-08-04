const options = document.querySelectorAll(".option")

let Human_span = document.getElementById("Human_score_span")
let Computer_span = document.getElementById("Computer_score_span")

let Human_score = 0;
let Computer_score = 0;

options.forEach((options) => {
    options.addEventListener("click",function(){

        const Player_input = this.textContent;

        document.getElementById("Human_Choice_Final").innerHTML = Player_input

        const choices = ['Rock','Paper','Scissors'];
        const random = Math.floor(Math.random() * 3);
        const Computer_input = choices[random]

        function Computer_Choice(){ 
            document.getElementById('Computer_Choice_Final').innerHTML = Computer_input;
        };

        Computer_Choice();

        Winner_Decider(Player_input,Computer_input);

        Human_span.textContent = Human_score;
        Computer_span.textContent = Computer_score;

        Winner_Checker(Human_score,Computer_score);

        Disable_Button(Human_score,Computer_score);
    })
})

function Winner_Decider(Player_input,Computer_input){

    if(Player_input === Computer_input){
        document.getElementById("Result").innerHTML = "IT'S A TIE"
        return;
    }

    if(Player_input === "Rock"){
        if(Computer_input === "Scissors"){
            document.getElementById("Result").innerHTML = "YOU WIN THIS ROUND"
            Human_score++
        }
        else{
            document.getElementById("Result").innerHTML = "YOU LOSE THIS ROUND"
            Computer_score++
        }
    }

    if(Player_input === "Paper"){
        if(Computer_input === "Rock"){
            document.getElementById("Result").innerHTML = "YOU WIN THIS ROUND"
            Human_score++
        }
        else{
            document.getElementById("Result").innerHTML = "YOU LOSE THIS ROUND"
            Computer_score++
        }
    }

    if(Player_input === "Scissors"){
        if(Computer_input === "Paper"){
            document.getElementById("Result").innerHTML = "YOU WIN THIS ROUND"
            Human_score++
        }
        else{
            document.getElementById("Result").innerHTML = "YOU LOSE THIS ROUND"
            Computer_score++
        }
    }
}

function Winner_Checker(Human_score,Computer_score){
    if (Human_score >= 5){
        alert("YOU WIN");
        alert("REFRESH IF YOU WANT TO PLAY MORE");
        return true;
    }
    else if(Computer_score >= 5){
        alert("YOU LOSE");
        alert("REFRESH IF YOU WANT TO PLAY MORE");
        return true;
    }
    return false;
}

function Disable_Button(Human_score,Computer_score){
    if (Human_score >= 5 || Computer_score >= 5){
        options.forEach(element => {
            element.disabled = true
        })
    }
}

