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
// Controls and sprite start and other things that need to be hidden

/* HIDE ON ENTER */
$('#right, #left, .character-sprite, .health-bar, .monster-sprite').hide();


/* PLAYER */

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

/* RANDOM PLAYER SPRITE GENERATORS */
// Want to slect random per class if time permits
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
    $('#right, #left, .health-bar').show(); 
}

// Wizard Class
const selectWizard = () => {
    $('.wizard').append('<p>You selected Wizard</p>');
    $('.healer, .rogue, .warrior, .player-class-btn').hide();

    // TODO get random class specific character
    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left, .health-bar').show(); 
}

// Healer Class
const selectHealer = () => {
    $('.healer').append('<p>You selected Healer</p>');
    $('.warrior, .rogue, .wizard, .player-class-btn').hide();


    // TODO get random class specific character
    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left, .health-bar').show(); 
}

// Rogue Class
const selectRogue = () => {
    $('.rogue').append('<p>You selected Rogue</p>');
    $('.healer, .warrior, .wizard, .player-class-btn').hide();

    // TODO get random class specific character 
    // TODO show after close
    $('.avatar-block').append(`<img class="character-sprite image-fluid" src="${generateRandomSprite(characterImages)}">`);
    $('#right, #left, .health-bar').show(); 
}


/* MONSTERS */
const monsters = [
   {
    isBoss: false,
    image: './img/monsters/monster-1.png'
   },
   {
    isBoss: true,
    image: './img/monsters/monster-2.png'
   },
   {
    isBoss: true,
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
    isBoss: true,
    image: './img/monsters/monster-8.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-9.png'
   },
   {
    isBoss: false,
    image: './img/monsters/monster-10.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-11.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-12.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-13.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-14.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-15.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-16.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-17.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-18.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-19.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-20.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-21.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-22.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-23.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-24.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-25.png'
    },
    {
    isBoss: true,
    image: './img/monsters/monster-26.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-27.png'
    },
    {
    isBoss: true,
    image: './img/monsters/monster-28.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-29.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-30.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-31.png'
    },
    {
    isBoss: true,
    image: './img/monsters/monster-32.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-33.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-34.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-35.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-36.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-37.png'
    },
    {
    isBoss: true,
    image: './img/monsters/monster-38.png'
    },
    {
    isBoss: false,
    image: './img/monsters/monster-39.png'
    }
];

/* Monster Sounds */
monsterGrowls = [
    '../audio/monster-growl/Monster-01.wav',
    '../audio/monster-growl/Monster-02.wav',
    '../audio/monster-growl/Monster-03.wav',
    '../audio/monster-growl/Monster-04.wav',
    '../audio/monster-growl/Monster-05.wav',
    '../audio/monster-growl/Monster-06.wav',
    '../audio/monster-growl/Monster-will-die-1.wav',
    '../audio/monster-growl/Monster-will-die-2.wav',
    '../audio/monster-growl/Monster-will-die-3.wav',
    '../audio/monster-growl/Monster-will-die-4.wav'
]

/* Monster Images */
const monsterImages = [];
const monsterGrowl = [];

// get monster images
for (let i = 0; i < monsters.length; i++) {
    monsterImages.push(monsters[i].image);
} // console.log(monsterImages)

// get monster growls
for (let i = 0; i < monsterGrowls.length; i++) {
    monsterGrowl.push(monsterGrowls[i]);
} console.log(monsterGrowl);


/* RANDOM MONSTER GENERATOR */
const generateRandomMonster = () => {
    let randomMonster = monsterImages[Math.floor(Math.random()*monsterImages.length)];
    return randomMonster;
} 

/* RANDOM GROWL GENERATOR */
const generateRandomGrowl = () => {
    let randomGrowl = monsterGrowl[Math.floor(Math.random()*monsterGrowl.length)];
    return randomGrowl; // console.log(generateRandomGrowl(monsterGrowl))
} 


/* GAMEPLAY */

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

// TODO Add Audio and Monster Dialogue
// trigger monster on 5 clicks right
$(".trigger-monster").click(function() {
    count++;

    // trigger monster after 5 clicks right
    if (count === 5){
        if (count === 5){
            $('#monster').append(`<img class="monster-sprite image-fluid" src="${generateRandomMonster(monsterImages)}">`)
        }
    }
});

// BUTTONS
// Start Game
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
    $( ".avatar-block" ).animate({ "left": "+=80px" }, 500 );
  });

  // Need to keep character from moving off of the screen
  // Need to get character moving in the right direction properly

  // Character Move Left
  //FIXME flip back direction look at toggle
  $( "#left" ).click(function(){
    $( ".avatar-block" ).animate({ "left": "-=80px" }, 500 );
    $('.character-sprite').toggleClass('reverse-direction');
  });

// TODO Adapt healthbar
// Original Author:
// Dominik Widomski
// Adapted by: Crystal McNeil 09/02/20
// https://codepen.io/dwidomski/pen/KBzuo?editors=0010

$(document).on(function(){
    let hitBtn = $('button.damage'),
        reset = $('button.reset'),
        hBar = $('.health-bar'),
        bar = hBar.find('.bar'),
        hit = hBar.find('.hit');
    
    hitBtn.on("click", function(){
      let total = hBar.data('total'),
          value = hBar.data('value');
      
      if (value < 0) {
              log("you dead, reset");
        return;
      }
      // max damage is essentially quarter of max life
      let damage = Math.floor(Math.random()*total);
      // damage = 100;
      let newValue = value - damage;
      // calculate the percentage of the total width
      let barWidth = (newValue / total) * 100;
      let hitWidth = (damage / value) * 100 + "%";
      
      // show hit bar and set the width
      hit.css('width', hitWidth);
      hBar.data('value', newValue);
      
      setTimeout(function(){
        hit.css({'width': '0'});
        bar.css('width', barWidth + "%");
      }, 500);
      //bar.css('width', total - value);
      
      log(value, damage, hitWidth);
      
      if( value < 0){
        log("DEAD");
      }
    });
    
    reset.on('click', function(e){
      hBar.data('value', hBar.data('total'));
      
      hit.css({'width': '0'});
      
          bar.css('width', '100%');
          log("resetting health to 1000");
    });
  });
  
  // TODO
  function log(_total, _damage, _hitWidth){
    let log = $('.log');
    
    if(_damage !== undefined && _hitWidth !== undefined) {
        log.append("<div>H:"+_total+" D:"+_damage+" W:"+_hitWidth+" = " + (_total - _damage) + "</div>");
    } else {
      log.append("<div>"+_total+"</div>");
    }
  };


  // 09/03/20
  // Battle 
    // health bars
    // monster fights 3 small 1 boss
    // death - if HP = 0
    // win - if monster hp = 0
    // play again = reset
  // Styling 
  // Defensive programming 


// What are you most proud of with your logic? (Show us one code snippet and explain it)
    // Monster generator and trigger - it's short and simple but effective

// What as the hardest bug/feature that you had to overcome?
    // I am sure I will encounter that today. Ask me later. 

// If you could start the project over again what would you do differently?
    // Better time management


