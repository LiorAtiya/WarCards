var cardA = 0;
var cardB = 0;
var scoreA = 0;
var scoreB = 0;

function randomA(){
    cardA = Math.ceil(Math.random()*13) // מעגל כלפי מעלה | floor - כלפי מטה 
    placeA.src = "img/card"+cardA+".png"
    
    
}

function randomB(){
    cardB = Math.ceil(Math.random()*13) // מעגל כלפי מעלה | floor - כלפי מטה 
    placeB.src = "img/card"+cardB+".png"
}

function checkWin(){
    if(Number(cardA) < Number(cardB)){
        alert("שחקן 1 ניצח")
        scoreA++;
    }
    if(Number(cardA) > Number(cardB)){
        alert("שחקן 2 ניצח")
        scoreB++;
    }
    if(Number(cardA) === Number(cardB)){
        alert("שיוויון")
    }
    placeA.src = "";
    placeB.src = "";
    cardA = 0;
    cardB = 0;
    player1.innerHTML = scoreA;
    player2.innerHTML = scoreB;
}

// ---------------------------------------

// function checkWin2(a,b){
//     switch (a,b){
//         case (a < b):
//             alert("שחקן 1 ניצח")
//             scoreA++;
//         break;
//         case (a > b):
//             alert("שחקן 2 ניצח")
//             scoreB++;
//         break;
//         case (a === b):
//             alert("שיוויון")
//     }
//     placeA.src = "";
//     placeB.src = "";
//     cardA = 0;
//     cardB = 0;
//     player1.innerHTML = scoreA;
//     player2.innerHTML = scoreB;
// }