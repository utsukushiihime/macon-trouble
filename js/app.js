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


// Player Classes and Stats
const playerClasses = [
    {
        type: 'Warrior',
        attack: 18,
        defense: 10,
        accuracy: 14,
        health: 15
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
}];

// Create plyer class types
class ClassTypes {
    constructor( type, attack, defense, accuracy, health) {
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.accuracy = accuracy;
        this.health = health;
    }
}

// console.log(playerClasses);


// Create the Player

const playerClassOptions = () => {
    for(let i = 0; i < playerClasses; i++) {
        let classType = playerClasses[i].type;
        return classType;
    }
    prompt(`It worked.`);
}


// return the class options on click
$('#select-class').on('click', playerClassOptions);



// Select a class



/* A pop-up dialogue box with party member stats and sprites displayed after companion generated.

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