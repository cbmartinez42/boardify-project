
// declare variables
const rdmImageCol = document.getElementById('rdm-image')
const splash = $(".splash");



// favorites in the sidebar


// main splash page functionality/api. Do we want to replace the splash page, or just have it pop up with modals?


// script to save favorites in localStorage when selected


// random image for right column
const rdmImages = ['mattwoman.jpg', 'catwoman2.jpg', 'Matt-kitt-catwoman']

const rdmImageBtn = document.createElement('button');
    rdmImageBtn.setAttribute('class', 'button is-info is-medium is-centered');
    rdmImageBtn.setAttribute('id', 'randomCatImage');
    rdmImageBtn.textContent = "Click here for a surprise!";
rdmImageCol.prepend(rdmImageBtn);
rdmImageBtn.addEventListener('click', genRdmImage);

function genRdmImage(){
    // rdm image function here


let rmdImageSelection =  rdmImages[i]
rdmImgUrl = '../images/' + rmdImageSelection
}


// // bored API functions
let bored = function (event) {
    let apiURL = `http://www.boredapi.com/api/activity/`;
  
    fetch(apiURL)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (data) {
              console.log(data);
      
        //this empties the contents of the row
        $(splash).empty();
        boredDisplay(data);
      })
};

let boredDisplay = function (data) { 
    const activity = data.activity;
    const participants = data.participants;
    const type = data.type;
    const container = $("<div>")
        .html(`<h3>Try This</h3>
        <p>${activity}</p>
        <p>Number of Participants; ${participants}</p>
        <p>Type of Activity; ${type}</p>`)
}

// end bored API functions

// roboHash API functions 
const roboHash = function (event){
  $('.splash').empty()

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('button');
  const btnText = document.createTextNode('Get your AVATAR!')
  submitBtn.appendChild(btnText);
  const inputDiv = $('div')
    .addClass('control')
    .html(`<input class='input' type='text' placeholder='Enter your random text/numbers here!'`);
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Create your new AVATAR!')
  const body = document.createElement('div');
  body.classList.add('roboBody');
  const col = document.createElement('div');
  col.classList.add('column');
  col.classList.add('roboCol');
  const div = document.createElement('div');
  div.classList.add('container');
  div.classList.add('roboCont');

  
  title.appendChild(titleText)
  body.appendChild(title)
  body.append(inputDiv)
  body.appendChild(submitBtn)
  col.appendChild(body)
  div.appendChild(col)
  splash.append(div) 


}



// eventlisteners go here
document.getElementById('bored').addEventListener('click', bored)
document.getElementById('roboHash').addEventListener('click', roboHash)