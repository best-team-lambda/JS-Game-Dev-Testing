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
let mainDiv = document.querySelector('.main');
mainDiv.appendChild(app.view);


//Loader adds image from file path into texture cache, then runs setup function when complete.
PIXI.loader
  .add("/images/mercmale.png")
  .load(setup);
  // .add([
  //   "images/imageOne.png",
  //   "images/imageTwo.png",
  //   "images/imageThree.png"
  // ])
  // .load(setup);

//create the sprite var after loading is finished.
function setup() {
  let sprite = new PIXI.Sprite(
    PIXI.loader.resources["/images/mercmale.png"].texture
  );
  app.stage.addChild(sprite);
}
