/* MVP */
// Will have 1 player
// Will encounter 3 small enemies
// Will encounter final boss
// Keeping track of HP
// Be able to attack
// Be able to defend

// Player Macon Trouble for side scrolling turn based RPG

// NOTE Need to work on defensive programming
// DEF NEEDS TO BE MORE DRY.

// Modal for Dialogue

const play = () => {
  $("#gameDialogue").on("shown.bs.modal", function () {});
};

// Monster starts hidden
// Controls and sprite start and other things that need to be hidden

/* ELEMENTS TO HIDE ON ENTER */
$(
  "#right, #left, .character-sprite, .health-bar, .log, .monster-sprite, #start-game, .fight, .retreat"
).hide();

/* PLAYER */

/* Player Classes and Stats */
const playerClasses = [
  {
    type: "Warrior",
    attack: 18,
    defense: 10,
    accuracy: 10,
    health: 15,
    image: [
      "./img/characters/warrior/warrior-1.png",
      "./img/characters/warrior/warrior-2.png",
      "./img/characters/warrior/warrior-3.png",
      "./img/characters/warrior/warrior-4.png",
      "./img/characters/warrior/warrior-5.png",
    ],
  },
  {
    type: "Wizard",
    attack: 18,
    defense: 10,
    accuracy: 14,
    health: 8,
    image: [
      "./img/characters/wizard/wizard-1.png",
      "./img/characters/wizard/wizard-2.png",
      "./img/characters/wizard/wizard-3.png",
      "./img/characters/wizard/wizard-4.png",
      "./img/characters/wizard/wizard-5.png",
    ],
  },
  {
    type: "Healer",
    attack: 10,
    defense: 17,
    accuracy: 10,
    health: 13,
    image: [
      "./img/characters/healer/healer-1.png",
      "./img/characters/healer/healer-2.png",
      "./img/characters/healer/healer-3.png",
      "./img/characters/healer/healer-4.png",
      "./img/characters/healer/healer-5.png",
    ],
  },
  {
    type: "Rogue",
    attack: 10,
    defense: 15,
    accuracy: 15,
    health: 10,
    image: [
      "./img/characters/rogue/rogue-1.png",
      "./img/characters/rogue/rogue-2.png",
      "./img/characters/rogue/rogue-3.png",
      "./img/characters/rogue/rogue-4.png",
      "./img/characters/rogue/rogue-5.png",
    ],
  },
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
// Want to select random sprite per class if time permits
const generateRandomSprite = () => {
  let randomSprite =
    characterImages[Math.floor(Math.random() * characterImages.length)];
  return randomSprite.slice(0, 1);
};

/* select characters */

// Warrior Class
const selectWarrior = () => {
  $(".warrior").click(function () {
    let text = $(this).text();

    $("input").val(text);
    $(".warrior-class-selected").append(`You selected <b>${text}</b>`);
  });

  playMagicSnap.play();
  $(".healer, .rogue, .wizard, .player-class-btn, #close-dialogue").hide();

  $(".avatar-block").append(
    `<img class="character-sprite image-fluid warrior-selected" src="${generateRandomSprite(
      characterImages
    )}">`
  );
  $("#right, #left, .health-bar, #start-game").show();
};

// Wizard Class
const selectWizard = () => {
  $(".wizard").click(function () {
    let text = $(this).text();

    $("input").val(text);
    $(".wizard-class-selected").append(`You selected <b>${text}</b>`);
  });

  playMagicSnap.play();
  $(".healer, .rogue, .warrior, .player-class-btn, #close-dialogue").hide();

  $(".avatar-block").append(
    `<img class="character-sprite image-fluid wizard-selected" src="${generateRandomSprite(
      characterImages
    )}">`
  );
  $("#right, #left, .health-bar, #start-game").show();
};

// Healer Class
const selectHealer = () => {
  $(".healer").click(function () {
    let text = $(this).text();

    $("input").val(text);
    $(".healer-class-selected").append(`You selected <b>${text}</b>`);
  });

  playMagicSnap.play();
  $(".warrior, .rogue, .wizard, .player-class-btn, #close-dialogue").hide();

  $(".avatar-block").append(
    `<img class="character-sprite image-fluid healer-selected" src="${generateRandomSprite(
      characterImages
    )}">`
  );
  $("#right, #left, .health-bar, #start-game").show();
};

// Rogue Class
const selectRogue = () => {
  $(".rogue").click(function () {
    let text = $(this).text();
    $("input").val(text);
    $(".rogue-class-selected").append(`You selected <b>${text}</b>`);
  });

  playMagicSnap.play();
  $(".healer, .warrior, .wizard, .player-class-btn, #close-dialogue").hide();

  $(".avatar-block").append(
    `<img class="character-sprite image-fluid rogue-selected" src="${generateRandomSprite(
      characterImages
    )}">`
  );
  $("#right, #left, .health-bar, #start-game").show();
};

/* 
Original Author: Dominik Widomski
Adapted by: Crystal McNeil 09/02/20
https://codepen.io/dwidomski/pen/KBzuo?editors=0010 
*/

$(document).on(function () {
  let hitBtn = $("button.damage"),
    reset = $("button.reset"),
    hBar = $(".health-bar"),
    bar = hBar.find(".bar"),
    hit = hBar.find(".hit");

  hitBtn.on("click", function () {
    let total = hBar.data("total"),
      value = hBar.data("value");

    if (value < 0) {
      log("you dead, reset");
      return;
    }
    // max damage is essentially quarter of max life
    let damage = Math.floor(Math.random() * total);
    // damage = 100;
    let newValue = value - damage;
    // calculate the percentage of the total width
    let barWidth = (newValue / total) * 100;
    let hitWidth = (damage / value) * 100 + "%";

    // show hit bar and set the width
    hit.css("width", hitWidth);
    hBar.data("value", newValue);

    setTimeout(function () {
      hit.css({ width: "0" });
      bar.css("width", barWidth + "%");
    }, 500);
    //bar.css('width', total - value);

    log(value, damage, hitWidth);

    if (value < 0) {
      log("DEAD");
    }
  });

  reset.on("click", function (e) {
    hBar.data("value", hBar.data("total"));

    hit.css({ width: "0" });

    bar.css("width", "100%");
    log("resetting health to 1000");
  });
});

// TODO Healthbar integration
function log(_total, _damage, _hitWidth) {
  let log = $(".log");

  if (_damage !== undefined && _hitWidth !== undefined) {
    log.append(
      "<div>H:" +
        _total +
        " D:" +
        _damage +
        " W:" +
        _hitWidth +
        " = " +
        (_total - _damage) +
        "</div>"
    );
  } else {
    log.append("<div>" + _total + "</div>");
  }
}

// FIXME Need to keep character from moving off of the screen
// Character Move Right
$("#right").click(function () {
  $(".avatar-block").animate({ left: "+=80px" }, 500);
  $(".character-sprite").removeClass("reverse-direction");
  walking.play();
});

// Character Move Left
$("#left").click(function () {
  $(".avatar-block").animate({ left: "-=80px" }, 500);
  $(".character-sprite").addClass("reverse-direction");
  walking.play();

  // FIXME if avatar block at zero pixels dont go past zero
  // same for right
});

/*************************************/

/* MONSTERS */
const monsters = [
  {
    isBoss: false,
    image: "./img/monsters/monster-1.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-2.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-3.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-4.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-5.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-6.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-7.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-8.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-9.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-10.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-11.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-12.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-13.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-14.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-15.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-16.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-17.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-18.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-19.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-20.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-21.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-22.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-23.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-24.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-25.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-26.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-27.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-28.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-29.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-30.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-31.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-32.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-33.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-34.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-35.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-36.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-37.png",
  },
  {
    isBoss: true,
    image: "./img/monsters/monster-38.png",
  },
  {
    isBoss: false,
    image: "./img/monsters/monster-39.png",
  },
];

/* Monster Sounds */
monsterGrowls = [
  "./audio/monster-growl/Monster-01.wav",
  "./audio/monster-growl/Monster-02.wav",
  "./audio/monster-growl/Monster-03.wav",
  "./audio/monster-growl/Monster-04.wav",
  "./audio/monster-growl/Monster-05.wav",
  "./audio/monster-growl/Monster-06.wav",
  "./audio/monster-growl/Monster-will-die-1.wav",
  "./audio/monster-growl/Monster-will-die-2.wav",
  "./audio/monster-growl/Monster-will-die-3.wav",
  "./audio/monster-growl/Monster-will-die-4.wav",
];

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
} // console.log(monsterGrowl);

/* RANDOM MONSTER GENERATOR */
const generateRandomMonster = () => {
  let randomMonster =
    monsterImages[Math.floor(Math.random() * monsterImages.length)];
  return randomMonster;
};

/* RANDOM GROWL GENERATOR */
const generateRandomGrowl = () => {
  let randomGrowl =
    monsterGrowl[Math.floor(Math.random() * monsterGrowl.length)];
  return randomGrowl; // console.log(generateRandomGrowl(monsterGrowl))
};

/*************************************/

/** AUDIO */

// Play Magic Ding Button
const playMagicDing = new Audio("./audio/play-magic-ding.wav");

// Play Magic Ding Button
const playMagicSnap = new Audio("./audio/magic-finger-snap.wav");

// Character Walking
const walking = new Audio("./audio/walkin-on-grass.wav");

// Monster Growl
const monsterGrowlAudio = new Audio(generateRandomGrowl(monsterGrowl));
// console.log(monsterGrowlAudio);

/* GAMEPLAY */

// TODO Load stats on game start
const startGame = () => {
  // WELCOME
  $(".player-classes").replaceWith(
    "<h4>Macon, you must hurry. The monsters are coming.</h4><p>Monsters have been spotted in the countryside. If they make it to the village of Skillet, it will be destroyed.</p><p>All of the village’s warriors are either too old or off fighting in the Pork Wars. Panic sets into Skillet until Macon, a young farmer, volunteers to meet the threat head-on. Equipped with his late father’s weapon, Macon embarks into the wilderness to meet these vile creatures head-on.</p>"
  );

  // RULES
  $(".rules").append(
    "<h4>Rules:</h4><ol><li>Use left and right arrow to move back and forth on the screen.</li> <li>You must defeat 3 enemies and 1 boss to win.</li> <li>If your health falls to zero you lose.</li></ol>"
  );

  //
  $("#start-game, .play-button, .classes").hide(); // hide button

  // load stats for selected character
  // if warrior select load warrior stats
  // if healer selected load healer stats
  // if wizard selected load wizard stats
  // if rogue selected load rogue stats

  // load random stats for monster
  // create random Damage, Accuracy, Defense, and Health for monsters
};

/*  Trigger Monster */
let moveCount = 0;

// TODO Add Audio and Monster Dialogue
// trigger monster on 5 clicks right
$(".trigger-monster").click(function () {
  moveCount++;

  // trigger monster after 5 clicks right
  if (moveCount === 5) {
    $("#monster").append(
      `<img class="monster-sprite image-fluid" src="${generateRandomMonster(
        monsterImages
      )}">`
    );
    monsterGrowlAudio.play();
    $("#right, #left").hide();
    $(".fight, .retreat").show().slideUp(300).delay(800).fadeIn(400);
  }
});

/* BATTLE */

function randomDamage(min, max) {
  return Math.random() * (max - min) + min;
}

let monsterHealth = 30;
let warriorAttack = playerClasses[0].attack;
let warriorHealth = playerClasses[0].health;
let warriorDefense = playerClasses[0].defense;
let warriorAccuracy = playerClasses[0].accuracy;

$(".attack").on("click", function () {
  console.log(monsterHealth);
  let monsterDamage =
    monsterHealth -
    (monsterHealth - warriorAttack / randomDamage(1, warriorAccuracy));
  console.log(monsterDamage);

  let monsterUpdatedHealth = monsterHealth - monsterDamage;

  $(".modal-body").append(
    `You did ${Math.floor(
      monsterDamage
    )} damage. Monster current health ${Math.ceil(monsterUpdatedHealth)}`
  );
});

// popup with button options to attack or defend
// if defend add +5 to defense for next round
// if attack add damage for attack to monster
// attack damage calculated by attack accuracy
// damage

// Reset Character position to zero px on screen when monster defeated

// BUTTONS
$("#warrior").on("click", selectWarrior);
$("#wizard").on("click", selectWizard);
$("#healer").on("click", selectHealer);
$("#rogue").on("click", selectRogue);
$("#start-game").on("click", startGame);
