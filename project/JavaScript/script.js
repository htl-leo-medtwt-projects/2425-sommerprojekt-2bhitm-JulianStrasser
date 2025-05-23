let characters = [
    {
        "name": "Omni-Man",
        "health": 750000,
        "AP": 400000,
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
        "attacks": {
            "walking": `<img src="./img/Doomslayer/walking_Doomslayer.gif" height="280px">`,
            "standing": `<img src="./img/Doomslayer/standing_Doomslayer.gif" height="280px">`,
            "up": `<img src="./img/Doomslayer/takingOutWeapon.gif" height="280px">`,
            "combo": [
                {
                    "name": `<img src="./img/Doomslayer/primaryCombo_Doomslayer_1.gif" height="280px">`,
                    "duration": 800
                }

            ],
            "jump": `<img src="./img/Doomslayer/jump.gif" height="280px">`,
            "standWithWeapon": `<img src="./img/Doomslayer/standingWithWeapon.png" height="280px">`,
            "takingOutWeapon": `<img src="./img/Doomslayer/takingOutWeapon.gif" height="280px">`,
        }
    },
    {
        "name": "Son Goku",
        "health": 950000,
        "AP": 950000,
        "attacks": []
    },
    {
        "name": "Darth Vader",
        "health": 300000,
        "AP": 120000,
        "attacks": []
    },
    {
        "name": "Darkseid",
        "health": 1000000,
        "AP": 1000000,
        "attacks": []
    },
    {
        "name": "Kratos",
        "health": 900000,
 
    },
    {
        "name": "Matzgo",
        "health": 1000000,
        
    },
    {
        "name": "Clemens",
        "health": 1000000,
        
    }
    ];

let gameSettoff = `
<body id="gameBackground">

    <div style="display: flex">
        <div id="hpBar_p1" class="hpBar">
            <p style="position: absolute; color: white; font-size: 13px">1000000/1000000</p>
            <div id="currentHP_p1"></div>
        </div>

        <div id="hpBar_p2" class="hpBar">
            <p style="position: absolute; transform: scaleX(-1); color: white; font-size: 13px">1000000/1000000</p>
            <div id="currentHP_p2"></div>
        </div>
    </div>



    <div id="p1" class="omnimanGame"><img src="img/Omni-Man/standing_omniMan.gif" height="280px"></div>

    <div id="p2" class="doomslayerGame" style="transform: scaleX(-1);"><img src="img/Doomslayer/standing_Doomslayer.gif" height="280"></div>

</body>
`;
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
let gKeyPressed = false;
let attackCooldown = false;
let swiper;
let isJumpingP2 = false;

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
}

function printAbout() {
    outputHome.innerHTML = about + backButtonHome;
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

player1.maxHP = characters[characterPlayer1].health;
player1.currentHP = player1.maxHP;
player2.maxHP = characters[characterPlayer1].health;
player2.currentHP = player2.maxHP;

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

        if (hit(p1, p2)) {
            playAnimation(
                characters[characterPlayer1].attacks.standing,
                characters[characterPlayer1].attacks.combo[comboCounterP1].name,
                p1,
                characters[characterPlayer1].attacks.combo[comboCounterP1].duration
            );
            // Make Omni-Man's combo even stronger
            if (characterPlayer1 === 0) {
                dealDamage(2, 100000); // Increased from 20000 to 100000
            } else {
                dealDamage(2, 1000);
            }
            showHit(p2);
        }

        comboCounterP1++;
    }

    if (!keys["g"]) {
        gKeyPressed = false;
    }

    if (keys["w"] && keys["g"]) {
        if (characterPlayer1 === 0) {
            hit(p2, p2, 10000);
            playAnimation(
            characters[0].attacks.standing,
            characters[0].attacks.up,
            p1,
            900
        );
        pushPlayer(2);
        }
        
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
        hit(p1, p2, 1000);
        playAnimation(
            characters[characterPlayer2].attacks.standing,
            characters[characterPlayer2].attacks.combo[0].name,
            p2,
            500   
        )
        
    }

    // Doomslayer jump (Player 2, ArrowUp or Numpad 1)
    if (
        characterPlayer2 === 1 &&
        (keys["1"]) &&
        !isJumpingP2
    ) {
        isJumpingP2 = true;
        playAnimation(
            characters[1].attacks.standing,
            characters[1].attacks.jump,
            p2,
            500
        );
        let jumpHeight = 120;
        let jumpSpeed = 8;
        let originalY = yP2;
        let upInterval = setInterval(() => {
            if (yP2 > originalY - jumpHeight) {
                yP2 -= jumpSpeed;
                p2.style.top = yP2 + "px";
            } else {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (yP2 < originalY) {
                        yP2 += jumpSpeed;
                        p2.style.top = yP2 + "px";
                    } else {
                        yP2 = originalY;
                        p2.style.top = yP2 + "px";
                        clearInterval(downInterval);
                        isJumpingP2 = false;
                    }
                }, 16);
            }
        }, 16);
    }

    // Doomslayer special: ArrowUp + 2
    if (
        characterPlayer2 === 1 &&
        keys["arrowup"] &&
        keys["2"]
    ) {
        playAnimation(
            characters[1].attacks.standWithWeapon,
            characters[1].attacks.takingOutWeapon,
            p2,
            700
        );
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

function playAnimation(oldGif, newGif, element, duration) {
    element.innerHTML = newGif;
    setTimeout(() => {
        element.innerHTML = oldGif;
    }, duration);
}

function hit(element1, element2, damage) {
    if (Math.max(element1.offsetLeft, element2.offsetLeft) - Math.min(element1.offsetLeft, element2.offsetLeft) <= 200) {
        return true
    }
    return false;
}

function showHit(element) {
    console.log("Animation");
    element.style.animation = "blinkRed 0.1s alternate 3"
}

function dealDamage(playerRecieving, damage) {
    if (playerRecieving === 1) {
        player1.currentHP -= damage;
        if (player1.currentHP < 0) player1.currentHP = 0;
        document.getElementById("currentHP_p1").style.width = (player1.currentHP / player1.maxHP) * 100 + "%";
        document.getElementById("hp1").innerHTML = player1.currentHP + "/" + player1.maxHP;
        if (player1.currentHP <= 0) {
            showGameOver(characters[characterPlayer2].name);
        }
    }
    if (playerRecieving === 2) {
        player2.currentHP -= damage;
        if (player2.currentHP < 0) player2.currentHP = 0;
        document.getElementById("currentHP_p2").style.width = (player2.currentHP / player2.maxHP) * 100 + "%";
        document.getElementById("hp2").innerHTML = player2.currentHP + "/" + player2.maxHP;
        if (player2.currentHP <= 0) {
            showGameOver(characters[characterPlayer1].name);
        }
    }
}

function printGame() {
    document.body.innerHTML = gameSettoff;
}


function chooseCharacter(player) {
    if (player === 1) {
        let charSel1 = `
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Darkseid/darkseid_charSel.png">
                    <p>Darkseid</p>
                    <p class="red-text" onclick="insertChar(1, 4)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Doomslayer/doomslayer_charSel.png">
                    <p>Doomslayer</p>
                    <p class="red-text" onclick="insertChar(1, 1)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Goku/goku_charSel.png">
                    <p>Son Goku</p>
                    <p class="red-text" onclick="insertChar(1, 2)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Omni-Man/omniMan_charSel.png">
                    <p>Omni-Man</p>
                    <p class="red-text" onclick="insertChar(1, 0)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Vader/vader_charSel.png">
                    <p>Darth Vader</p>
                    <p class="red-text" onclick="insertChar(1, 3)">ok</p>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    `;

    document.body.innerHTML += charSel1;
    }

    if (player === 2) {
        let charSel2 = `
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Darkseid/darkseid_charSel.png">
                    <p>Darkseid</p>
                    <p class="red-text" onclick="insertChar(2, 4)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Doomslayer/doomslayer_charSel.png">
                    <p>Doomslayer</p>
                    <p class="red-text" onclick="insertChar(2, 1)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Goku/goku_charSel.png">
                    <p>Son Goku</p>
                    <p class="red-text" onclick="insertChar(2, 2)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Omni-Man/omniMan_charSel.png">
                    <p>Omni-Man</p>
                    <p class="red-text" onclick="insertChar(2, 0)">ok</p>
                </div>
                <div class="swiper-slide">
                    <img class="charSelImg2" src="./img/Vader/vader_charSel.png">
                    <p>Darth Vader</p>
                    <p class="red-text" onclick="insertChar(2, 3)">ok</p>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    `;

    document.body.innerHTML += charSel2;
    }

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function insertChar(player, character) {
    let characterImages = [
        `<img class="characterImg" src="./img/Omni-Man/omniManCharSel.webp">`,
        `<img class="characterImg" src="./img/Doomslayer/doomslayerCharSel.png">`,
        `<img class="characterImg" src="./img/Goku/gokuCharSel.png">`,
        `<img class="characterImg" src="./img/Vader/vaderCharSel.png">`,
        `<img class="characterImg" src="./img/Darkseid/darkseidCharSel.webp">`,
    ];

    // Prepare stats HTML
    const statsHtml = `
        <span style="font-size: 0.6em;">
            <strong>Name:</strong> ${characters[character].name}<br>
            <strong>HP:</strong> ${characters[character].health}<br>
            <strong>AP:</strong> ${characters[character].AP ?? "-"}
        </span>
    `;

    if (player === 1) {
        characterPlayer1 = character;
        document.getElementById("nameCharacter1").innerHTML = `<p>${characters[character].name}</p>`;
        document.getElementById("characterImg1_Selection").innerHTML = characterImages[character];
        document.getElementById("stats_char1").innerHTML = statsHtml;
    } else if (player === 2) {
        characterPlayer2 = character;
        document.getElementById("nameCharacter2").innerHTML = `<p>${characters[character].name}</p>`;
        document.getElementById("characterImg2_Selection").innerHTML = characterImages[character];
        document.getElementById("stats_char2").innerHTML = statsHtml;
    }

    // Remove the slider after a character is chosen
    const slider = document.querySelector('.swiper');
    if (slider) {
        slider.remove();
    }
}

function showGameOver(winner) {
    document.body.innerHTML = `
        <style>
            .gameover-restart-btn {
                margin-top: 30px;
                font-size: 1.5rem;
                padding: 10px 30px;
                font-family: 'PressStart2P';
                background: #FFD700;
                color: #110E69;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: background 0.2s, color 0.2s;
            }
            .gameover-restart-btn:hover {
                background: #110E69;
                color: #FFD700;
            }
        </style>
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 100vh; 
            background: url('img/background_charSel.gif') center center / cover no-repeat;
        ">
            <h1 style="color: #FFD700; font-size: 4rem; font-family: 'PressStart2P';">Game Over</h1>
            <h2 style="color: white; font-size: 2rem; text-shadow: 1px 1px 6px black; font-family: 'PressStart2P';">${winner} wins!</h2>
            <button class="gameover-restart-btn" onclick="location.reload()">Restart</button>
        </div>
    `;
}

window.chooseCharacter = chooseCharacter;
window.insertChar = insertChar;

setGameElements();
disableScrolling();