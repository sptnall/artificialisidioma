var div, button, img, input, image, title;
var buttons=[];
var titles=[];
var myWidth;
var myHeight;
var isTouchDevice = false;
var backColor = 210;

function preload(){
  
  titles=["holy_shit", "cereal_killer", "wild_goose_chase", "spilt_milk", "baby_dont_hurt_me", "barking_up_the_wrong_tree", "burned_bridges", "not_rocket_science", "cutting_corners", "get_bent", "devils_lettuce", "bite_the_bullet", "cat_got_your_tongue", "cold_shoulder", "against_the_clock", "time_flies", "wasnt_born_yesterday", "walking_on_thin_ice" ];
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  div = createDiv('artificialis idioma');
  div.style('font-family', 'neon-tubes', '25px');
    //div.style('background-color', '#71D152');
  div.position(720, 800);
  for (let i=0; i<titles.length;i++){
    buttons[i]=createButton(titles[i]);
    title=titles[i];
    buttons[i].position(random(width-150),random(height-200));
    buttons[i].attribute('id', titles[i]);
    buttons[i].attribute('onclick', "changeImg('"+titles[i]+"')");
  }
 // button = createButton('this is a button');
 // button.position(100,200);
 // button.mousePressed(clearDrawing);
}


function draw() {
   // background(115,205,60);
  strokeWeight(2);
  stroke(0);
  //image(,width/2-img.width/2,height/2-img.height/2, img.width, img.height);
 //line(mouseX, mouseY, pmouseX, pmouseY);
}

function clearDrawing(){
  background(255);
  pmouseX=mouseX;
  pmouseY=mouseY;
 image(img,width/2-img.width/2,height/2-img.height/2, img.width, img.height);
}
