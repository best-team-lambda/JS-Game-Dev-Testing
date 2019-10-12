https://best-team-lambda.github.io/JS-Game-Dev-Testing/

# JS-Game-Dev-Testing

Setup instructions:
For local development pixi.js needs a server to be ran. Install this:
github repo: https://github.com/http-party/http-server
command line install: npm install http-server -g

Then run the server with http-server (path)
http-server "/c/Users/user/Documents/git/2 Best Team/JS-Game-Dev-Testing"
It will give you an ip where the server is live, so like 127.0.0.1:8080/index.html

Changes to code wont show up unless you clear your browser's cache/cookies.

Pixi.js setup is already done. You just download pixi.js and then add it with a <script> tag.

Linking to mainJS.js caused lots of undefined errors trying to do DOM manipulation until async was added to the script tag. This lets the HTML get loaded first I guess.

Looks like hosting on gh-pages doesn't require anything special to get it working.

Less command:
less-watch-compiler less css index.less

http-server issues:

404's- when accessing via 127.0.0.1:8080/index.html, it could not find image assets. likely due to not being in the public folder?
use: http://localhost:8080/index.html instead- works as expected.


Sprites:
//load an image and run the `setup` function when it's done
PIXI.loader
  .add("images/cat.png")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  let cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
  
  //Add the cat to the stage
  app.stage.addChild(cat);
}
If you ever need to remove a sprite from the stage, use the `removeChild` method:
```js
app.stage.removeChild(anySprite)
```
But usually setting a sprite’s `visible` property to `false` will be a simpler and more efficient way of making sprites disappear.
```js
anySprite.visible = false;
```