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
let characterPlayer2 = 2;

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
            <img class="omniMan" src="img/omniMan/standing_omniMan.gif" alt="player1">`,

            `<img onclick="printInfoAbout(1)" class="infoButton" src="img/info.png" alt="info">
            <p>Doomslayer</p>
            <img class="doomslayer" src="img/doomslayer/standing_doomslayer.gif" alt="player1">`,

            `<img onclick="printInfoAbout(2)" class="infoButton" src="img/info.png" alt="info">
            <p>Son Goku</p>
            <img class="goku" src="img/goku/standing_goku.png" alt="player1">`,

            `<img onclick="printInfoAbout(3)" class="infoButton" src="img/info.png" alt="info">
            <p>Darth Vader</p>
            <img class="vader" src="img/vader/standing_vader.png" alt="player1">`,

            `<img onclick="printInfoAbout(4)" class="infoButton" src="img/info.png" alt="info">
            <p>Darkseid</p>
            <img class="darkseid" src="img/darkseid/standing_darkseid.png" alt="player1">`
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