// SELECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;
const DEGREE = Math.PI/180;

// LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "img/flappy_sprite.png";

const sprite1 = new Image();
sprite1.src = "img/black_pipe.png";

const sprite2 = new Image();
sprite2.src = "img/top.png";


// GAME STATE
const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

// START BUTTON COORD
const startBtn = {
    x : 48,
    y : 280,
    w : 90,
    h : 60
}




