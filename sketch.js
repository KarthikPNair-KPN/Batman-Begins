const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine,world;
var raindrops1 = [];
var raindrops2 = [];
var thunder1,thunder2,thunder3,thunder4;
var thunder1img,thunder2img,thunder3img,thunder4img;
var man,manAnim;

function preload(){
    thunder1img = loadImage("1.png");
    thunder2img = loadImage("2.png");
    thunder3img = loadImage("3.png");
    thunder4img = loadImage("4.png");

    manAnim = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}

function setup(){
    createCanvas(900,1400);
    engine = Engine.create();
    world = engine.world;

    thunder1 = createSprite(300,5,20,30);
    thunder2 = createSprite(200,5,20,30);
    thunder3 = createSprite(500,5,20,30);
    thunder4 = createSprite(600,5,20,30);

      if(frameCount % 0.15 === 0){
        var raindrop1 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop1);
      }

      if(frameCount % 0.15 === 0){
        var raindrop2 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop2);
      }  

      if(frameCount % 0.15 === 0){
        var raindrop3 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop3);
      }  

      if(frameCount % 0.15 === 0){
        var raindrop4 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop4);
      }  

      if(frameCount % 0.15 === 0){
        var raindrop5 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop5);
      }

      if(frameCount % 0.15 === 0){
        var raindrop6 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop6);
      }  

      if(frameCount % 0.15 === 0){
        var raindrop7 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop7);
      }

      if(frameCount % 0.15 === 0){
        var raindrop8 = new Drop(random(30,400), -100);
        raindrops1.push(raindrop8);
      }

      if(frameCount % 0.15 === 0){
        var raindrop9 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop9);
      }

      if(frameCount % 0.15 === 0){
        var raindrop10 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop10);
      }

      if(frameCount % 0.15 === 0){
        var raindrop11 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop11);
      }

      if(frameCount % 0.15 === 0){
        var raindrop12 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop12);
      }

      if(frameCount % 0.15 === 0){
        var raindrop13 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop13);
      }

      if(frameCount % 0.15 === 0){
        var raindrop14 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop14);
      }

      if(frameCount % 0.15 === 0){
        var raindrop15 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop15);
      }

      if(frameCount % 0.15 === 0){
        var raindrop16 = new Drop(random(500,900), -100);
        raindrops2.push(raindrop16);
      }
    man = createSprite(450,1050,50,40);
    man.addAnimation("walking",manAnim);
}

function draw(){
    background(0);
    Engine.update(engine);

        if(frameCount % 10 === 0) {
          var rand1 = Math.round(random(1,4));
          
            switch(rand1) {
              case 1:thunder1.addImage(thunder1img);
                    thunder1.scale = 1;
                    break;

              case 2:thunder1.addImage(thunder2img);
                    thunder1.scale = 1;
                    break;

              case 3:thunder1.addImage(thunder3img);
                     thunder1.scale = 1;
                     break;  
                     
              case 4:thunder1.addImage(thunder4img);
                     thunder1.scale = 1;
                     break;       
                     
             default: break;
          }
        }   

        if(frameCount % 10 === 0) {
          var rand2 = Math.round(random(1,4));
            switch(rand2) {
              case 1:thunder2.addImage(thunder1img);
                     thunder2.scale = 1;
                     break;

              case 2:thunder2.addImage(thunder2img);
                     thunder2.scale = 1;
                     break;

              case 3:thunder2.addImage(thunder3img);
                     thunder2.scale = 1;
                     break;
                     
              case 4:thunder2.addImage(thunder4img);
                     thunder2.scale = 1;
                     break;  

              default:break;
            }
          }  

          if(frameCount % 10 === 0) {
            var rand3 = Math.round(random(1,4));
              switch(rand3) {
                case 1:thunder3.addImage(thunder1img);
                       thunder3.scale = 1;
                       break;
  
                case 2:thunder3.addImage(thunder2img);
                       thunder3.scale = 1;
                       break;
  
                case 3:thunder3.addImage(thunder3img);
                       thunder3.scale = 1;
                       break;
                       
                case 4:thunder3.addImage(thunder4img);
                       thunder3.scale = 1;
                       break;  
  
                default:break;
              }
            }

            if(frameCount % 10 === 0) {
              var rand4 = Math.round(random(1,4));
                switch(rand4) {
                  case 1:thunder4.addImage(thunder1img);
                         thunder4.scale = 1;
                         break;
    
                  case 2:thunder4.addImage(thunder2img);
                         thunder4.scale = 1;
                         break;
    
                  case 3:thunder4.addImage(thunder3img);
                         thunder4.scale = 1;
                         break;
                         
                  case 4:thunder4.addImage(thunder4img);
                         thunder4.scale = 1;
                         break;  
    
                  default:break;
                }
              }

      for(var i = 0; i < raindrops1.length; i++){
        raindrops1[i].display();
        raindrops1[i].fall(40);
      } 

      for(var j = 0; j < raindrops2.length;j++){
        raindrops2[j].display();
        raindrops2[j].fall(40);
      } 

    

    drawSprites();
}   

