function animationUpdater(){
    elapsed++;
    if (elapsed >= delay)
    {
        elapsed = 0;
        if (animLoop === false){
            if (currentFrame < totalFrames)
        {
            currentFrame++;
        }
        else if (currentFrame === totalFrames){
            currentFrame = 0;
        }
        console.log(currentFrame);
        }
        if (mercMaleDirection === 1){
            mercMaleTexture.frame = leftAnim[currentFrame];
        }
        else if (mercMaleDirection === 2){
            mercMaleTexture.frame = upAnim[currentFrame];
        }
        else if (mercMaleDirection === 3){
            mercMaleTexture.frame = downAnim[currentFrame];
        }
        else if (mercMaleDirection === 4){
            mercMaleTexture.frame = rightAnim[currentFrame];
        }
    }
}

function walkLeftAndRight(){
    // console.log('inside walkLeftAndRight');
    if (walkLR){
        console.log('walkLR');
        if (tick === true){
            mercMale.x += moveSpeed;
            if (mercMale.x >= 512-75){
                tick = false;
                currentFrame = 0;
                mercMaleTexture.frame = leftAnim[currentFrame];
                mercMaleDirection = 1;
            }
        }
        else if (tick === false)
        {
            mercMale.x -= moveSpeed;
            if (mercMale.x <= 0){
                tick = true;
                currentFrame = 0;
                mercMaleTexture.frame = rightAnim[currentFrame];
                mercMaleDirection = 4;
            }
        }
    }
}

function walkInCircles(direction){
    if (walkCircles){
        console.log('walkInCircles');
        if (direction === 1){
            mercMale.x -= moveSpeed;
            if (mercMale.x <= 0){
                mercMale.x = 0;
                direction = 2;
                currentFrame = 0;
                mercMaleTexture.frame = upAnim[currentFrame];
                mercMaleDirection = 2;
            }
        }
        else if (direction === 2){
            mercMale.y -= moveSpeed;
            if (mercMale.y <= 0){
                mercMale.y = 0;
                direction = 4;
                currentFrame = 0;
                mercMaleTexture.frame = rightAnim[currentFrame];
                mercMaleDirection = 4;
            }
            
        }
        else if (direction === 3){
            mercMale.y += moveSpeed;
            if (mercMale.y >= 512-75){
                mercMale.y = 512-75;
                direction = 1;
                currentFrame = 0;
                mercMaleTexture.frame = leftAnim[currentFrame];
                mercMaleDirection = 1;
            }
            
        }
        else if (direction === 4){
            mercMale.x += moveSpeed;
            if (mercMale.x >= 512-75){
                mercMale.x = 512-75;
                direction = 3;
                currentFrame = 0;
                mercMaleTexture.frame = downAnim[currentFrame];
                mercMaleDirection = 3;
            }
            
        }
    }
}

function enableLR(){
    console.log('enableLR');
    elapsed = 0;
    currentFrame = 0;
    mercMaleDirection = 4; //1:left 2:up 3:down 4:right
    mercMaleTexture.frame = rightAnim[currentFrame];
    mercMale.x = 0;
    mercMale.y = 0;
    walkLR = true;
    walkCircles = false;
}
function enableCircles(){
    console.log('enableCircles');
    elapsed = 0;
    currentFrame = 0;
    mercMaleDirection = 4; //1:left 2:up 3:down 4:right
    mercMaleTexture.frame = rightAnim[currentFrame];
    mercMale.x = 0;
    mercMale.y = 0;
    walkLR = false;
    walkCircles = true;
}