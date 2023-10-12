var containerElement = document.getElementById("welcome_container");
var textElement = document.getElementById("welcome_text");
var imageElement = document.getElementById("profile_photo");

//Cancel approximation when the height difference is less than DELTA.
var DELTA = 1;

var adjustImageHeight = function() {
    console.log(imageElement.offsetHeight);
    console.log(textElement.offsetHeight);

    while(Math.abs(textElement.offsetHeight - imageElement.offsetHeight) > DELTA) {
        imageElement.style.height = ((imageElement.offsetHeight + textElement.offsetHeight) / 2) + 'px';   
        console.log(imageElement.offsetHeight) 
        
        //Image grows larger than container, reset its size.
        if(imageElement.offsetWidth > containerElement.offsetWidth) {
            imageElement.style.height = 'auto';
            return;
        };
    };
};

// window.addEventListener('resize', adjustImageHeight);
// adjustImageHeight();