/* MVP */
// Will have 1 player
// Will encounter 3 small enemies
// Will encounter final boss
// Keeping track of HP
// Be able to attack
// Be able to defend

// Player Macon Trouble for side scrolling turn based RPG

// NOTE Need to work on defensive programming.

// Bootstrap Modal for Dialogue

const play = () => {
    $('#gameDialogue').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    });
}

// TODO -- MOVE THESE TO Appropes spot later
// Monster starts hidden
$('.monster-sprite').hide();

// Controls and sprite start and other things that need to be hidden
$('#right, #left').hide(); 
$('.character-sprite').hide();

/* Player Classes and Stats */
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

/* MONSTERS */
const monsters = [
   {
    isBoss: false,
    image: './img/monsters/monster-1.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-2.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-3.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-4.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-5.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-6.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-7.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-8.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-9.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-10.png'
    }
];

// Character Class Type
const classOptions = [];

// get class types
for (let i = 0; i < playerClasses.length; i++) {
    classOptions.push(playerClasses[i].type);
}

// Character Class Images
const characterImages = [];

// get character images
for (let i = 0; i < playerClasses.length; i++) {
    characterImages.push(playerClasses[i].image);
}



// Monster Images
const monsterImages = [];

// get monster images
for (let i = 0; i < monsters.length; i++) {
    monsterImages.push(monsters[i].image);
}

// TODO DRY up this section currently very MVP :)

/* IMAGE GENERATORS */
const generateRandomSprite = () => {
    let randomSprite = characterImages[Math.floor(Math.random()*characterImages.length)];
    return randomSprite.slice(0,1);
} 

/* select characters */

// Warrior Class
const selectWarrior = () => {

    $('.warrior').append('<p>You selected Warrior</p>');
    $('.healer, .rogue, .wizard, .player-class-btn').hide();

    // TODO get random class specific character

    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left').show(); 
}

// Wizard Class
const selectWizard = () => {
    $('.wizard').append('<p>You selected Wizard</p>');
    $('.healer, .rogue, .warrior, .player-class-btn').hide();

    // TODO get random class specific character
    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left').show(); 
}

// Healer Class
const selectHealer = () => {
    $('.healer').append('<p>You selected Healer</p>');
    $('.warrior, .rogue, .wizard, .player-class-btn').hide();


    // TODO get random class specific character
    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left').show(); 
}

// Rogue Class
const selectRogue = () => {
    $('.rogue').append('<p>You selected Rogue</p>');
    $('.healer, .warrior, .wizard, .player-class-btn').hide();

    // TODO get random class specific character 
    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left').show(); 
}

// TODO 
// hide characters options and start game
const playGame = () => {
    // WELCOME
    $('.player-classes').replaceWith('<h4>Macon, you must hurry. The monsters are coming.</h4><p>Monsters have been spotted in the countryside. If they make it to the village of Skillet, it will be destroyed.</p><p>All of the village’s warriors are either too old or off fighting in the Pork Wars. Panic sets into Skillet until Macon, a young farmer, volunteers to meet the threat head-on. Equipped with his late father’s weapon, Macon embarks into the wilderness to meet these vile creatures head-on.</p>');

    // RULES
    $('.rules').append('<h4>Rules:</h4><ol><li>Use left and right arrow to move back and forth on the screen.</li> <li>You must defeat 3 enemies and 1 boss to win.</li> <li>If your health falls to zero you lose.</li></ol>')
}

// If player selects play game display message and hide begin my quest button 
// TODO after close show character on screen
const startGame = () => {
    $('#start-game, .play-button, .classes').hide(); // hide button
    // show character on close
    // get selected class
}

// Trigger Monster
let count = 0;

// TODO trigger monster on 5 clicks right
$(".trigger-monster").click(function() {
    count++;
    $("#counter").html("My current count is: "+count);
});

// BUTTONS
$('#start-game').on('click', playGame);

// Player Class BUTTONS
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
        $('.character-sprite').toggleClass('reverse-direction');
  });

  // Need to keep character from moving off of the screen
  // Need to get character moving in the right direction properly

  // Character Move Left
  //FIXME flip back direction look at toggle
  $( "#left" ).click(function(){
    $( ".avatar-block" ).animate({ "left": "-=100px" }, 500 );
    $('.character-sprite').toggleClass('reverse-direction');
  });








