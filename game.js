let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.floor(4 * Math.random());
    let randomColor = buttonColors[randomNumber];
    const randomButton = $('#' + randomColor);
    gamePattern.push(randomColor);

    randomButton.fadeOut(100).fadeIn(100);

    playAudio(randomColor);
}

function playAudio(name) {
    let audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function pressingAnimation(name) {
    const button = $('#' + name);
    button.addClass('pressed');
    setTimeout(function () {
        button.removeClass('pressed');
    }, 100);
}

function arrayEquals(one, two) {
    let result = one.length === two.length && one.every(function (element) {
        two.includes(element);
    })
    return result;
}

function arrayIncludedIn(one, two) {
    let result = one.every(function (element) {
        two.includes(element);
    })
    return result;
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        return true;
    } else {
        return false;
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

$(document).keydown(function () {
    if (level === 0) {
        nextSequence();
    }
})

$('.btn').click(function () {
    let userClickedColor = $(this).attr('id');
    playAudio(userClickedColor);
    pressingAnimation(userClickedColor);

    userClickedPattern.push(userClickedColor);

    if (checkAnswer(userClickedPattern.length - 1)) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        let audio = new Audio('sounds/wrong.mp3');
        audio.play();

        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);

        $('h1').text('Game Over, Press Any Key to Restart');

        startOver();
    }
})














































// let buttonColors = ['red', 'blue', 'green', 'yellow'];
// let gamePattern = [];
// let userClickedPattern = [];

// function nextSequence() {
//     level++;
//     $('#level-title').text(`Level ${level}`);
//     let randomNumber = Math.floor(4 * Math.random());

//     let randomChosenColor = buttonColors[randomNumber];

//     gamePattern.push(randomChosenColor);

//     const randomChosenButton = $(`#${randomChosenColor}`);

//     randomChosenButton.fadeOut(100).fadeIn(100);

//     playSound(randomChosenColor);
// }

// function playSound(name) {
//     let audio = new Audio('sounds/' + name + '.mp3');
//     audio.play();
// }

// function animatePress(currentColor) {
//     const currentButton = $('#' + currentColor);

//     currentButton.addClass('pressed');
//     setTimeout(function () {
//         currentButton.removeClass('pressed');
//     }, 100)
// }

// $('.btn').on('click', function () {
//     let userChosenColor = $(this).attr('id');
//     userClickedPattern.push(userChosenColor);
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
// })

// let level = 0;

// $(document).keydown(function () {
//     if (level === 0) {
//         nextSequence();
//     }
// })