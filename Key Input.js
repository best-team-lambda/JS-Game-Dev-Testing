function walkByKeys(){
    if (walkKeys){
        if (leftArrow.isDown)
        {
          console.log('Left Arrow Pressed!');
          mercMaleDirection = 1; //0:idle1:left 2:up 3:down 4:right
          mercMaleTexture.frame = leftAnim[currentFrame];
          if(mercMale.x > 0){
            mercMale.x -= moveSpeed;
            console.log(mercMale.x);
          }
        }
        if (upArrow.isDown)
        {
          console.log('Up Arrow Pressed!!');
          mercMaleDirection = 2; //0:idle1:left 2:up 3:down 4:right
          mercMaleTexture.frame = upAnim[currentFrame];
          if(mercMale.y > 0){
            mercMale.y -= moveSpeed;
            console.log(mercMale.y);
          }
        }
        if (downArrow.isDown)
        {
          console.log('Down Arrow Pressed!!');
          mercMaleDirection = 3; //0:idle1:left 2:up 3:down 4:right
          mercMaleTexture.frame = downAnim[currentFrame];
          if(mercMale.y < yBound-75){
            mercMale.y += moveSpeed;
            console.log(mercMale.y);
          }
        }
        if (rightArrow.isDown)
        {
          console.log('Right Arrow Pressed!!');
          mercMaleDirection = 4; //0:idle1:left 2:up 3:down 4:right
          mercMaleTexture.frame = rightAnim[currentFrame];
          if(mercMale.x < xBound-75){
            mercMale.x += moveSpeed;
            console.log(mercMale.x);
          }
        }
        if (!leftArrow.isDown && !upArrow.isDown && !downArrow.isDown && !rightArrow.isDown){
            mercMaleDirection = 0; //0:idle1:left 2:up 3:down 4:right
            mercMaleTexture.frame = idleAnim[currentFrame];
        }
    }
}//walkByKeys closer

function enableWalkByKeys(){
    console.log('enableWalkByKeys');
    elapsed = 0;
    currentFrame = 0;
    mercMaleDirection = 0; //0:idle1:left 2:up 3:down 4:right
    mercMaleTexture.frame = idleAnim[currentFrame];
    // mercMale.x = 0;
    // mercMale.y = 0;
    walkLR = false;
    walkCircles = false;
    walkKeys = true;
}