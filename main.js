var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width=800;
block_image_height=800;

block_image_object="";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
       block_image_object=Img;
       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
        top:block_y,
        left:block_x
       });
       canvas.add(block_image_object); 
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='65'){
        new_image('um.jpg');
    }
    if(keyPressed=='66'){
        new_image('dois.jpg');
    }
    if(keyPressed=='67'){
        new_image('tres.jpg');
    }
    if(keyPressed=='68'){
        new_image('quatro.jpg');
    }
    if(keyPressed=='69'){
        new_image('cinco.jpg');
    }
}