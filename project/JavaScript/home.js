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
                <div class="arrowLeft" class="arrow"></div>
                <p>English</p>
                <div class="arrowRight" class="arrow"></div>
            </div>
            
        </div>

        <div class="settOp">
            <div class="textBox">Fullscreen</div>

            <div class="settingsSelection">
                <div class="arrowLeft" class="arrow"></div>
                <p>Off</p>
                <div class="arrowRight" class="arrow"></div>
            </div>
            
        </div>

        <div class="settOp">
            <div class="textBox">Language</div>

            <div class="settingsSelection">
                <div class="arrowLeft" class="arrow"></div>
                <p>English</p>
                <div class="arrowRight" class="arrow"></div>
            </div>
            
        </div>
    
    
    </div>
 `;

    outputHome.innerHTML = settings;
}