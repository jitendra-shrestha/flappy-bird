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