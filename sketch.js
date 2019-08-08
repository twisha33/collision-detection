var fixedRect,movingRect;
 function setup() {
    createCanvas(1200,800); 
    fixedRect=createSprite(200,200,50,80); 
    fixedRect.shapeColor="purple";
     moveRect=createSprite(400,200,80,30);
      moveRect.shapeColor="purple";

     } 
     
     function draw() {
        background(0,0,0); 
        moveRect.x=World.mouseX;
         moveRect.y=World.mouseY;
          if(moveRect.x-fixedRect.x<fixedRect.width/2+moveRect.width/2
             &&  fixedRect.x-moveRect.x< fixedRect.width/2+moveRect.width/2
             && moveRect.y-fixedRect.y<fixedRect.height/2+moveRect.height/2
             && fixedRect.y-moveRect.y<fixedRect.height/2+moveRect.height/2){ 
            
          moveRect.shapeColor="red";
           fixedRect.shapeColor="red";
         }
           else{
              moveRect.shapeColor="purple";
               fixedRect.shapeColor="purple"; 
              }

            drawSprites(); 
          }