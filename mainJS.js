//Create a Pixi Application
let app = new PIXI.Application({ 
    width: 800,         // default: 800
    height: 800,        // default: 600
    //antialias: true,    // default: false
    //transparent: false, // default: false
    //resolution: 1       // default: 1
  }
);
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
