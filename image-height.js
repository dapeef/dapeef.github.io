var containerElement = document.getElementById("welcome_container");
var textElement = document.getElementById("welcome_text");
var imageElement = document.getElementById("profile_photo");

var DELTA = .25; // Cancel approximation when the height difference is less than DELTA.
var border_width = 3; // Thickness of the image's border
var aspect_ratio = imageElement.offsetWidth / imageElement.offsetHeight;

var adjustImageHeight = function() {
    var counter = 0;

    while(Math.abs(textElement.offsetHeight - (imageElement.offsetHeight)) > DELTA && counter < 100)  {
        imageElement.style.height = ((imageElement.offsetHeight + textElement.offsetHeight) / 2 - border_width*2) + 'px';
        imageElement.style.width = imageElement.offsetHeight * aspect_ratio - border_width*2 + 'px';
        
        //Image grows larger than container, reset its size.
        if(imageElement.offsetWidth > containerElement.offsetWidth / 2) {
            imageElement.style.width = containerElement.offsetWidth / 2 - border_width*2 + 'px';
            imageElement.style.height = imageElement.offsetWidth / aspect_ratio - border_width*2 + 'px';

            console.log("yikes, too wide " + containerElement.offsetWidth + " " + imageElement.offsetWidth);

            return;
        };

        counter ++;
    };
};

window.addEventListener('resize', adjustImageHeight);
adjustImageHeight();
// imageElement.style.height = "22em"

// https://jsbin.com/puyuqehube/1/edit?html,css,js,output