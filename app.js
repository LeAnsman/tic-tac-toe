// Variables importation 

let cases = [...document.getElementsByClassName("case")];
let player = document.getElementById("player");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

// Initial state

let state = {
    playerCurrent: 1,
    scoreP1: 0,
    scoreP2: 0,
    matchNul: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9:0,
};


// Reset to the inital state

const resetState = () => {
    playerCurrent=1;
    state.c1=0;
    state.c2=0;
    state.c3=0;
    state.c4=0;
    state.c5=0;
    state.c6=0;
    state.c7=0;
    state.c8=0;
    state.c9=0;
}

// Win condition

const verifyWin = () => {
    if(
        (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
        (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
        (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
        (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
        (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
        (state.c3 == state.c5 && state.c5 == state.c7 && state.c3 > 0) ||
        (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
        (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0) 
    ) { 
        return true;
    } else if (
        state.c1 != 0 &&
        state.c2 != 0 &&
        state.c3 != 0 &&
        state.c4 != 0 &&
        state.c5 != 0 &&
        state.c6 != 0 &&
        state.c7 != 0 &&
        state.c8 != 0 &&
        state.c9 != 0
    ) {
        return null;
    } else {
        return false;
    }
};



const playCase = (e) => {
    let idCase = e.target.id;
    if(state[idCase] != 0) return;
    
    state[idCase] = state.playerCurrent;

    let isWin = verifyWin();

    if(isWin == true){
        alert("Le gagnant est le joueur " + state.playerCurrent);
        if (state.playerCurrent == 1) {
        state.scoreP1++;
        score1.textContent = state.scoreP1;
    } else {
        state.scoreP2++;
        score2.textContent = state.scoreP2;
    } 
    resetState();
    cases.forEach((c) => (c.textContent =""));
}
    else if (isWin === null) {
        alert("Match Nul");
        state.matchNul++;
        scoreNul.textContent = state.matchNul;
        player.textContent = "1";
        resetState();
        cases.forEach((c) => (c.textContent =""));
    } else if (isWin === false) {
        if(state.playerCurrent == 1){
            e.target.textContent = "X";
            state.playerCurrent = 2;
            player.textContent = "2";
        } else {
            e.target.textContent = "O";
            state.playerCurrent= 1;
            player.textContent= "1";
        }
    }
}

// Clicker pour jouer

cases.forEach((el) => {
    el.addEventListener("click", playCase);
})