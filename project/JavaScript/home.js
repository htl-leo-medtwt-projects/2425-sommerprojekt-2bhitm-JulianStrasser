let outputHome = document.getElementById("outputHome");
let backButtonHome = `
    <div id="backButton" class="arrowLeft"></div>
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