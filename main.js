var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    random_number = Math.floor(Math.random() * 4);
    console.log(random_number);
    background_image = imgs_array[random_number]; console.log("background_image = " + background_image);
    background_imgTag = new Image(); background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

}

function playaudio() {
    x.play("Happy B'day recording🎂");

}
var imgs_array = ["Bday img 1", "Bday img 2", "Bday img 3", "Bday img 4", "Bday img 5"];