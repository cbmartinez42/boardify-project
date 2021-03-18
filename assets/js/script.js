
// declare variables
const rdmImageCol = document.getElementById('rdm-image');
const splash = $(".splash");



// favorites in the sidebar


// main splash page functionality/api. Do we want to replace the splash page, or just have it pop up with modals?


// script to save favorites in localStorage when selected


// random image for right column
const rdmImages = ['dognet.jpg', 'claire.jpg', 'claire2.jpg', 'mattwoman.jpg', 'catwoman2.jpg', 'Matt-kitt-catwoman.jpg', 'carrot-bio-biotonne-vegetables-thumb.jpeg', 'danbo-figures-love-longing-thumb.jpeg', 'horse-lizard-pfechse-photoshop-thumb.jpeg', 'nose-mouth-dog-black-thumb.jpeg', 'ostrich-animal-nature-wildlife-thumb.jpeg', 'shark-sea-ocean-blue-thumb.jpeg', 'son-of-a-bitch-inner-pig-dog-dog-pig-thumb.jpeg', 'tomatoes-ketchup-sad-food-thumb.jpeg', 'yoga-frog-relaxed-figure-thumb.jpeg',]

const rdmImageBtn = document.createElement('button');
    rdmImageBtn.setAttribute('class', 'button is-info is-small is-rounded random-image-btn');
    rdmImageBtn.setAttribute('id', 'randomImageBtn');
    rdmImageBtn.textContent = ("Click here for a surprise!");
rdmImageCol.append(rdmImageBtn);
rdmImageBtn.addEventListener('click', genRdmImage);

    // rdm image function here
    // I searched royalty free images from https://www.pickpik.com/search?q=funny&sort=aesthetic&page=2 and added some more to the images folder
    // I (sdb) am not attached to any of these images, delete away if (any of) you like
function genRdmImage(){
  // empty prev random images
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
    let apiURL = 'http://www.boredapi.com/api/activity/';
  
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
        <p>Number of Participants: ${participants}</p>
        <p>Type of Activity: ${type}</p>`);
};
// end bored API functions



// roboHash API functions 
const roboHash = function (event){
      //this empties the contents of the row
      $(splash).empty();
  
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.classList.add('button');
  const btnText = document.createTextNode('Get your AVATAR!');
    submitBtn.appendChild(btnText);
    console.log(submitBtn)
  const inputDiv = document.createElement('div');
    inputDiv.classList.add('control');
  const input = document.createElement('input');
  console.log(input)
  input.setAttribute('class', 'input user-input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter your random text or numbers here!');
    // .attr({'class':'input', 'type':'text', 'placeholder':'Enter your random text or numbers here!'});
    inputDiv.append(input);
    console.log(input)
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Create your new AVATAR!');
    title.appendChild(titleText);
    console.log(title)
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

  const userInput = $('.user-input')
  let apiURL = 'https://robohash.org/' + userInput;
  const roboHashImage = document.createElement('img')
  roboHashImage.setAttribute('src', apiURL)
}
// end roboHash API functions


// // superHero API functions
let superHero = function (event) {
  let apiURL = 'http://superheroapi.com/api/10224580750642127';

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
    });
};

let superHeroDisplay = function (data) { 
  const id = data.id;
  const biography = data.biography;
  const characterImage = data.characterImage;
  const work = data.work;
  const container = $("<div>")
      .html(`<h3>Superhero Superfun, Check Here</h3>
      <p>${id}</p>
      <p>Characters Biography; ${biography}</p>
      <img>Superhero Image; ${characterImage}</img>
      <p>Character's Work Occupation and Operation Base;  ${work}</p>`);
};
// end superHero API function



// cat facts API function
let catFacts = function (event) {
  let apiURL = 'http://cat-fact.herokuapp.com/facts/random';

  fetch(apiURL)
  .then(function (response) {
      if (response.ok) {
      response.json().then(function (data) {
          catFactsDisplay(data);
      });
      } else {
      alert('Error: ' + response.statusText);  // need to swap out
      }
  })
  .catch(function (error) {
      alert('Unable to connect to Facts Database');   // need to swap out
  });
};

let catFactsDisplay = function (data) { 
  const facts = data.facts;
  // const container = $("<div>")
  //     .html(`<h3>Click Fur a Cat Fact!</h3>`)


  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submitBtn');
  submitBtn.classList.add('button');
  const btnText = document.createTextNode('Get a cat fact!');
    submitBtn.appendChild(btnText);
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Cats...the other state of matter');
    title.appendChild(titleText);
  const body = document.createElement('div');
  body.classList.add('catBody');
    body.appendChild(title);
    body.append(inputDiv);
    body.appendChild(submitBtn);
  const col = document.createElement('div');
    col.classList.add('column');
    col.classList.add('catCol');
    col.appendChild(body);
  const div = document.createElement('div');
  div.classList.add('container');
  div.classList.add('catCont');
    div.appendChild(col);
    splash.append(div);
    
}
// Is this all the API provides??
// end cat facts API function


// random jokes API function
let randomJokes = function (event) {
  let apiURL = 'https://api.icndb.com';

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
  const value = data.value;
  const joke = data.joke;
  const container = $("<div>")
      .html(`<h3>Ready for a Laugh?!</h3>
      <p>How Many Jokes Can You Handle? ${value}</p>
      <p>Here goes funny... ; ${joke}</p>`)
}
// there are a lot of joke APIs, is this the one we want?  If so delete others off of readme
// end random jokes API function


// eventlisteners go here
document.getElementById('bored').addEventListener('click', bored);
document.getElementById('roboHash').addEventListener('click', roboHash);
document.getElementById('superHero').addEventListener('click', superHero);
document.getElementById('catFacts').addEventListener('click', catFacts);
document.getElementById('randomJokes').addEventListener('click', randomJokes);