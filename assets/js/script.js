// declare variables
const rdmImageCol = document.getElementById('rdm-image')



// favorites in the sidebar


// main splash page functionality/api. Do we want to replace the splash page, or just have it pop up with modals?


// script to save favorites in localStorage when selected


// random image for right column

const rdmImageBtn = document.createElement('button');
    rdmImageBtn.classList.add('is-info');
    rdmImageBtn.textContent = "Click here for a surprise!";
rdmImageCol.appendChild(rdmImageBtn)
rdmImageBtn.addEventListener('click', genRdmImage());

function genRdmImage(){
    // rdm image function here

}