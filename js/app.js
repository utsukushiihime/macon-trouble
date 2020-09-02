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
            '../img/characters/warrior/warrior-1.png', 
            '../img/characters/warrior/warrior-2.png',
            '../img/characters/warrior/warrior-3.png',
            '../img/characters/warrior/warrior-4.png',
            '../img/characters/warrior/warrior-5.png'

        ]
    },
    {
        type: 'Wizard',
        attack: 18,
        defense: 10,
        accuracy: 14,
        health: 8
    },
    {
        type: 'Healer',
        attack: 10,
        defense: 17,
        accuracy: 10,
        health: 13
    },
    {
        type: 'Rogue',
        attack: 10,
        defense: 15,
        accuracy: 15,
        health: 10
    }
];


// create class options
const classOptions = [];

// copy Class type options to 
for (let i = 0; i < playerClasses.length; i++) {
    classOptions.push(playerClasses[i].type);
}

// TODO DRY up this section currently very MVP :)
// select characters

// Warrior 
const selectWarrior = () => {
    $('.warrior').append('<p>You selected Warrior</p>');
    $('.healer, .rogue, .wizard').hide();
    $('#warrior .btn .btn-secondary').hide();
}

// Wizard
const selectWizard = () => {
    $('.wizard').append('<p>You selected Wizard</p>');
    $('.healer, .rogue, .warrior').hide();
}

// Healer
const selectHealer = () => {
    $('.healer').append('<p>You selected Healer</p>');
    $('.warrior, .rogue, .wizard').hide();
}

// Rogue
const selectRogue = () => {
    $('.rogue').append('<p>You selected Rogue</p>');
    $('.healer, .warrior, .wizard').hide();
}

// TODO 
// hide characters options and start game
const playGame = () => {
    $('.modal-body').append('<p>Prepare for adventure. The game begins.</p>');
    $('.classes').hide();
}


// If player selects play game display message and hide begin my quest button and after close show character on screen

const startGame = () => {
    $('#start-game').hide(); // hide button
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
  });
   
  // Character Move Left
  //FIXME flip back direction look at toggle
  $( "#left" ).click(function(){
    $( ".avatar-block" ).animate({ "left": "-=100px" }, 500 );
    $('.character-sprite').addClass('reverse-direction');
    // $('.character-sprite-2').addClass('reverse-direction');
  });


  // if 5 clicks 




  
/* A pop-up dialogue box with party member stats and sprites displayed after companion generated.

// NOTE
// Goals 09/02/2020 
// Generate Random Character Sprite
// Display Selected Character Stats
// Start Gameplay
// Stretch Goal = > Generate Random Monster

// NOTE
// Possible blockers 
// Not accounting for unexpected user interaction
// Perfectionism / Need to remember MVP
// ME: Staying focused on one feature at a time


Stats are displayed beside the character sprites

Dialogue for Pop-up:

This is your party. Are you ready for adventure? Yes or No?
If the player clicks yes, start the game. If the player clicks no, exit game.

After the yes button is clicked, display the game rules and interaction in the dialogue box.
Right arrow to move forward, back arrow to move backward.
The player can select a button from a dialogue box with an attack option when encountering an enemy. */


/* Once in battle, you must play till the end of the encounter.
The player wins if they beat the boss, there will be 3 enemy encounters before the boss.
If the player moves across the screen to the right for 5 seconds, an enemy encounter will be triggered.
A dialogue box will pop up when you encounter an enemy with options:
Do you want to attack or run away? If the player clicks the attack button, the battle begins. If the player clicks the runaway button, the game ends.
If the player clicks attack, a dialogue box will open with attack options:
Option 1: Click the button to Attack = Base attack
Option 2: Click the button to Defend = +5 to Defense (adds to defense on next attack from the enemy) */


/* If the player selects the attack button, damage dealt to enemy is displayed in the dialogue box, then the player character’s turn ends.
Then the enemy attacks a random party member if multiple part members otherwise enemy attacks player.
A dialogue box pops up with a message displaying the damage dealt and to whom.
The gameplay loop repeats until 3 encounters have been cleared.

After 3 encounters have been cleared, the boss appears. */

/* Boss fight functions the same as the other encounters with higher stats.

Once the boss is defeated, a dialogue box pops up saying “You have saved the village” with button options to play again or exit. If the player clicks play again, the game resets and starts again. If the player chooses to exit, the credits roll, and the game exits. */


// FIXME
// FIXME
// NOTE
// // start off with a global health variable
// let health = 20;


// create monsters array
// let monsters = [
//     {

// }
// ];

// keep track of monst
// let currentMonster = 0;
// Need to create monsters array
// console.log(monsters[currentMonster]);

// const generateMonster = () => {
    // empty unnecessary elements with jquery .empty

    // for (let i = 0; i < monsters.length; i++){
        // cosnole.log(monsters[i]);

        // this allows us to show what monster player is on
//         if (i === currentMonster) {
//             $('#monster').append(<div>Monster goes here</div>);
//         } else {
//             $('#monster').append(<div>Do this thing</div>);
//         }
       
//     }
// }

// need to set monster to generate when user moves across the screen
// for 5 seconds
// generateMonster();


// NOTE 

// start game
// const start = () => {
    // show sprite
    // show buttons

    // generate monster when player moves or 5secs
//     generateMonster();
// }

// concept start to fight monster
// const fightMonster = () => {
//     const monster = monster[currentMonster];
//     health = health-monster.damage; 
    // if monster successfully deals damage
// }


// NOTE how to manipulate health

// let health = maxHealth;  // get he health of the character this is your starting health

// if player class = warrior return warrior health
// return health for each assign as starting health

