function init() {
  console.log("init() successfully called.");
  stage = new PIXI.Container();
  renderer = PIXI.autoDetectRenderer( 800, 800, {view:document.getElementById("game-canvas")} );
  console.log(renderer);

  mercmaleTexture = PIXI.Texture.from("images/mercmale.png");
  mercmale = new PIXI.Sprite(mercmaleTexture);
  mercmale.position.x = 0;
  mercmale.position.y = 0;
  stage.addChild(mercmale);

  renderer.render(stage);
}

//Create a Pixi Application
let app = new PIXI.Application({ 
    width: 800,         // default: 800
    height: 800,        // default: 600
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
// let mainDiv = document.querySelector('.main');
// mainDiv.appendChild(app.view);



function test(){
  console.log('testy test test');
}

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
  stage.addChild(sprite);
}
