var player
var obstacle1 , obstacle2 , obstacle3 , obstacle4
var wall2,wall1,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30
var edges
var key

function preload(){  //xywidthheight

playerImage=loadImage("boy.png")
obstacle1Image=loadImage("c1.png")
keyImage=loadImage("key.png")

}



function setup(){
createCanvas(1090,720)

player=createSprite(30,40,10,10)
player.addImage(playerImage)
player.scale=0.06

obstacle1=createSprite(140,206,10,10)
obstacle1.addImage(obstacle1Image)
obstacle1.scale=0.06
obstacle1.velocityY=2

key=createSprite(64,266,10,10)
key.addImage(keyImage)
key.scale=0.06



wall1=createSprite(5,80,100,10)
wall2=createSprite(110,10,10,100)
wall3=createSprite(154,65,100,10)
wall4=createSprite(50,140,10,125)
wall5=createSprite(90,180,10,132)
wall6=createSprite(134,109,100,10)
wall7=createSprite(30,200,50,10)
wall8=createSprite(69,245,50,10)
wall9=createSprite(46,290,10,100)
wall10=createSprite(90,340,100,10)
wall11=createSprite(57,385,160,10)
wall12=createSprite(135,360,10,52)
wall13=createSprite(207,17,10,100)
wall14=createSprite(193,109,100,10)
wall15=createSprite(247,87,10,60)
wall16=createSprite(293,52,100,10)
wall17=createSprite(341,99,10,100)
wall18=createSprite(391,49,10,200)
wall19=createSprite(297,150,100,10)
wall20=createSprite(297,200,100,10)  
wall21=createSprite(392,168,10,190)
wall22=createSprite(204,150,100,10) 
wall23=createSprite(246,245,10,100)
wall24=createSprite(143,291,200,10)
wall25=createSprite(125,150,60,10)
wall26=createSprite(343,232,10,70)
wall27=createSprite(366,269,60,10)

wall1.shapeColor="red"
wall2.shapeColor="red"
wall3.shapeColor="red"
wall4.shapeColor="red"
wall5.shapeColor="red"
wall6.shapeColor="red"
wall7.shapeColor="red"
wall8.shapeColor="red"
wall9.shapeColor="red"
wall10.shapeColor="red"
wall11.shapeColor="red"
wall12.shapeColor="red"
wall13.shapeColor="red"
wall14.shapeColor="red"
wall15.shapeColor="red"
wall16.shapeColor="red"
wall17.shapeColor="red"
wall18.shapeColor="red"
wall19.shapeColor="red"
wall20.shapeColor="red"
wall21.shapeColor="red"
wall22.shapeColor="red"
wall23.shapeColor="red"
wall24.shapeColor="red"
wall25.shapeColor="red"
wall26.shapeColor="red"
wall27.shapeColor="red"



}




function draw(){
background("cyan")
 
if(player.isTouching(key)){
  wall27.x=100000  
}

edges=createEdgeSprites()
text(mouseX+ "," +mouseY,mouseX,mouseY)


if(keyDown(UP_ARROW)){
player.setVelocity(0,-2)
}

if(keyDown(DOWN_ARROW)){
player.setVelocity(0,2)
}

if(keyDown(LEFT_ARROW)){
 player.setVelocity(-2,0)   
}

if(keyDown(RIGHT_ARROW)){
player.setVelocity(2,0)    
}



player.bounceOff(edges)

player.bounceOff(wall1)
player.bounceOff(wall3)
player.bounceOff(wall2)
player.bounceOff(wall4)
player.bounceOff(wall5)
player.bounceOff(wall6)
player.bounceOff(wall7)
player.bounceOff(wall8)
player.bounceOff(wall9)
player.bounceOff(wall10)
player.bounceOff(wall11)
player.bounceOff(wall12)
player.bounceOff(wall13)
player.bounceOff(wall14)
player.bounceOff(wall15)
player.bounceOff(wall16)
player.bounceOff(wall17)
player.bounceOff(wall18)
player.bounceOff(wall19)
player.bounceOff(wall20)
player.bounceOff(wall21)
player.bounceOff(wall22)
player.bounceOff(wall23)
player.bounceOff(wall24)
player.bounceOff(wall25)


obstacle1.bounceOff(wall22)
obstacle1.bounceOff(wall23)
obstacle1.bounceOff(wall24)
obstacle1.bounceOff(wall25)




drawSprites()
}