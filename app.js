

var character = document.getElementById('character')
var block = document.getElementById('block')
var score = document.getElementById('score')
var count = 0;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function () {
        count++
        score.textContent = count;
        character.classList.remove("animate")
        switch (count) {
            case 5:
                block.style.animationDuration = '1.95s';
                character.style.animationDuration = '.5s';
                break;

            case  15:
                block.style.animationDuration = '1.90s';
                character.style.animationDuration = '.40s';
                break;

            case 30:
                block.style.animationDuration = '1.85s';
                character.style.animationDuration = '.35s';
                break;

            case 50:
                block.style.animationDuration = '1.80s';
                character.style.animationDuration = '.30';
                break;

            default:
                block.style.animationDuration = '1.95s';
                break;


        }

    }, 500)
}


var checkCollision = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        alert(`youre score: ${count}`)
        count = 0
        score.textContent =  0;
      
    }

}, 10);
       











