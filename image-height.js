var containerElement = document.getElementById("welcome_container");
var textElement = document.getElementById("welcome_text");
var imageElement = document.getElementById("profile_photo");

var DELTA = .25; // Cancel approximation when the height difference is less than DELTA.
var border_width = 3; // Thickness of the image's border

var adjustImageHeight = function() {
    console.log(imageElement.offsetHeight);
    console.log(textElement.offsetHeight);

    var counter = 0;

    while(Math.abs(textElement.offsetHeight - (imageElement.offsetHeight)) > DELTA && counter < 100)  {
        console.log(imageElement.offsetHeight + " " + textElement.offsetHeight)
        imageElement.style.height = ((imageElement.offsetHeight + textElement.offsetHeight) / 2 - border_width*2) + 'px';   
        console.log(imageElement.offsetHeight)
        
        //Image grows larger than container, reset its size.
        if(imageElement.offsetWidth > containerElement.offsetWidth) {
            imageElement.style.height = 'auto';
            return;
        };

        counter ++;
    };
};

window.addEventListener('resize', adjustImageHeight);
adjustImageHeight();
// imageElement.style.height = "22em"

// https://jsbin.com/puyuqehube/1/edit?html,css,js,output