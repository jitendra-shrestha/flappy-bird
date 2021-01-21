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