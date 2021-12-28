for (var i = 0;  i < document.querySelectorAll(".drum").length;  i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonPressed(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    var buttonInnerHTML = event.key;
    makeSound(buttonInnerHTML);
    buttonPressed(buttonInnerHTML);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();

            break;
    
        case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();

            break;
    
        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();

            break;
    
        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();

        case "j":
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();

            break;
    
        case "k":
            var audio6 = new Audio("sounds/kick-bass.mp3");
            audio6.play();

            break;
    
        case "l":
            var audio7 = new Audio("sounds/crash.mp3");
            audio7.play();

            break;
    
        default:
            console.log();
            break;
    }
}

function buttonPressed(key) {
    var buttons = document.querySelector("." + key);
    buttons.classList.add("pressed");
    setTimeout(function () {buttons.classList.remove("pressed")}, 100)
}