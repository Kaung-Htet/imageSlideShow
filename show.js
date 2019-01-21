var prev = document.getElementById ("prev");
var next = document.getElementById ("next");
var image = document.getElementById ("image");

var images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];

//initiate index value
var imageIndex = 0;
//create click event for previous
prev.onclick = function (){
//if image index is 0, will pass to last image    
    if (imageIndex == 0) {
        imageIndex = images.length - 1;
    }
    else {
        imageIndex--;
    }
    image.setAttribute ("src",images[imageIndex]);
}

next.onclick = function (){
    if (imageIndex == images.length - 1){
        imageIndex = 0;
    }
    else {
        imageIndex ++;
    }
    image.setAttribute ("src",images[imageIndex]);
}