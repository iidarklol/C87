canvas = new fabric.Canvas("myCanvas")  

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object = "";

function player_update(){

    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

    }); 
}

function new_img(get_image){

    fabric.Image.fromURL(get_image, function(Img) {
    player_object = Img;

    block_img_object.scaleToWidth(150);
    block_img_object.scaleToHeight(140);
    block_img_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

    }); 

}
 window.addEventListener("keydown", my_keydown);
 
 function my_keydown(e){
     keyPressed = e.keyCode
     console.log(keyPressed);
     if(e.shiftKey == true && keyPressed == "80"){
           console.log("p and shift pressed together");
            block_img_width = block_img_width + 10;
            block_img_height = block_img_height + 10;
            document.getElementById("current_width").innerHTML = block_img_width
            document.getElementById("current_height").innerHTML = block_img_height   
     } 
     if(e.shiftKey && keyPressed == "77"){
         console.log("m and shift pressed together");
         block_img_width = block_img_width - 10;
         block_img_height = block_img_height - 10;
         document.getElementById("current_width").innerHTML = block_img_width
         document.getElementById("current_height").innerHTML = block_img_height
     }
     if(keyPressed == "70"){
         new_img("ironman_face.png")
         console.log("f");
     }
    if(keyPressed == "66"){
        new_img("spiderman_body.png")
        console.log("b");
    }   
    if(keyPressed == "76"){
        new_img("hulk_legs.png")
        console.log("l");
    }
    if(keyPressed == "82"){
        new_img("thor_right_hand.png")
        console.log("r");
    }  
    if(keyPressed == "72"){
        new_img("captin_america_left_hand.png")
        console.log("h");
    } 
 }     
  