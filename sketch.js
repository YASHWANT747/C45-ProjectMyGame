var player, playerI;
var bg;
var floor, floorI;
var playerR, playerL;
var alien, alienR;
var alienL;
var shipI;
var msl, mslI;


function preload(){
    bg = loadImage("images/bg.png");
    floorI = loadImage("images/pagenta.png");
    playerI = loadImage("images/front.png");
    playerR = loadImage("images/right.png");
    playerL = loadImage("images/left.png");
    alienR = loadImage("images/genr.png");
    alienL = loadImage("images/genl.png");
    shipI = loadImage("images/ship.png");
    mslI = loadImage("images/msl.png");
}

function setup(){
    createCanvas(1000,600);

    floor = createSprite(500,612,1000,2);
    floor.addImage(floorI)
    floor.scale = 2;

    player = createSprite(500,520,50,50);
    player.addImage(playerI)
    player.scale = 0.35;

    enemyGroup = new Group()
}

function draw(){
    background(bg);
 
    enemy();
    missile();

    if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 5;
        player.addImage(playerR);
        player.scale = 0.43;
        //player.debug = true;
        //player.setCollider("rectangle",500,520,100,100);
    }
    if(keyDown("LEFT_ARROW")){
        player.x = player.x - 5;
        player.addImage(playerL);
        player.scale = 0.35;
    }
    if(keyDown("UP_ARROW")){
        player.addImage(playerI);
        player.scale = 0.35;
    }
    drawSprites();
}

function enemy(){
    if(frameCount % 120 === 0){
        var alien = createSprite(Math.round(random(100,900)),0,20,20);
        var rand = Math.round(random(1,3));
        switch (rand){
            case 1 : alien.addImage(alienR);
            alien.scale = 0.3;
            break;

            case 2 : alien.addImage(alienL);
            alien.scale = 0.1;
            break;

            case 3 : alien.addImage(shipI);
            alien.scale = 0.4;
            break;

            default:break;
        }
        alien.velocityY = 3; 
        enemyGroup.add(alien);
    }
    
}
    function missile(){
        msl = createSprite(player.x , player.y , 20 ,20);
        msl.addImage(mslI);
        msl.scale = 0.3;
    }
