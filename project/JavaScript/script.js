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
                    }
                    
                    
                ],
                "up": `<img src="./img/Omni-Man/attackUp_omniMan.gif" height="280px">`,
                "side": `<img src="./img/Omni-Man/attackSide_omniMan.gif" height="280px">`,
                "down": `<img src="./img/Omni-Man/attackDown_omniMan.gif" height="280px">`,
                "standing": `<img src="./img/Omni-Man/standing_omniMan.gif" height="280px">`,
                "shockwave": `<img src="./img/Omni-Man/shockwave.gif" height="280px">`
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
            "standWithWeapon": `<img src="./img/Doomslayer/weapon2.gif" height="280px">`,
            "takingOutWeapon": `<img src="./img/Doomslayer/takingOutWeapon.gif" height="280px">`,
            "weapon2": `<img src="./img/Doomslayer/weapon2.gif" height="280px">`,
            "ball": `<img src="./img/Doomslayer/ball.gif" height="50px">`,
            "explosion": `<img src="./img/Doomslayer/explosion.gif" height="280px">`,
            "beam": `<img src="./img/Doomslayer/beam.gif" width="80px">`,
            "stomp": `<img src="./img/Doomslayer/attackdown.gif" height="280px">`,
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
    <div class="button pixel-borders pixel-borders--2" onclick="printAbout()">About</div>
  
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
</div>`;
let about = `
<div class="infoBox pixel-borders pixel-borders--2">
        <p>
           Controls for the Characters:
        </p>

        <ul>
            <p>For all Characters</p>
            <li>A (arrow left): Move left</li>
            <li>D (arrow right): Move right</li>
        </ul>

        <ul>
            <p>Omni-Man (Invincible)</p>
            <li>G: Punch</p>
            <br>
            <li>F + W: Heavy Punch</li>
            <br>
            <li>F + D: Thunderclap</li>
            <br>
            <li>W + S: Fly up and down</li>
        </ul>

        <br>

        <ul>
            <p>Doomslayer (DOOM)</p>
            <li>2 : Punch</p>
            <br>
            <li>3 + arrow up: Cannon</li>
            <br>
             <li>1: Shoot Cannon</li>
            <br>
            <li>3 + arrow down: Thunde</li>
            <br>
            <li>1: Jump</li>
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
let xP2 = 1200;
let yP2 = 500;
const keys = {};
let lastKey = "s";
let lastKeyP2 = "arrowdown";
let comboCounterP1 = 1;
let comboCounterP2 = 1;
let gKeyPressed = false;
let oneKeyPressed = false;
let twoKeyPressed = false;
let attackCooldown = false;
let swiper;
let isJumpingP2 = false;
let projectileActive = false;
let battleStartTime;
let battleHistory = JSON.parse(localStorage.getItem('battleHistory')) || [];

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
battleStartTime = new Date();

    document.addEventListener("keydown", (e) => {
        keys[e.key.toLowerCase()] = true;
    });

    document.addEventListener("keyup", (e) => {
        keys[e.key.toLowerCase()] = false;
    });

    gameLoop();
}


let heavyGunEquipped = false;
let fKeyPressed = false;
let threeKeyPressed = false;
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
        if (hit(p1, p2)) {
            dealDamage(2, 5000); 
            showHit(p2);
        }
        comboCounterP1++;
    }

    if (keys["w"] && keys["f"] && !fKeyPressed) {
        fKeyPressed = true;
        playAnimation(
            characters[0].attacks.standing,
            characters[0].attacks.up,
            p1,
            900
        );
        if (hit(p1, p2)) {
            dealDamage(2, 100000); // Set to same damage as the ball
            showHit(p2);
        }
    }

    if (!keys["g"]) {
        gKeyPressed = false;
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

  
    if (!keys["f"]) {
        fKeyPressed = false;
    }

    if (!keys["3"]) {
        threeKeyPressed = false;
    }

    p1.style.left = xP1 + "px";
    p1.style.top = yP1 + "px";

    if (keys["arrowleft"]) {
        heavyGunEquipped = false;
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
        heavyGunEquipped = false;
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

    if (keys["2"] && !twoKeyPressed) {
        twoKeyPressed = true;
        
        playAnimation(
            characters[characterPlayer2].attacks.standing,
            characters[characterPlayer2].attacks.combo[0].name,
            p2,
            500   
        )
        if (hit(p1, p2)) {
            dealDamage(1, 5000);
            showHit(p1);
        }
    }

    if (!keys["2"]) {
        twoKeyPressed = false;  
    }

    if (keys["1"] && !isJumpingP2 && !heavyGunEquipped) {
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

       if (keys["arrowup"] && keys["3"] && !threeKeyPressed) {
        heavyGunEquipped = true;
        threeKeyPressed = true;
        playAnimation(
            characters[1].attacks.standWithWeapon,
            characters[1].attacks.standWithWeapon,
            p2,
            300
        );
    }

    if (keys["3"] && keys["arrowdown"] && !threeKeyPressed) {
        threeKeyPressed = true;
            playAnimation(
                characters[1].attacks.standing,
                characters[1].attacks.stomp,
                p2,
                1000
            );
        if (hit(p2, p1)) {
            dealDamage(1, 10000);
            showHit(p1);
        }
    }

    if (heavyGunEquipped && keys["1"] && !oneKeyPressed && !projectileActive) {
        oneKeyPressed = true;
        projectileActive = true;
        shootProjectile(2, characters[1].attacks.ball, xP2 - 50, yP2 + 50);
    }

    if ((keys["a"] || keys["d"]) && keys["f"] && !oneKeyPressed && !projectileActive) {
            playAnimation(
                characters[0].attacks.standing,
                characters[0].attacks.side,
                p1,
                1000
            );
        fKeyPressed = true;
        projectileActive = true;
        shootProjectile(1, characters[0].attacks.shockwave, xP1 - 50, yP1 + 50);
    }

    if (!keys["1"]) {
        oneKeyPressed = false;
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

function hit(element1, element2, threshold = 200) {
    const dx = Math.abs(element1.offsetLeft - element2.offsetLeft);
    const dy = Math.abs(element1.offsetTop - element2.offsetTop);
    return dx <= threshold && dy <= threshold;
}

function showHit(element) {
    element.style.animation = "blinkRed 0.2s alternate 1";
    setTimeout(() => {
        element.style.animation = "none";
    }, 400);
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

function isFacingRight(playerElement) {
    return playerElement.style.transform !== "scaleX(-1)";
}

let projectileIndex = 0;
let loops = 0;
function shootProjectile(player, gif, x, y) {
    console.log("shootProjectile called");
    let newProjectile = document.createElement("div");
    newProjectile.className = "pjt";
    newProjectile.id = `projectile${projectileIndex}`;
    newProjectile.innerHTML = gif;
    newProjectile.style.position = "absolute";
    newProjectile.style.left = x + "px";
    newProjectile.style.top = y + "px";
    game.appendChild(newProjectile);

    let direction = 1;
    let target = p2;
    let damageTarget = 2;
    if (player === 2) {
        direction = isFacingRight(p2) ? 1 : -1;
        target = p1;
        damageTarget = 1;
    } else {
        direction = isFacingRight(p1) ? 1 : -1;
    }

    let posX = x;
    const speed = 20;
    const interval = setInterval(() => {
        posX += speed * direction;
        newProjectile.style.left = posX + "px";
        if (!inBoundsLeft(posX) || !inBoundsRight(posX) || hit(newProjectile, target)) {
            clearInterval(interval);
            if (hit(newProjectile, target)) {
                dealDamage(damageTarget, 100000);
                showHit(target);
            }
            newProjectile.remove();
            projectileActive = false;
        }
    }, 20);

    projectileIndex++;
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

    const statsHtml = `
        <span style="font-size: 0.6em;">
            <strong class="redText">Name:</strong> ${characters[character].name}<br><br>
            <strong class="redText">HP:</strong> ${characters[character].health}<br><br>
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

    const slider = document.querySelector('.swiper');
    if (slider) {
        slider.remove();
    }
}

function showGameOver(winner) {
    const battleEndTime = new Date();
    const battleDuration = Math.floor((battleEndTime - battleStartTime) / 1000);

     const battleResult = {
        timestamp: battleEndTime.toISOString(),
        player1: characters[characterPlayer1].name,
        player2: characters[characterPlayer2].name,
        winner: winner,
        player1Health: player1.currentHP,
        player2Health: player2.currentHP,
        duration: battleDuration
    };
    
    battleHistory.push(battleResult);
    localStorage.setItem('battleHistory', JSON.stringify(battleHistory));

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
            .history-btn {
                margin-top: 15px;
                font-size: 1rem;
                padding: 8px 20px;
                font-family: 'PressStart2P';
                background:  #FFD700;
                color: #110E69;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: background 0.2s, color 0.2s;
            }
            .history-btn:hover {
                background: #110E69;
                color: #FFD700;
            }
            .battle-history {
                margin-top: 20px;
                max-height: 200px;
                overflow-y: auto;
                background: rgba(0,0,0,0.7);
                padding: 10px;
                border-radius: 5px;
                color: white;
                width: 80%;
                max-width: 600px;
            }
            .battle-item {
                margin: 5px 0;
                padding: 5px;
                border-bottom: 1px solid #444;
            }
            .duration {
                color: #FFA500;
                font-weight: bold;
            }
        </style>
        <div style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 100vh; 
            background: url('img/background_charSel.gif') center center / cover no-repeat;">

            <h2 style="color: white; font-size: 2rem; text-shadow: 1px 1px 6px black; font-family: 'PressStart2P';">${winner} wins!</h2>
            <p style="color: #FFD700; font-family: 'PressStart2P';">Battle lasted: <span class="duration">${formatDuration(battleDuration)}</span></p>
            <button class="gameover-restart-btn" onclick="location.reload()">Restart</button>
            <button class="history-btn" onclick="showBattleHistory()">Show Battle History</button>
            <div id="battleHistoryContainer" class="battle-history" style="display: none;"></div>
        </div>
    `;
}


function showBattleHistory() {
    const container = document.getElementById('battleHistoryContainer');
    if (container.style.display === 'none') {
        container.style.display = 'block';
        container.innerHTML = '<h3>Battle History</h3>';
        
        if (battleHistory.length === 0) {
            container.innerHTML += '<p>No battles recorded yet</p>';
            return;
        }
        
        battleHistory.forEach((battle, index) => {
            const date = new Date(battle.timestamp).toLocaleString();
            const item = document.createElement('div');
            item.className = 'battle-item';
            item.innerHTML = `
                <strong>Battle #${index + 1}</strong> (${date})<br><br>
                ${battle.player1} vs ${battle.player2}<br><br>
                Winner: <strong style="color: #FFD700">${battle.winner}</strong><br><br>
                Duration: <span class="duration">${formatDuration(battle.duration)}</span><br><br>
                ${battle.player1} HP: ${battle.player1Health.toLocaleString()}<br><br>
                ${battle.player2} HP: ${battle.player2Health.toLocaleString()}
            `;
            container.appendChild(item);
        });
    } else {
        container.style.display = 'none';
    }
}

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
}

window.chooseCharacter = chooseCharacter;
window.insertChar = insertChar;

setGameElements();
disableScrolling();