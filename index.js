var boxes = document.getElementsByClassName("box");
var rgb = document.getElementById("rgbhead");
var colors = generateRandomColor(6);
var pickedColor =colors[Math.floor(Math.random() * 6)];
rgb.textContent = pickedColor;
var playbtn = document.getElementById("playbtn");
var easyBtn = document.getElementById("easybtn");
var hardBtn = document.getElementById("hardbtn");
var boxCount = 6;
var statusText = document.getElementById("spann")
statusText.textContent = "Lets Play!!!";

function namehelper(){

    let name=document.getElementById("name");
    let userinput=prompt("Please enter your name?","For EX : RAM KUMAR");
    name.textContent="Let's Go "+userinput;
}

easyBtn.addEventListener("click", function() {

    

    statusText.textContent = "Let's Play!!";

    boxCount = 3;
    

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    rgb.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function() {
    

    statusText.textContent = "Let's Play!!";

    

    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    console.log(boxes.length)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";

    }
});


playbtn.addEventListener("click", function() {
    statusText.textContent = "Choose a color";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    rgb.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});


for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function() {
        var selectedColor = this.style.background;

        console.log(selectedColor);
        console.log(pickedColor);
        if (selectedColor === pickedColor) {
            win();

        } else {
            loose(this);
        }
    });
}


function win() {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }

    statusText.textContent = "YOU WON !!!!!!";
}


function loose(a) {
    console.log(a);
    a.style.background = "white"
    statusText.textContent = "Try Again!";
}


function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}