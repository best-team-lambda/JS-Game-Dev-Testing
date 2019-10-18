        let xBound = 800;
        let yBound = 800;
        
        //Aliases
        let Application = PIXI.Application,
            Container = PIXI.Container,
            loader = PIXI.Loader.shared,
            resources = PIXI.Loader.shared.resources,
            TextureCache = PIXI.utils.TextureCache,
            Sprite = PIXI.Sprite,
            Rectangle = PIXI.Rectangle;
        
        //Create a Pixi Application
        let app = new Application({ 
            width: xBound, 
            height: yBound,                       
            antialias: true, 
            transparent: false, 
            resolution: 1
          }
        );
        
        //Add the canvas that Pixi automatically created for you to the HTML document
        document.body.appendChild(app.view);
        
        //load a JSON file and run the `setup` function when it's done
        loader
          .add("images/mercmale.png")
          .load(setup);
        
        //Define variables that might be used in more 
        //than one function
        let mercMale;
        let mercMaleTexture;
        let mercMaleDirection = 4; //1:left 2:up 3:down 4:right
        let tick = true;
        const moveSpeed = 5;
        const leftAnim = [new Rectangle(0,0,75,75), new Rectangle(75,0,75,75), new Rectangle(150,0,75,75), new Rectangle(225,0,75,75)];
        const downAnim = [new Rectangle(0,75,75,75), new Rectangle(75,75,75,75), new Rectangle(150,75,75,75), new Rectangle(225,75,75,75)];
        const upAnim = [new Rectangle(0,150,75,75), new Rectangle(75,150,75,75), new Rectangle(150,150,75,75), new Rectangle(225,150,75,75)];
        const rightAnim = [new Rectangle(0,225,75,75), new Rectangle(75,225,75,75), new Rectangle(150,225,75,75), new Rectangle(225,225,75,75)];
        const idleAnim = [new Rectangle(0,300,75,75), new Rectangle(75,300,75,75), new Rectangle(150,300,75,75), new Rectangle(225,300,75,75)];
        const delay = 20;
        let elapsed = 0;
        let currentFrame = 0;
        const totalFrames = 3;
        const animLoop = false;
        let walkLR = false;
        let walkCircles = false;
        let walkKeys = true;
        
        let leftArrow = keyboard("ArrowLeft");
        let upArrow = keyboard("ArrowUp");
        let downArrow = keyboard("ArrowDown");
        let rightArrow = keyboard("ArrowRight");
        console.log(leftArrow);
        
        function setup() {
        
          //There are 3 ways to make sprites from textures atlas frames
        
          // //1. Access the `TextureCache` directly
          mercMaleTexture = TextureCache["images/mercmale.png"];
          mercMale = new Sprite(mercMaleTexture);
          app.stage.addChild(mercMale);
          
          
          mercMaleTexture.frame = rightAnim[0];

          //Start the game loop by adding the `gameLoop` function to
          //Pixi's `ticker` and providing it with a `delta` argument.
          app.ticker.add(delta => gameLoop(delta));
        }
        


        function gameLoop(delta){
          walkLeftAndRight();
          walkInCircles(mercMaleDirection);
          walkByKeys();
          animationUpdater();
        }
