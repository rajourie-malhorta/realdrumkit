function clickEvent(e) {
    play(e.target.innerText);
}

function keyDown(e) {
    play(e.key);
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('inplay');
}

let divLength = document.querySelectorAll(".key");
for (const event of divLength) {
    event.addEventListener("click", clickEvent);
}
document.addEventListener("keydown", keyDown);

function  removeInplayTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('inplay');
}



const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeInplayTransition));
for (var i=0; i < keys.length; ++i) {
    keys[i].addEventListener("click", function (e) {
        this.classList.add('inplay');

    });
}
function play(e) {
    switch (e) {
        case "f": {
            let crash = new Audio("audio/crash_1.wav");
            crash.play();
            break;
        }

        case "F": {
            let crash = new Audio("audio/crash_1.wav");
            crash.play();
            break;
        }
        case "g": {
            let tom1 = new Audio("audio/tom-1.mp3");
            tom1.play();
            break;
        }
        case "G": {
            let tom1 = new Audio("audio/tom-1.mp3");
            tom1.play();
            break;
        }

        case "h": {
            let tom2 = new Audio("audio/tom-2.mp3");
            tom2.play();
            break;
        }
        case "H": {
            let tom2 = new Audio("audio/tom-2.mp3");
            tom2.play();
            break;
        }

        case "J": {
            let crash = new Audio("audio/crash_1.wav");
            crash.play();
            break;
        }
        case "j": {
            let crash = new Audio("audio/crash_1.wav");
            crash.play();
            break;
        }

        case "z": {
            let closeHH = new Audio("audio/hihat_1.wav");
            closeHH.play();
            break;
        }
        case "Z": {
            let closeHH = new Audio("audio/hihat_1.wav");
            closeHH.play();
            break;
        }

        case "x": {
            let openHH = new Audio("audio/hihat_2.wav");
            openHH.play();
            break;
        }
        case "X": {
            let openHH = new Audio("audio/hihat_2.wav");
            openHH.play();
            break;
        }

        case "c": {
            let kick = new Audio("audio/kick_3.wav");
            kick.play();
            break;
        }
        case "C": {
            let kick = new Audio("audio/kick_3.wav");
            kick.play();
            break;
        }

        case "v": {
            let snare = new Audio("audio/snare.mp3");
            snare.play();
            break;
        }
        case "V": {
            let snare = new Audio("audio/snare.mp3");
            snare.play();
            break;
        }

        case "b": {
            let snare = new Audio("audio/snare.mp3");
            snare.play();
            break;
        }
        case "B": {
            let snare = new Audio("audio/snare.mp3");
            snare.play();
            break;
        }

        case "n": {
            let kick = new Audio("audio/kick_3.wav");
            kick.play();
            break;
        }
        case "N": {
            let kick = new Audio("audio/kick_3.wav");
            kick.play();
            break;
        }

        case "m": {
            let floor = new Audio("audio/tom-4.mp3");
            floor.play();
            break;
        }
        case "M": {
            let floor = new Audio("audio/tom-4.mp3");
            floor.play();
            break;
        }

        default: {
            break;
        }
    }
}












