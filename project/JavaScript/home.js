let outputHome = document.getElementById("outputHome");
let backButtonHome = `
    <div id="backButton" onclick="printHome()"></div>
`;
let home = `
    <div class="button" onclick="printCharacterSelection()">Start</div>
    <div class="button" onclick="printSettings()">Settings</div>
    <div class="button" onclick="printAbout()">About</div>
    <div class="button" onclick="printCredits()">Credits</div>
`
let settings = `
<div id="settingsHeadlines">
   <div class="textBox">Language</div>
   <div class="textBox">Fullscreen</div>
   <div class="textBox">Game Speed</div>
</div>

<div id="settings">
   <div class="settOp">
       <div class="arrowLeft"></div>
       <p>English</p>
       <div class="arrowRight"></div>
   </div>
</div>

<div id="settings">
   <div class="settOp">
       <div class="arrowLeft"></div>
       <p>Off</p>
       <div class="arrowRight"></div>
   </div>
</div>

<div id="settings">
   <div class="settOp">
       <div class="arrowLeft"></div>
       <p>2x</p>
       <div class="arrowRight"></div>
   </div>
</div>
`;
let about = `
<div class="infoBox">
        <p>
            Fiction Battles is a game inspired by games
            like Super Smash Bros or Mortal Combat. The
            goal is to fight 1v1 against another person
            until one runs out of Health Points (HP). The
            characters planned so far are listed below:
        </p>

        <ul>
            <li>Omni-Man (Invincible)</li>
            <li>Son Goku (Dragon Ball Z)</li>
            <li>Doomslayer (Doom)</li>
            <li>Darth Vader (Star Wars)</li>
            <li>Darkseid (DC)</li>
            <li>Kratos (God Of War)</li>
            <li>Matzgo (2BHITM)</li>
            <li>Clemens (2BHITM)</li>
        </ul>
</div>
`;

disableScrolling();

function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = 'auto';
}

function printHome() {
    outputHome.innerHTML = home
}

function printSettings() {
    outputHome.innerHTML = settings;
    outputHome.innerHTML += backButtonHome;
}

function printAbout() {
    outputHome.innerHTML = about;
    outputHome.innerHTML += backButtonHome;
}