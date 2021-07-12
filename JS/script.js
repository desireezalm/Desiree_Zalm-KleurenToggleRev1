// OPEN/CLOSE TOGGLE MENU (INCL. AFTER CLICKING AND CLICKING OUTSIDE MENU)

const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navSidebar = document.getElementById('nav-sidebar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'nav-sidebar'){
        toggle.classList.remove('active');
        navSidebar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navSidebar.classList.toggle('active');
}


// OPEN/CLOSE TOGGLE MENU ON HOVER

/*
document.onmouseover = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'nav-sidebar'){
        toggle.classList.remove('active');
        navSidebar.classList.remove('active');
    }
}

toggle.onmouseover = function(){
    toggle.classList.toggle('active');
    navSidebar.classList.toggle('active');
}
*/

// TEXT COLOR WRITTEN OUT

const changeText = function() {
    let currentBackground = document.getElementsByTagName("body")[0].className;
    let textDiv = document.getElementById("textColor");
    console.log(currentBackground);
    switch (currentBackground) {
        case "color-grey":
            textDiv.textContent = "The current background color is grey";
            break;
        case "color-red":
            textDiv.textContent = "The current background color is red";
            break;
        case "color-yellow":
            textDiv.textContent = "The current background color is yellow";
            break;
        case "color-purple":
            textDiv.textContent = "The current background color is purple";
            break;
        case "color-green":
            textDiv.textContent = "The current background color is green";
            break;
    }
    
}

// CHANGE BACKGROUND COLOUR

const colorBackground = document.querySelector("#body");

const changeToGrey = () => {
    colorBackground.className = "color-grey";
}

const changeToRed = () => {
    colorBackground.className = "color-red";
}

const changeToYellow = () => {
    colorBackground.className = "color-yellow";
}

const changeToPurple = () => {
    colorBackground.className = "color-purple";
}

const changeToGreen = () => {
    colorBackground.className = "color-green";
}

const backgroundGrey = document.getElementById("radio-grey");
backgroundGrey.addEventListener('click', changeToGrey);
backgroundGrey.addEventListener('click', changeText);

const backgroundRed = document.getElementById("radio-red");
backgroundRed.addEventListener('click', changeToRed);
backgroundRed.addEventListener('click', changeText);

const backgroundYellow = document.getElementById("radio-yellow");
backgroundYellow.addEventListener('click', changeToYellow);
backgroundYellow.addEventListener('click', changeText);

const backgroundPurple = document.getElementById("radio-purple");
backgroundPurple.addEventListener('click', changeToPurple);
backgroundPurple.addEventListener('click', changeText);

const backgroundGreen = document.getElementById("radio-green");
backgroundGreen.addEventListener('click', changeToGreen);
backgroundGreen.addEventListener('click', changeText);


