var cardA = 0;
var cardB = 0;
var scoreA = 0;
var scoreB = 0;

function randomA(){
    cardA = Math.ceil(Math.random()*4) // מעגל כלפי מעלה | floor - כלפי מטה 
    placeA.src = "_images/card"+cardA+".gif"
}

function randomB(){
    cardB = Math.ceil(Math.random()*4) // מעגל כלפי מעלה | floor - כלפי מטה 
    placeB.src = "_images/card"+cardB+".gif"
}

function checkWin(){
    if(cardA > cardB){
        alert("A Win")
        scoreA++;
    }
    if(cardA < cardB){
        alert("B Win")
        scoreB++;
    }
    if(cardA == cardB){
        alert("Draw")
    }
    player1.innerHTML = scoreA;
    player2.innerHTML = scoreB;
}
