
// declare variables
const rdmImageCol = document.getElementById('rdm-image')
const splash = $(".splash");



// favorites in the sidebar


// main splash page functionality/api. Do we want to replace the splash page, or just have it pop up with modals?


// script to save favorites in localStorage when selected


// random image for right column
const rdmImages = ['mattwoman.jpg', 'catwoman2.jpg', 'Matt-kitt-catwoman.jpg']

const rdmImageBtn = document.createElement('button');
    rdmImageBtn.setAttribute('class', 'button is-info is-small is-rounded random-image-btn');
    rdmImageBtn.setAttribute('id', 'randomImageBtn');
    rdmImageBtn.textContent = ("Click here for a surprise!");
rdmImageCol.append(rdmImageBtn);
rdmImageBtn.addEventListener('click', genRdmImage);

    // rdm image function here
function genRdmImage(){
$('.random-image').empty();
let rmdImageSelection = rdmImages[Math.floor(Math.random() * rdmImages.length)]
rdmImgUrl = './assets/images/' + rmdImageSelection
const funnyImage = document.createElement('img');
funnyImage.setAttribute('alt', 'Funny Image');
funnyImage.setAttribute('id', 'funnyImage');
funnyImage.setAttribute('src', rdmImgUrl);
$('.random-image').append(funnyImage);
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
        container.html(`<h3>Try This</h3>
        <p>${activity}</p>
        <p>Number of Participants; ${participants}</p>
        <p>Type of Activity; ${type}</p>`)
}
// end bored API functions



// roboHash API functions 
const roboHash = function (event){
  $(splash).empty();

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.classList.add('button');
  const btnText = document.createTextNode('Get your AVATAR!');
    submitBtn.appendChild(btnText);
  const inputDiv = $('<div>');
    inputDiv.addClass('control');
  const input = document.createElement('input');
  input.setAttribute('class', 'input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter your random text or numbers here!');
    // .attr({'class':'input', 'type':'text', 'placeholder':'Enter your random text or numbers here!'});
    inputDiv.append(input);
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Create your new AVATAR!');
    title.appendChild(titleText);
  const body = document.createElement('div');
  body.classList.add('roboBody');
    body.appendChild(title);
    body.append(inputDiv);
    body.appendChild(submitBtn);
  const col = document.createElement('div');
    col.classList.add('column');
    col.classList.add('roboCol');
    col.appendChild(body);
  const div = document.createElement('div');
  div.classList.add('container');
  div.classList.add('roboCont');
    div.appendChild(col);
    splash.append(div);
}
// end roboHash API functions



// // superHero API functions
let superHero = function (event) {
  let apiURL = `http://superheroapi.com/api/10224580750642127`;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
            console.log(data);
          $(splash).empty();
      superHeroDisplay(data);
    })
};

let superHeroDisplay = function (data) { 
  const id = data.id;
  const biography = data.biography;
  const characterImage = data.characterImage;
  const work = data.work;
  const container = $("<div>")
      container.html(`<h3>Superhero Superfun, Check Here</h3>
      <p>${id}</p>
      <p>Characters Biography; ${biography}</p>
      <img>Superhero Image; ${characterImage}</img>
      <p>Character's Work Occupation and Operation Base;  ${work}</p>`)
}
// end superHero API function



// cat facts API function
let catFacts = function (event) {
  let apiURL = `http://cat-fact.herokuapp.com`;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
            console.log(data);
          $(splash).empty();
      catFactsDisplay(data);
    })
};

let catFactsDisplay = function (data) { 
  const facts = data.facts;
  const container = $("<div>")
      container.html(`<h3>Click Fur a Cat Fact!</h3>`)
}
// Is this all the API provides??
// end cat facts API function



// random jokes API function
let randomJokes = function (event) {
  let apiURL = `https://jokeapi-v2.p.rapidapi.com/submit`;

  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
            console.log(data);
          $(splash).empty();
      randomJokesDisplay(data);
    })
};

let randomJokesDisplay = function (data) { 
  const category = data.category;
  const type = data.type;
  const joke = data.joke;
  const container = $("<div>")
      container.html(`<h3>Ready for a Laugh?!</h3>
      <p>Joke Category; ${category}</p>
      <p>Type of Joke; ${type}</p>
      <p>Here goes funny... ; ${joke}</p>`)
}
// there are a lot of joke APIs, is this the one we want
// there are flag options to look into for blocking NSFW jokes
// end random jokes API function


// eventlisteners go here
document.getElementById('bored').addEventListener('click', bored)
document.getElementById('roboHash').addEventListener('click', roboHash)
document.getElementById('superHero').addEventListener('click', superHero)
document.getElementById('catFacts').addEventListener('click', catFacts)
document.getElementById('randomJokes').addEventListener('click', randomJokes)