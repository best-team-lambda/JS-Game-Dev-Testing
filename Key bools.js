//usage:
// if (IsReleased(Keys.Enter) | IsReleased(Keys.A) | IsReleased2(Buttons.A))
//     { do thing }


// public bool IsHeld(Keys key)
//     {
//         if (currentKeyboard.IsKeyDown(key))
//         { return true; }
//         else
//         { return false; }
//     }
// public bool IsReleased(Keys key)
//     {
//         if (currentKeyboard.IsKeyUp(key) && oldKeyboard.IsKeyDown(key))
//         { return true; }
//         else
//         { return false; }
//     }

//xbox controller
// public bool IsHeld2(Buttons button)
//     {
//         if (controllerState.IsButtonDown(button))
//         { return true; }
//         else
//         { return false; }
//     }
// public bool IsReleased2(Buttons button)
//     {
//         if (controllerState.IsButtonUp(button) && oldcontrollerState.IsButtonDown(button))
//         { return true; }
//         else
//         { return false; }
//     }

function keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
  
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    
    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );
    
    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
    };
    
    return key;
  }
