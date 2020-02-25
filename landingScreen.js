
function landingScreen() {
    
    let element = document.getElementById("landingScreen");
    element.classList.add("disappear");
    
    let sound  = document.getElementById("unlock");
    sound.play();
    
    let ambient  = document.getElementById("ambient");
    ambient.play();
}