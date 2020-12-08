var teacher, apple, bigApple, TeacherImage, score = 0, badApple, goodAppleGroup, appleVelocity, state = "play", violentBadApple,redRectangle;
var violentMode = "false";

function preload(){
teacherImage = loadImage("OIP (5).jpeg");
violentBadApple = loadImage("rsz_oip_5.png");
redRectangle = loadImage("OIP (6).jpeg")
  
  
}

function setup(){
  createCanvas(600,600)
  
  goodAppleGroup = new Group();
  badAppleGroup = new Group();
  
  teacher = createSprite(300,300,30,80);
  teacher.addImage(teacherImage);
  teacher.scale = 0.2;
  
  badAppleSpawn();
}

function draw(){
  background("white");
  
   text("Score: "+score,400,30)
  
  
  


  
  
  drawSprites();
  
  
  
  if (state === "play"){
    teacher.y = mouseY;
    teacher.x = mouseX;
    
  if (keyDown("v")){
    violentMode = "true";
    teacher.addImage(redRectangle)
  }
    
   
  
    
   if(frameCount%70 === 0){
     var decider = Math.round(random(1,2))
     if (decider === 2){
       appleSpawn();
     }
     else if (decider === 1){
       badAppleSpawn();
     }
  }
  if(teacher.isTouching(goodAppleGroup)){
    score = score + 1;
    goodAppleGroup.destroyEach();
  }
  else if(teacher.isTouching(badAppleGroup)){
    badAppleGroup.destroyEach();
    state = "end"
  
  }
}
  if (state === "end"){
    teacher.visible = false;

  text("Game Over! Press the space bar to restart. Your final score was " + score, 100, 200);
    if (keyDown("space")){
      state = "play";
      teacher.visible = true;
    }
  
}
}


function appleSpawn(){
  apple = createSprite(Math.round(random(100,500)),0,20,20);
  if (violentMode === "false"){
    apple.shapeColor = "red";
    apple.velocityY = (score + 6);
    goodAppleGroup.add(apple);
    
  }
  else if (violentMode === "true"){
    apple.addImage(teacherImage);
    apple.scale = 0.2;
    apple.velocityY = (score + 6);
    goodAppleGroup.add(apple);
  }
  }
function badAppleSpawn(){
  badApple = createSprite(Math.round(random(100,500)),0,20,20);
  if (violentMode === "false"){
    badApple.shapeColor = "green"
    badApple.velocityY = (score + 6);
    badAppleGroup.add(badApple);
  
  }
  else if (violentMode === "true"){
    badApple.addImage(violentBadApple);
    badApple.velocityY = (score + 6);
    badAppleGroup.add(badApple);
  }
}
 
  
  