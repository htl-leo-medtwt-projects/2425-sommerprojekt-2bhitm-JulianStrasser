let characters = [
    {
        "name": "Omni-Man",
        "health": 750000,
        "AP": 400000,
        "quote": "You don't seem to understand. Earth isn't yours to conquer...",
        "attacks": {
                "combo": [
                    {
                        "name": `<img src="./img/Omni-Man/primaryCombo_omniMan_1.gif" height="280px">`,
                        "duration": 800
                    },
                    {
                        "name": `<img src="./img/Omni-Man/primaryCombo_omniMan_2.gif" height="280px">`,
                        "duration": 800
                    },
                    {
                        "name": `<img src="./img/Omni-Man/primaryCombo_omniMan_3.gif" height="280px">`,
                        "duration": 800
                    },
                    {
                        "name": `<img src="./img/Omni-Man/primaryCombo_omniMan_4.gif" height="280px">`,
                        "duration": 800
                    },
                    {
                        "name": `<img src="./img/Omni-Man/primaryCombo_omniMan_5.gif" height="280px">`,
                        "duration": 800
                    }
        
                    
                    
                ],
                "up": `<img src="./img/Omni-Man/attackUp_omniMan.gif" height="280px">`,
                "side": `<img src="./img/Omni-Man/attackSide_omniMan.gif" height="280px">`,
                "down": `<img src="./img/Omni-Man/attackDown_omniMan.gif" height="280px">`,
                "standing": `<img src="./img/Omni-Man/standing_omniMan.gif" height="280px">`
            }
    },
    {
        "name": "Doomslayer",
        "health": 850000,
        "AP": 850000,
        "quote": "No.",
        "attacks": {
            "walking": `<img src="./img/Doomslayer/walking_Doomslayer.gif" height="280px">`,
            "standing": `<img src="./img/Doomslayer/standing_Doomslayer.gif" height="280px">`,
            "combo": [
                {
                    "name": `<img src="./img/Doomslayer/primaryCombo_Doomslayer_1.gif" height="280px">`,
                    "duration": 800
                }

            ]
        }
    },
    {
        "name": "Son Goku",
        "health": 950000,
        "AP": 950000,
        "quote": "I am the hope of the universe.",
        "attacks": []
    },
    {
        "name": "Darth Vader",
        "health": 300000,
        "AP": 120000,
        "quote": "Anakin Is Gone. I Am What Remains.",
        "attacks": []
    },
    {
        "name": "Darkseid",
        "health": 1000000,
        "AP": 1000000,
        "quote": "I will send you to a hell without exit or end.",
        "attacks": []
    },
    {
        "name": "Kratos",
        "health": 900000,
        "quote": "Death can have me when it earns me."
    },
    {
        "name": "Matzgo",
        "health": 1000000,
        "quote": "Du hast Ligma."
    },
    {
        "name": "Clemens",
        "health": 1000000,
        "qoute": "Ich esse keine Kinder, ich sperre sie nur ein."
    }
    ];

let outputHome = document.getElementById("outputHome");
let backButtonHome = `
  <img src="img/arrowLeft.png" alt="arrowLeft.png" class="backButton" style="width: 150px; height: 150px; position: absolute; bottom: 5px; left: 5px;" onclick="printHome()">
    
`;
let home = `
    <div class="button pixel-borders pixel-borders--2" onclick="printCharacterSelection()">Start</div>
    <div class="button pixel-borders pixel-borders--2" onclick="printSettings()">Settings</div>
    <div class="button pixel-borders pixel-borders--2" onclick="printAbout()">About</div>
    <div class="button pixel-borders pixel-borders--2" onclick="printCredits()">Credits</div>
    `;
let settings = `
<div id="settingsHeadlines">
   <div class="textBox pixel-borders pixel-borders--2">Language</div>
   <div class="textBox pixel-borders pixel-borders--2">Fullscreen</div>
   <div class="textBox pixel-borders pixel-borders--2">Game Speed</div>
</div>

<div class="settings">
   <div class="settOp">
       <div class="arrowLeft"></div>
       <p>English</p>
       <div class="arrowRight"></div>
   </div>
</div>

<div class="settings">
   <div class="settOp">
       <div class="arrowLeft"></div>
       <p>Off</p>
       <div class="arrowRight"></div>
   </div>
</div>

<div class="settings">
   <div class="settOp">
       <div class="arrowLeft"></div>
       <p>2x</p>
       <div class="arrowRight"></div>
   </div>
</div>
`;
let about = `
<div class="infoBox pixel-borders pixel-borders--2">
        <p>
            Fiction Battles is a game inspired by games
            like Super Smash Bros or Mortal Combat. The
            goal is to fight 1v1 against another person
            until one runs out of Health Points (HP). The
            characters planned so far are listed below:
        </p>

        <ul>
            <li>Omni-Man (Invincible)</li>
            <br>
            <li>Son Goku (Dragon Ball Z)</li>
            <br>
            <li>Doomslayer (Doom)</li>
            <br>
            <li>Darth Vader (Star Wars)</li>
            <br>
            <li>Darkseid (DC)</li>
            <br>
            <li>Kratos (God Of War)</li>
            <br>
            <li>Matzgo (2BHITM)</li>
            <br>
            <li>Clemens (2BHITM)</li>
        </ul>
</div>
`;
let characterPlayer1 = 0;
let characterPlayer2 = 1;
let game = document.getElementById("gameBackground");
let player1 = {
    "currentHP": 0,
    "maxHP": 0,
    "currentAP": 0,
    "maxAP": 0
};
let player2 = {
    "currentHP": 0,
    "maxHP": 0,
    "currentAP": 0,
    "maxAP": 0
};
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
const speed = 5;
let xP1 = 100;
let yP1 = 500;
let xP2 = 600;
let yP2 = 500;
const keys = {};
let lastKey = "s";
let lastKeyP2 = "arrowdown";
let comboCounterP1 = 1;
let comboCounterP2 = 1;
let gKeyPressed = false; // Verfolgt, ob die Taste "g" gedrückt ist
let attackCooldown = false; // Verhindert, dass eine neue Attacke während der Verzögerung gestartet wird


disableScrolling();

function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = 'auto';
}

function printHome() {
    outputHome.innerHTML = home;
}

function printSettings() {
    outputHome.innerHTML = settings + backButtonHome;
    // outputHome.innerHTML += backButtonHome;
}

function printAbout() {
    outputHome.innerHTML = about + backButtonHome;
    // outputHome.innerHTML += backButtonHome;
}

function insertSel(character, table) {
    let selBoxContent = [
        `   <img onclick="printInfoAbout(0)" class="infoButton" src="img/info.png" alt="info">
            <p>Omni-Man</p>
            <img class="omniMan" src="img/Omni-Man/still_omniMan.gif" alt="player1">`,

        `<img onclick="printInfoAbout(1)" class="infoButton" src="img/info.png" alt="info">
            <p>Doomslayer</p>
            <img class="doomslayer" src="img/Doomslayer/standing_Doomslayer.gif" alt="player1">`,

        `<img onclick="printInfoAbout(2)" class="infoButton" src="img/info.png" alt="info">
            <p>Son Goku</p>
            <img class="goku" src="img/Goku/standing_Goku.png" alt="player1">`,

        `<img onclick="printInfoAbout(3)" class="infoButton" src="img/info.png" alt="info">
            <p>Darth Vader</p>
            <img class="vader" src="img/Vader/standing_Vader.png" alt="player1">`,

        `<img onclick="printInfoAbout(4)" class="infoButton" src="img/info.png" alt="info">
            <p>Darkseid</p>
            <img class="darkseid" src="img/Darkseid/standing_Darkseid.png" alt="player1">`
    ]


    if (table === 1) {
        characterPlayer1 = character;
        for (let i = 0; i <= 4; i++) {
            document.getElementById("charSel1_" + i).style.backgroundColor = "black";
        }
        document.getElementById("charSel1_" + character).style.backgroundColor = "var(--player1Color)";

        document.getElementById("character1").innerHTML = selBoxContent[character];
    }
    if (table === 2) {
        characterPlayer2 = character;
        for (let i = 0; i <= 4; i++) {
            document.getElementById("charSel2_" + i).style.backgroundColor = "black";
        }
        document.getElementById("charSel2_" + character).style.backgroundColor = "var(--player2Color)";

        document.getElementById("character2").innerHTML = selBoxContent[character];
    }
}

function setGameElements() {
    game.style.backgroundImage = "url(./img/maps/map1.jpg)"


    document.addEventListener("keydown", (e) => {
        keys[e.key.toLowerCase()] = true;
    });

    document.addEventListener("keyup", (e) => {
        keys[e.key.toLowerCase()] = false;
    });

    gameLoop();
}

function gameLoop() {
    if (keys["g"] && !gKeyPressed) {
        gKeyPressed = true;

        if (comboCounterP1 === characters[characterPlayer1].attacks.combo.length) {
            comboCounterP1 = 0;
        }

        playAnimation(
            characters[characterPlayer1].attacks.standing,
            characters[characterPlayer1].attacks.combo[comboCounterP1].name,
            p1,
            characters[characterPlayer1].attacks.combo[comboCounterP1].duration
        );

        comboCounterP1++;
    }

    if (!keys["g"]) {
        gKeyPressed = false; // Markiere die Taste als losgelassen
    }

    if (keys["w"] && keys["g"]) {
        playAnimation(
            characters[characterPlayer1].attacks.standing,
            characters[characterPlayer1].attacks.up,
            p1,
            900
        );
    }

    if (keys["a"]) {
        if (lastKey !== "a") {
            p1.style.transform = "scaleX(-1)";
        }
        lastKey = "a";
        if (inBoundsLeft(xP1)) xP1 -= speed;
    }

    if (keys["d"]) {
        if (lastKey !== "d") {
            p1.style.transform = "scaleX(1)";
        }
        lastKey = "d";
        if (inBoundsRight(xP1)) xP1 += speed;
    }

    if (characterPlayer1 === 0) {
        if (keys["w"]) {
            if (inBoundsTop(yP1)) yP1 -= speed;
        }
        if (keys["s"]) {
            if (inBoundsBottom(yP1)) yP1 += speed;
        }
    }

    p1.style.left = xP1 + "px";
    p1.style.top = yP1 + "px";

    if (keys["arrowleft"]) {
        if (lastKey !== "arrowleft") {
            p2.style.transform = "scaleX(-1)";
        }
        lastKey = "arrowleft";
        playAnimation(
                        characters[characterPlayer2].attacks.standing,
                        characters[characterPlayer2].attacks.walking,
                        p2,
                        500
        )
        if (inBoundsLeft(xP2)) xP2 -= speed;
    }

    if (keys["arrowright"]) {
        if (lastKey !== "arrowright") {
            p2.style.transform = "scaleX(1)";
        }
        lastKey = "d";
                playAnimation(
                        characters[characterPlayer2].attacks.standing,
                        characters[characterPlayer2].attacks.walking,
                        p2,
                        500
        )
        if (inBoundsRight(xP2)) xP2 += speed;
    }

    if (keys["2"]) {
        playAnimation(
            characters[characterPlayer2].attacks.standing,
            characters[characterPlayer2].attacks.combo[0].name,
            p2,
            500   
        )
    }

    if (characterPlayer2 === 0) {
        if (keys["w"]) {
            if (inBoundsTop(yP2)) yP2 -= speed;
        }
        if (keys["s"]) {
            if (inBoundsBottom(yP2)) yP2 += speed;
        }
    }

    p2.style.left = xP2 + "px";
    p2.style.top = yP2 + "px";

    requestAnimationFrame(gameLoop);
}

function inBoundsLeft(x) {
    if (x >= -5) {
        return true;
    }
    return false;
}

function inBoundsRight(x) {
    if (x <= 1300) {
        return true;
    }
    return false;
}

function inBoundsBottom(y) {
    if (y <= 500) {
        return true;
    }
    return false;
}

function inBoundsTop(y) {
    if (y >= -25) {
        return true;
    }
    return false;
}

function playAnimation( oldGif, newGif, element, duration) {
    element.innerHTML = newGif;
    setTimeout(() => {
        element.innerHTML = oldGif;
    }, duration);
}

setGameElements();