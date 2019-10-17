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
        
        }
        else if (mercMaleDirection === 3){
        
        }
        else if (mercMaleDirection === 4){
        mercMaleTexture.frame = rightAnim[currentFrame];
        }
    }
}

function walkLeftAndRight(){
    // console.log('inside walkLeftAndRight');
    if (tick === true){
      mercMale.x += moveSpeed;
      if (mercMale.x >= 512-75){
        tick = false;
        currentFrame = 0;
        elapsed = 0;
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
        elapsed = 0;
        mercMaleTexture.frame = rightAnim[currentFrame];
        mercMaleDirection = 4;
      }
    }
  }