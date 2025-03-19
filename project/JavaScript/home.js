let outputHome = document.getElementById("outputHome");

disableScrolling();

function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = 'auto';
}

function printSettings() {
 let settings = `
    <div id="settings">
        <div class="settOp">
            <div class="textBox">Language</div>

            <div class="settingsSelection">
                <img class="arrowLeft" src="img/arrowLeft.png" class="arrow">
                <p>English</p>
                <img class="arrowRight" src="img/arrowRight.png" class="arrow">
            </div>
            
        </div>

        <div class="settOp">
            <div class="textBox">Fullscreen</div>

            <div class="settingsSelection">
                <img class="arrowLeft" src="img/arrowLeft.png" class="arrow">
                <p>Off</p>
                <img class="arrowRight" src="img/arrowRight.png" class="arrow">
            </div>
            
        </div>

        <div class="settOp">
            <div class="textBox">Language</div>

            <div class="settingsSelection">
                <img class="arrowLeft" src="img/arrowLeft.png" class="arrow">
                <p>English</p>
                <img class="arrowRight" src="img/arrowRight.png" class="arrow">
            </div>
            
        </div>
    
    
    </div>
 `;

    outputHome.innerHTML = settings;
}