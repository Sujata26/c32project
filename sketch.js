const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hour,min, sec, responseJSON,response, datetime;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(900,650);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    console.log(hour+":"+min);
   fill ("green")
   textSize(22);
    text("Time: "+hour+":"+min+":"+sec, 700, 40 );


}

async function getBackgroundImg(){

    // write code to fetch time from API
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     
    //change the data in JSON format
     responseJSON = await response.json();
    
    console.log(responseJSON.datetime);

    // write code slice the datetime
     datetime = responseJSON.datetime;
     hour = datetime.slice(11,13);
     min = datetime.slice(14,16);
     sec = datetime.slice(17,19);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }
    else if(hour>=10 && hour<12){

        bg = "sunrise4.png";
    }
    else if(hour>=12 && hour<14){
        //console.log("a1");
        bg = "sunrise5.png";
    }
    else if(hour>=14 && hour<=18){
        bg = "sunrise6.png";
    }

    //console.log("a");
    else if(hour>=18 && hour<=19){
        bg = "sunset7.png";
    }
    else if(hour>=19 && hour<=20){
        bg = "sunset8.png";
    }
    else if(hour>=20 && hour<=21){
        bg = "sunset9.png";
    }
    else if(hour>=21 && hour<=22){
        bg = "sunset10.png";
    }
    else if(hour>=22 && hour<=23){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
