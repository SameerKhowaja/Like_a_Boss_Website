var correctCards = 0;
var timer = 36;
var score = 0;
var level = 1;

$(init);

function init() {
    // Hide the success message
    $('#successMessage').hide();

    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var imgs = ['images/apple1.png', 'images/banana1.png', 'images/cherry1.png', 'images/grapes1.png', 'images/orange1.png', 'images/peach1.png', 'images/pear1.png', 'images/pineapple1.png', 'images/watermelon1.png'];
    numbers.sort(function() {
        return Math.random() - .5
    });

    for (var i = 0; i < 9; i++) {
        $('<div><img  src="' + imgs[numbers[i] - 1] + '" alt="alt"/></div>').data('number', numbers[i]).attr('id', 'card' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var imgs2 = ['images/apple2.png', 'images/banana2.png', 'images/cherry2.png', 'images/grapes2.png', 'images/orange2.png', 'images/peach2.png', 'images/pear2.png', 'images/pineapple2.png', 'images/watermelon2.png'];

    for (var i = 1; i <= 9; i++) {
        $('<div><img  src="' + imgs2[i - 1] + '" alt="alt"/></div>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }

}

function handleCardDrop(event, ui) {
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    if (slotNumber == cardNumber) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this),
            my: 'left top',
            at: 'left top'
        });
        ui.draggable.draggable('option', 'revert', false);
        correctCards++;
        score += 5;
        document.getElementById("scoring").innerHTML = score;

        document.getElementById("hitAudio").play();
    } else {
        document.getElementById("missAudio").play();
    }

    if (correctCards == 9) {
        level += 1;
        document.getElementById("levels").innerHTML = level;

        timer += 1;
        document.getElementById("timer").innerHTML = timer;

        $(init);
    }

}

function setWindowLoad() {
    document.getElementById("timer").innerHTML = timer;
}

var isplayed = false;

window.setInterval(function() {
    var time = document.getElementById("timer").innerHTML;
    if (time > 0) {
        time -= 1;
        document.getElementById("timer").innerHTML = time;
    } else {
        if (isplayed == false) {
            document.getElementById("outAudio").play();
            isplayed = true;
        } else {
            document.getElementById("outAudio").stop();
        }
        $('#successMessage').show();
        $('#cardPile').hide();
        $('#cardSlots').hide();
        $('#arrow').hide();
    }
}, 1000);

function refreshPage() {
    var person = prompt("Please enter your name to save scores", "Sameer Khowaja");
    window.location.reload();
}