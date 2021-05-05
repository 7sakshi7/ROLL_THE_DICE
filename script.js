const initial_box = document.getElementById('initial-box');
const gameconatiner = document.getElementById('game-conatiner');

// buttons
const start = document.getElementById('start');
const play = document.getElementById('play');
const dice = document.getElementById('dice');
const newgame = document.getElementById('newgame');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');

// for player 1
const btn1_text = document.getElementById('btn1-text');
const player1_score = document.getElementById('player1-score');
const player1 = document.getElementById('player1');

// for palyer 2
const btn2_text = document.getElementById('btn2-text');
const player2_score = document.getElementById('player2-score');
const player2 = document.getElementById('player2');

// variables
let CanPlay = false;
let Numbers, val = 0, finalscore = 0;

let player1_turn = true, player2_turn = false;


// event listeners
start.addEventListener('click', () => {
    initial_box.style.display = "none";
    gameconatiner.style.display = "block";
});

newgame.addEventListener('click', () => {
    CanPlay = true;
    updatePlayer1();
    updatePlayer2();
})

play.addEventListener('click', () => {
    play.style.display = "none";
    roll.style.display = "block";
    hold.style.display = "block";
    document.getElementById('winner').style.display = "none";
    newgame.style.display = "block";
    player1_score.innerText = 0;
    player2_score.innerText = 0;
    CanPlay = true;
    finalscore=0;
});

roll.addEventListener('click', () => {
    if (CanPlay == false)
        alert("Click on Play button first");
    else {
        dice.style.display = "block";
        Numbers = getNumber();
        document.getElementById('dice').innerText = Numbers;
        // console.log(Numbers);

        if (Numbers == 1) {
            val = 0;
            document.getElementById('btn1-text').textContent = val;
            document.getElementById('btn2-text').textContent = val;
            changeTurn();
        }
        else {
            if (player1_turn) {
                val = Number(btn1_text.textContent);
                val = val + Numbers;
                document.getElementById('btn1-text').textContent = val;
            }
            else if (player2_turn) {
                val = Number( document.getElementById('btn2-text').textContent);
                console.log(val);
                val = val + Numbers;
                console.log(val);
                document.getElementById('btn2-text').textContent = val;

            }
        }
    }

});

hold.addEventListener('click', changeTurn);

// functions
function changeTurn() {
    player1_turn = !player1_turn;
    player2_turn = !player2_turn;

    dice.innerText = "";
    console.log('hello' + player1_turn + player2_turn);
    if (player2_turn) {
        player2.style.background = "#e289a2";
        player1.style.background = "border-box";

        let r = player1_score.textContent;
        r = Number(r) + val;
        if (r > finalscore)
            finalscore = r;
        player1_score.textContent = r;
        val = 0;
        document.getElementById('btn1-text').textContent = val;
        check();
    }
    else if (player1_turn) {
        player1.style.background = "#e289a2";
        player2.style.background = "border-box";

        let r = player2_score.textContent;
        r = Number(r) + val;
        if (r > finalscore)
            finalscore = r;
        player2_score.textContent = r;
        val = 0;
        document.getElementById('btn2-text').textContent = val;
        check();
    }

}
function getNumber() {
    return Math.trunc(Math.random() * 6) + 1;
}

function updatePlayer2() {
    play.style.display = "block";
    newgame.style.display = "none";
    dice.style.display = "none";
    player2_score.innerText = 0;
    btn2_text.innerText = 0;

}
function updatePlayer1() {
    play.style.display = "block";
    newgame.style.display = "none";
    dice.style.display = "none";
    player1_score.innerText = 0;
    btn1_text.innerText = 0;

}

function check() {
    if (finalscore >= 10) {
        val = 0;
        document.getElementById('winner').style.display = "flex";
        if (player2_turn) {
            document.getElementById('winner').innerText = "Player 1 Wins !!!!!!!";
            updatePlayer2();
        }
        else {
            document.getElementById('winner').innerText = "Player 2 Wins !!!!!!!";
            updatePlayer1();
        }

        roll.style.display = "none";
        hold.style.display = "none";
    }

}