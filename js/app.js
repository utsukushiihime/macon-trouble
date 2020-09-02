/* MVP */
// Will have 1 player
// Will encounter 3 small enemies
// Will encounter final boss
// Keeping track of HP
// Be able to attack
// Be able to defend

/* GamePlay
User clicks start button to begin game
A dialogue box pops up prompting the player to click a button to select a class
Select your Class - Options (50pt distribution between classes)
Warrior - Stats (Attack: 15, Defense: 10, Accuracy: 10, HP: 15)
Wizard - Stats(Attack: 18, Defense: 10, Accuracy: 14, HP: 8)
Rogue - Stats(Attack: 10, Defense: 15, Accuracy: 15, HP:10)
Healer - Stats(Attack: 10, Defense: 17, Accuracy: 10, HP: 13)
After the player selects a class, a sprite is randomly generated based on player class selection */

// Player Macon Trouble for side scrolling turn based RPG

// Goals 09/01/20
// create player classes and stats - DONE
// build functionality to allow player to select their class 
// Stretch Goal => randomly generate sprite based on class selected


// Bootstrap Modal for Dialogue
$('#gameDialogue').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
});

// TODO -- MOVE THESE TO Appropes spot later
// Monster starts hidden
$('.monster-sprite').hide();

// Controls and sprite start hidden
$('#right, #left').hide(); 
$('.character-sprite').hide();



// Player Classes and Stats
const playerClasses = [{
        type: 'Warrior',
        attack: 18,
        defense: 10,
        accuracy: 14,
        health: 15,
        image: [
            './img/characters/warrior/warrior-1.png', 
            './img/characters/warrior/warrior-2.png',
            './img/characters/warrior/warrior-3.png',
            './img/characters/warrior/warrior-4.png',
            './img/characters/warrior/warrior-5.png'

        ]
    },
    {
        type: 'Wizard',
        attack: 18,
        defense: 10,
        accuracy: 14,
        health: 8,
        image:
        [
            './img/characters/wizard/wizard-1.png', 
            './img/characters/wizard/wizard-2.png',
            './img/characters/wizard/wizard-3.png',
            './img/characters/wizard/wizard-4.png',
            './img/characters/wizard/wizard-5.png'

        ]
    },
    {
        type: 'Healer',
        attack: 10,
        defense: 17,
        accuracy: 10,
        health: 13,
        image: [
            './img/characters/healer/healer-1.png', 
            './img/characters/healer/healer-2.png',
            './img/characters/healer/healer-3.png',
            './img/characters/healer/healer-4.png',
            './img/characters/healer/healer-5.png'
        ]
    },
    {
        type: 'Rogue',
        attack: 10,
        defense: 15,
        accuracy: 15,
        health: 10,
        image: [
            './img/characters/rogue/rogue-1.png', 
            './img/characters/rogue/rogue-2.png',
            './img/characters/rogue/rogue-3.png',
            './img/characters/rogue/rogue-4.png',
            './img/characters/rogue/rogue-5.png'
        ]
    }
];


// create class options
const classOptions = [];

// copy Class type options to array
for (let i = 0; i < playerClasses.length; i++) {
    classOptions.push(playerClasses[i].type);
}


// create class options
const characterImages = [];

// copy character images to array
for (let i = 0; i < playerClasses.length; i++) {
    characterImages.push(playerClasses[i].image);

}

// TODO DRY up this section currently very MVP :)
// select characters

// Warrior 
const selectWarrior = () => {
    $('.warrior').append('<p>You selected Warrior</p>');
    $('.healer, .rogue, .wizard, .player-class-btn').hide();

    // get random character when 
    // show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${characterImages[0][0]}">`);
    $('#right, #left').show(); 
}

// Wizard
const selectWizard = () => {
    $('.wizard').append('<p>You selected Wizard</p>');
    $('.healer, .rogue, .warrior, .player-class-btn').hide();

    // get random character when 
    // show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${characterImages[1][0]}">`);
    $('#right, #left').show(); 
}

// Healer
const selectHealer = () => {
    $('.healer').append('<p>You selected Healer</p>');
    $('.warrior, .rogue, .wizard, .player-class-btn').hide();


    // get random character when 
    // show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${characterImages[2][0]}">`);
    $('#right, #left').show(); 
}

// Rogue
const selectRogue = () => {
    $('.rogue').append('<p>You selected Rogue</p>');
    $('.healer, .warrior, .wizard, .player-class-btn').hide();

    // get random character when 
    // show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${characterImages[3][1]}">`);
    $('#right, #left').show(); 
}

// TODO 
// hide characters options and start game
const playGame = () => {
    $('.modal-body').append('<p>Prepare for adventure. The game begins.</p>');
    $('.player-classes').replaceWith('<h4>Macon, you must hurry. The monsters are coming.</h4>');
}

// If player selects play game display message and hide begin my quest button and after close show character on screen

const startGame = () => {
    $('#start-game, .play-button').hide(); // hide button
    // show character on close
    // get selected class
}

// BUTTONS
$('#start-game').on('click', playGame);

// Player Class BUTTONS
// TODO Need to make this DRY when I have time
$('#warrior').on('click', selectWarrior);
$('#wizard').on('click', selectWizard);
$('#healer').on('click', selectHealer);
$('#rogue').on('click', selectRogue);
$('#start-game').on('click', startGame);

/*************************************/

// TODO Make the movement less janky
// TODO scroll the screen 

// Character Move Right
// FIXME character movement need to add bounce animatin and edit timing
$( "#right" ).click(function() {
    $( ".avatar-block" ).animate({ "left": "+=100px" }, 500 );
    $('#left').on('click', function (){
        $('.character-sprite').toggleClass('reverse-direction');
    })
  });
   
  // Character Move Left
  //FIXME flip back direction look at toggle
  $( "#left" ).click(function(){
    $( ".avatar-block" ).animate({ "left": "-=100px" }, 500 );

    $('#right').on('click', function (){
        $('.character-sprite').toggleClass('reverse-direction');
    })

    // $('.character-sprite-2').addClass('reverse-direction');
  });








