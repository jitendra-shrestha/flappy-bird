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

// LOAD SOUNDS
const SCORE_S = new Audio();
SCORE_S.src = "audio/sfx_point.wav";

const FLAP = new Audio();
FLAP.src = "audio/sfx_flap.wav";

const HIT = new Audio();
HIT.src = "audio/sfx_hit.wav";

const SWOOSHING = new Audio();
SWOOSHING.src = "audio/sfx_swooshing.wav";

const DIE = new Audio();
DIE.src = "audio/sfx_die.wav";

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

// CONTROL THE GAME
cvs.addEventListener("click", function(evt){
    switch(state.current){
        case state.getReady:
            state.current = state.game;
            SWOOSHING.play();
            break;
        case state.game:
            if(bird.y - bird.radius <= 0) return;
            bird.flap();
            FLAP.play();
            break;
        case state.over:
            let rect = cvs.getBoundingClientRect();
            let clickX = evt.clientX - rect.left;
            let clickY = evt.clientY - rect.top;
            
            // CHECK IF WE CLICK ON THE START BUTTON
            if(clickX >= startBtn.x && clickX <= startBtn.x + startBtn.w && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h){
                pipes.reset();
                bird.speedReset();
                score.reset();
                state.current = state.getReady;
            }
            break;
    }
});


// TOP
const tp = {
    sX : 0,
    sY : 0,
    w : 60,
    h : 10,
    x : 0,
    y : 0,

    dx : 2,
    
    draw : function(){
        ctx.drawImage(sprite2,this.sX, this.sY, this.w, this.h,this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite2,this.sX, this.sY, this.w, this.h,this.x+this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite2,this.sX, this.sY, this.w, this.h,this.x+this.w+this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite2,this.sX, this.sY, this.w, this.h,this.x+this.w+this.w+this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite2,this.sX, this.sY, this.w, this.h,this.x+this.w+this.w+this.w+this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite2,this.sX, this.sY, this.w, this.h,this.x+this.w+this.w+this.w+this.w+this.w, this.y, this.w, this.h);
    },

    update: function(){
        if(state.current == state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
    
}



// BACKGROUND
const bg = {
    sX : 0,
    sY : 0,
    w : 140,
    h : 230,
    x : 0,
    y : cvs.height-300,

    dx : 2,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w+this.w, this.y, this.w, this.h);
    },

    update: function(){
        if(state.current == state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
    
}

// FOREGROUND
const fg = {
    sX: 300,
    sY: 0,
    w: 156,
    h: 50,
    x: 0,
    y: cvs.height-70,
    
    dx : 2,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);

        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w+this.w, this.y, this.w, this.h);
    },
    
    update: function(){
        if(state.current == state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
}


const fg2 = {
    sX: 300,
    sY: 12,
    w: 160,
    h: 45,
    x: 0,
    y: cvs.height - 20,
    
    dx : 2,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },
    
    update: function(){
        if(state.current == state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
}

// BIRD
const bird = {
    animation : [
        {sX: 115, sY : 381},
        {sX: 115, sY : 400},
        {sX: 115, sY : 430},
        {sX: 115, sY : 400}
    ],
    x : 80,
    y : 150,
    w : 17,
    h : 20,
    
    radius : 12,
    
    frame : 0,
    
    gravity : 0.25,
    jump : 4.6,
    speed : 0,
    rotation : 0,
    
    draw : function(){
        let bird = this.animation[this.frame];
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h,- this.w/2, - this.h/2, this.w*2, this.h*2);
        
        ctx.restore();
    },
    
    flap : function(){
        this.speed = - this.jump;
    },
    
    update: function(){
        // IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        this.period = state.current == state.getReady ? 10 : 5;
        // WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames%this.period == 0 ? 1 : 0;
        // FRAME GOES FROM 0 To 4, THEN AGAIN TO 0
        this.frame = this.frame%this.animation.length;
        
        if(state.current == state.getReady){
            this.y = 150; // RESET POSITION OF THE BIRD AFTER GAME OVER
            this.rotation = 0 * DEGREE;
        }else{
            this.speed += this.gravity;
            this.y += this.speed;
            
            if(this.y + this.h/2 >= cvs.height - fg.h-fg2.h){
                this.y = cvs.height - fg.h - this.h/2-fg2.h+9;
                if(state.current == state.game){
                    state.current = state.over;
                    DIE.play();
                }
            }
            
            // IF THE SPEED IS GREATER THAN THE JUMP MEANS THE BIRD IS FALLING DOWN
            if(this.speed >= this.jump){
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            }else{
                this.rotation = -25 * DEGREE;
            }
        }
        
    },
    speedReset : function(){
        this.speed = 0;
    }
}


// GET READY MESSAGE
const getReady = {
    sX : 296,
    sY : 59,
    w : 95,
    h : 25,
    x : cvs.width/2 - 173/2,
    y : 80,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w*2, this.h*2);
        }
    }
    
}

// GET READY IMAGE
const getReadyImage = {
    sX : 292,
    sY : 91,
    w : 58,
    h : 50,
    x : cvs.width/2 -58,
    y : 150,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w*2, this.h*2);
        }
    }
    
}


// GET READY TITLE
const getReadyTitle = {
    sX : 350,
    sY : 91,
    w : 90,
    h : 25,
    x : cvs.width/2 -90,
    y : 270,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w*2, this.h*2);
        }
    }
    
}

// GAME OVER MESSAGE
const gameOver = {
    sX : 395,
    sY : 59,
    w : 100,
    h : 25,
    x : cvs.width/2 - 100,
    y : 80,
    
    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w*2, this.h*2);   
        }
    }
    
}

// MEDAL DISPLAY
const medal = {
    sX : 0,
    sY : 259,
    w : 120,
    h : 60,
    x : cvs.width/2 - 120,
    y : 150,
    
    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w*2, this.h*2);   
        }
    }
    
}

// PLAY AGAIN DISPLAY
const playAgain = {
    sX : 354,
    sY : 116,
    w : 120,
    h : 60,
    x : cvs.width/2 - 112,
    y : 280,
    
    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w*2, this.h*2);   
        }
    }
    
}

// SCORE
const score= {
    best : parseInt(localStorage.getItem("best")) || 0,
    value : 0,
    sX : 121,
    sY : 282,
    w : 24,
    h : 22,
    x : 73,
    y : 192,
    
    draw : function(){
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";
        
        if(state.current == state.game){
            ctx.lineWidth = 2;
            ctx.font = "50px Teko";
            ctx.fillText(this.value, cvs.width/2, 50);
            ctx.strokeText(this.value, cvs.width/2, 50);
            
        }else if(state.current == state.over){
            // SCORE VALUE
            ctx.font = "25px Teko";
            ctx.fillText(this.value, 225, 200);
            ctx.strokeText(this.value, 225, 200);
            // BEST SCORE
            ctx.fillText(this.best, 225, 245);
            ctx.strokeText(this.best, 225, 245);
            // MEDAL
            if(this.value>2){
                ctx.drawImage(sprite, 121, 282, this.w, this.h, this.x, this.y, this.w*2, this.h*2); 
            }else{
                ctx.drawImage(sprite,121, 258, this.w, this.h, this.x, this.y, this.w*2, this.h*2);
            }
            
            
        }
    },
    
    reset : function(){
        this.value = 0;
    }
}


// PIPES
const pipes = {
    position : [],
    
    top : {
        sX : 112,
        sY : 646
    },
    bottom:{
        sX : 168,
        sY : 646
    },
    
    w : 53,
    h : 322,
    gap : 120,
    maxYPos : -150,
    dx : 2,
    
    draw : function(){
        for(let i  = 0; i < this.position.length; i++){
            let p = this.position[i];
           
            
            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;
            
            // top pipe
            ctx.drawImage(sprite1, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);  
            
            // bottom pipe
            ctx.drawImage(sprite1, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);  
        }
    },
    
    update: function(){
        if(state.current !== state.game) return;
        
        if(frames%100 == 0){
            this.position.push({
                x : cvs.width,
                y : this.maxYPos * ( Math.random() + 1)
            });
        }
        for(let i = 0; i < this.position.length; i++){
            let p = this.position[i];
            
            let bottomPipeYPos = p.y + this.h + this.gap;
            
            // COLLISION DETECTION
            // TOP PIPE
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h){
                state.current = state.over;
                HIT.play();
            }
            // BOTTOM PIPE
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.h){
                state.current = state.over;
                HIT.play();
            }

            if(bird.y + bird.radius < 40 ){
                state.current = state.over;
                HIT.play();
            }

            
            // MOVE THE PIPES TO THE LEFT
            p.x -= this.dx;
            
            // if the pipes go beyond canvas, we delete them from the array
            if(p.x + this.w <= 0){
                this.position.shift();
                score.value += 1;
                SCORE_S.play();
                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }
        }
    },
    
    reset : function(){
        this.position = [];
    }
    
}



// DRAW
function draw(){
    ctx.fillStyle = "#54c0c9";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
   
    bg.draw();
    pipes.draw();
    tp.draw();
    bird.draw();
    fg.draw();
    fg2.draw();
    
    
    getReady.draw();
    getReadyImage.draw();
    getReadyTitle.draw();
    gameOver.draw();
    medal.draw();
    playAgain.draw();
    score.draw();
    

}


// UPDATE
function update(){
    tp.update();
    bg.update();
    bird.update();
    fg.update();
    pipes.update();
}


// LOOP
function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();