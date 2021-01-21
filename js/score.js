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
