"use strict";

let scorePlayer1 = document.querySelector('.scorePlayer1');
let scorePlayer2 = document.querySelector('.scorePlayer2');
let scoreTotal = document.querySelector('.scoreTotal');
let winer = document.querySelector('.winner');
let win = document.querySelector('.win');

let input = document.querySelector('.number');
input.addEventListener('change', number);
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let res = document.querySelector('.reset');

let scoreP1 = 0;
let scoreP2 = 0;
let Total = 0;
scorePlayer1.textContent = scoreP1;
scorePlayer2.textContent = scoreP2;
scoreTotal.textContent = Total;
let winner = false;
winer.hidden = true;

player1.addEventListener('click', P1);
player2.addEventListener('click', P2);
res.addEventListener('click', reset);

if (Total == "0") {
    player1.disabled = true;
    player2.disabled = true;

    winner = false;
    winer.hidden = true;

}

function number() {
    scoreTotal.textContent = this.value;
    Total = Number(this.value);
    scoreP1 = 0;
    scoreP2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;

    player1.disabled = false;
    player2.disabled = false;

    winner = false;
    winer.hidden = true;

}

function P1() {
    if(!winner) {
        scoreP1 += 1;
    }
    if( scoreP1 === Total) {
        player1.disabled = true;
        player2.disabled = true;
        winner = true;
        winer.hidden = false;
        win.textContent = "Player1";
    }
    scorePlayer1.textContent = scoreP1;
}

function P2() {
    if(!winner) {
        scoreP2 += 1;
    }
    if( scoreP2 === Total) {
        player1.disabled = true;
        player2.disabled = true;
        winner = true;
        winer.hidden = false;
        win.textContent = "Player2";
    }
    scorePlayer2.textContent = scoreP2;
}

function reset() {
    
    scoreP1 = 0;
    scoreP2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    input.value = 0;
    Total = 0;
    scoreTotal.textContent = 0;
    if (Total == "0") {
        player1.disabled = true;
        player2.disabled = true;
    
        winner = false;
        winer.hidden = true;
    
    } else {
        player1.disabled = false;
        player2.disabled = false;
        winner = false;
        winer.hidden = true;

    }
    
}