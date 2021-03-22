// declare variables
const rdmImageCol = document.getElementById('rdm-image');
const splash = $(".splash");

// last activity acts as an id for the activity the user would click on
let lastActivity = 1;
let activityNames = ['Cat Facts','Bored?','Robot Hash', 'Jokes'];

// container to hold the favorite list
let cont = document.getElementById('favoriteList')

// dynamicaly creates the favorites list
let newUl = document.createElement('ul')
newUl.setAttribute('style', 'padding: 5; margin: 5;');
newUl.setAttribute('id', 'theList');

let favListArr = getFavorites();

for (let i=0; i < favListArr.length ; i++){
let newLi = document.createElement('li');
newLi.setAttribute('data-activity', favListArr[i]);
newLi.innerHTML = activityNames[favListArr[i] -1];
newUl.appendChild(newLi);
}

cont.appendChild(newUl);

//grabs favorites from local storage
function getFavorites(){
  let favoriteResults = [];
  let localStorageFavorites = localStorage.getItem('favorites')
  if (!!localStorageFavorites){
      favoriteResults = JSON.parse(localStorageFavorites);
  }
  return favoriteResults;
}

// script to save favorites in localStorage when selected
function addToFavorites() {
  let currentFavorites = getFavorites();
  
  if(currentFavorites.includes(lastActivity)){
    return
  } 
  currentFavorites.push(lastActivity);
  localStorage.setItem('favorites', JSON.stringify(currentFavorites));

  let newLi = document.createElement('li');
newLi.setAttribute('data-activity', lastActivity);
newLi.innerHTML = activityNames[lastActivity -1];
newUl.appendChild(newLi);
}

// random image generator for right column
const rdmImages = ['stimulus.jpg', 'wreckingball.gif', 'update.jpg', 'duelmonitors.jpg', 'killhuman.jpg', 'homeearly.jpg', 'stare.jpg', 'stormtrooper.jpg', 'vegatables.jpg', 'transmission.jpg', 'dogscared.jpg', 'chickynuggies.jpg', 'beware.jpg', 'adt.jpg', 'palehorse.jpg', 'mistake.jpg', 'replacement.jpg', 'dobby.jpg', 'cathavoc.jpg', 'problemsolving.jpg', 'colorblind.jpg', 'coneshame.jpg', 'llama.jpg', 'longday.jpg', 'gift.jpeg', '418-teapot.jpeg', 'dognet.jpg', 'claire.jpg', 'claire2.jpg', 'mattwoman.jpg', 'catwoman2.jpg', 'Matt-kitt-catwoman.jpg', 'carrot-bio-biotonne-vegetables-thumb.jpeg', 'danbo-figures-love-longing-thumb.jpeg', 'horse-lizard-pfechse-photoshop-thumb.jpeg', 'nose-mouth-dog-black-thumb.jpeg', 'ostrich-animal-nature-wildlife-thumb.jpeg', 'shark-sea-ocean-blue-thumb.jpeg', 'son-of-a-bitch-inner-pig-dog-dog-pig-thumb.jpeg', 'tomatoes-ketchup-sad-food-thumb.jpeg', 'yoga-frog-relaxed-figure-thumb.jpeg', ]
const rdmImageBtn = document.createElement('button');
rdmImageBtn.setAttribute('class', 'button is-info is-small is-rounded random-image-btn');
rdmImageBtn.setAttribute('id', 'randomImageBtn');
rdmImageBtn.textContent = ("Click here for a surprise!");
$('.rdm-title').append(rdmImageBtn);
rdmImageBtn.addEventListener('click', genRdmImage);
function genRdmImage() {
  // empty prev random images
  $('.random-image').empty();
  let rmdImageSelection = rdmImages[Math.floor(Math.random() * rdmImages.length)]
  rdmImgUrl = './assets/images/random/' + rmdImageSelection
  const funnyImage = document.createElement('img');
  funnyImage.setAttribute('alt', 'Funny Image');
  funnyImage.setAttribute('id', 'funnyImage');
  funnyImage.setAttribute('src', rdmImgUrl);
  $('.random-image').append(funnyImage);
}

// create reload page button
let reloadBtn;
function createReloadBtn() {
  reloadBtn = document.createElement('button');
  reloadBtn.setAttribute('id', 'reloadBtn');
  reloadBtn.setAttribute("class", 'button is-info is-small is-rounded');
  const reloadBtnText = document.createTextNode('Back to main page');
  reloadBtn.appendChild(reloadBtnText);
  reloadBtn.addEventListener('click', reloadBtnAction);
  }

// // bored API functions
let bored = function (event) {
  $(splash).empty();
    let apiURL = 'https://www.boredapi.com/api/activity/';
  
    fetch(apiURL)
    .then(function (response) {
        if (response.ok) {
        response.json().then(function (data) {
          boredDisplay(data);
        });
        } else {
        modalErrorAlert('Error: ' + response.statusText);  
        }
    })
    .catch(function (error) {
        modalErrorAlert('Unable to connect to Bored Database'); 
    });
  };

let boredDisplay = function (data) {
  lastActivity = 2;
  const activity = data.activity;
  const boredActivity = document.createElement('p');
  boredActivity.textContent = activity;
  createReloadBtn();
  const submitBtn = document.createElement('button');
   submitBtn.setAttribute('id', 'newBoredActivity');
   submitBtn.setAttribute("class", 'button is-info is-small is-rounded');
  const submitBtnText = document.createTextNode('Still feeling dull? Click for another suggestion!');
    submitBtn.appendChild(submitBtnText);
  // meme
  const boredMeme = document.createElement('img');
  boredMeme.setAttribute('src', href='https://sayingimages.com/wp-content/uploads/are-you-bored-memes.jpg')
  boredMeme.setAttribute('id', 'bored-meme')
  // title text
  const title = document.createElement('h3');
    title.appendChild(boredMeme);
  //create a div body element
  const body = document.createElement('div');
  body.classList.add('apiBody');
  //append the title, the submit button and the activity to the body
  body.appendChild(title);
  body.appendChild(submitBtn);
  body.appendChild(boredActivity);
   body.appendChild(reloadBtn);
  // creates the column all the api elements fit in after the splash page button is pressed
  const col = document.createElement('div');
  col.classList.add('column');
  col.classList.add('boredCol');
  col.appendChild(body);
  const div = document.createElement('div');
  div.classList.add('container');
  div.classList.add('boredCont');
  //append the elements to the splash page
    div.appendChild(col);
    splash.append(div);
  // event listen for a new activity
  document.getElementById('newBoredActivity').addEventListener('click', bored);
}
// end bored API functions

// roboHash API functions 
const roboHash = function (event) {
  //this empties the contents of the row
  lastActivity = 3
  $(splash).empty();

  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('id', 'img-container')
  const submitBtn = document.createElement('button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.setAttribute('class', 'button is-info is-small is-rounded');
  const btnText = document.createTextNode('Get your AVATAR!');
  const roboHashCredit = document.createElement('div');
  roboHashCredit.style.fontSize = 'medium';
  const roboHashText = document.createTextNode('Robots lovingly provided by RoboHash.org');
  roboHashCredit.appendChild(roboHashText);
  submitBtn.appendChild(btnText);
  const inputDiv = document.createElement('div');
    inputDiv.setAttribute('class', 'control');
  const input = document.createElement('input');
    input.setAttribute('class', 'input');
    input.setAttribute('id', 'user-input')
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your random text or numbers here!');
  inputDiv.appendChild(input);
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Create your new AVATAR!');
  title.appendChild(titleText);
  const body = document.createElement('div');
    body.classList.add('roboBody');
    body.classList.add('apiBody');
  body.appendChild(title);
  body.appendChild(inputDiv);
  body.appendChild(submitBtn);
  body.appendChild(roboHashCredit);
  body.appendChild(imgContainer);
  createReloadBtn();
  body.appendChild(reloadBtn);
  const col = document.createElement('div');
    col.classList.add('column');
    col.classList.add('roboCol');
  col.appendChild(body);
  const div = document.createElement('div');
    div.classList.add('container');
    div.classList.add('roboCont');
  div.appendChild(col);
  splash.append(div);

  document.getElementById('submitBtn').addEventListener('click', displayAvatar);
}

const displayAvatar = function (event) {
  const imgContainer = $('#img-container');
  let userInput = document.getElementById('user-input');
  imgContainer.empty();
  let apiURL = 'https://robohash.org/' + userInput.value + '?set=any';
  
  const roboHashImage = document.createElement('img');
  roboHashImage.setAttribute('src', apiURL);
  roboHashImage.setAttribute('class', 'avatar-image');
  const avatarFigure = document.createElement('figure');
  avatarFigure.setAttribute('class', 'image');
  avatarFigure.appendChild(roboHashImage);
  imgContainer.append(avatarFigure);
  userInput.textContent = "";
  document.getElementById('submitBtn').addEventListener('click', displayAvatar);
}
// end roboHash API functions

// cat facts API function
let catFacts = function (event) {
  lastActivity = 1;
  let apiURL = 'https://cat-fact.herokuapp.com/facts/random?status.verified=true';
  
  fetch(apiURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          catFactsDisplay(data);
        });
      } else {
        modalErrorAlert('Error: ' + response.statusText); 
      }
    })
    .catch(function (error) {
      modalErrorAlert('Unable to connect to Facts Database');
    });
};

let catFactsDisplay = function (data) { 
 
  splash.empty();
  const facts = data.text;
  const catFact = document.createElement('p');
  const catFactText = document.createTextNode(facts)
  catFact.appendChild(catFactText)
  const submitBtn = document.createElement('button');
    submitBtn.setAttribute('id', 'newCatFact');
    submitBtn.setAttribute('class', 'button is-info is-small is-rounded');

  const btnText = document.createTextNode('Click Fur a New Cat Fact!');
    submitBtn.appendChild(btnText);
  const catMeme = document.createElement('img');
  catMeme.setAttribute('src', './assets/images/cats-liquids.jpg')
  catMeme.setAttribute('id', 'cat-meme')
  const catMemeDiv = document.createElement('div');
  catMemeDiv.appendChild(catMeme);
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Cats...the other state of matter');
    title.appendChild(titleText);
    title.appendChild(catMemeDiv);
  const body = document.createElement('div');
  body.classList.add('catBody');
  body.classList.add('apiBody');
    body.appendChild(title); 
    body.appendChild(submitBtn);
    body.appendChild(catFact)
    createReloadBtn();
    body.appendChild(reloadBtn);
  const col = document.createElement('div');
  col.classList.add('column');
  col.classList.add('catCol');
  col.appendChild(body);
  const div = document.createElement('div');
  div.classList.add('container');
  div.classList.add('catCont');

    div.appendChild(col);
    splash.append(div);
  
  document.getElementById('newCatFact').addEventListener('click', catFacts);

}
// end cat facts API function


// random jokes API function
let randomJokes = function (event) {
  
  $(splash).empty();

  let apiURL = 'https://official-joke-api.appspot.com/jokes/random';

  fetch(apiURL)
  .then(function (response) {
      if (response.ok) {
      response.json().then(function (data) {
        randomJokesDisplay(data);
      });
      } else {
      modalErrorAlert('Error: ' + response.statusText);  
      }
  })
  .catch(function (error) {
      modalErrorAlert('Unable to connect to Joke Database');  
  });
};

let randomJokesDisplay = function (data) {

  lastActivity = 4;
  // splash.empty();
  const jokeSetup = data.setup;
  const punchline = data.punchline;
  // call the API properties of interest
  const randomJoke = document.createElement('p');
  randomJoke.textContent = jokeSetup;
  const thePunchline = document.createElement('p');
  thePunchline.textContent = punchline;
  // create button
  const submitBtn = document.createElement('button');
   submitBtn.setAttribute('id', 'newRandomJoke');
  submitBtn.setAttribute('class','button is-info is-small is-rounded');
  const btnText = document.createTextNode('Want more giggles? Click here!');
    submitBtn.appendChild(btnText);
  // meme
  const laughterMeme = document.createElement('img');
  laughterMeme.setAttribute('src', href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsa4aPuOZrlZLZzth4_cSzrDrVsOoZdzGjA&usqp=CAU')
  // title text
  const title = document.createElement('h3');
    title.appendChild(laughterMeme);
  //create a div body element
  const body = document.createElement('div');
  body.classList.add('apiBody');
  //append the title, the submit button and the activity to the body
  body.appendChild(title);
  body.appendChild(submitBtn);
  body.appendChild(randomJoke);
  body.appendChild(thePunchline);
  createReloadBtn();
  body.appendChild(reloadBtn);
  // creates the column all the api elements fit in after the splash page button is pressed
  const col = document.createElement('div');
  col.classList.add('column');
  col.classList.add('jokeCol');
  col.appendChild(body);
  const div = document.createElement('div');
  div.classList.add('container');
  div.classList.add('jokeCont');
  //append the elements to the splash page
    div.appendChild(col);
    splash.append(div);
  // event listen for a new activity
  document.getElementById('newRandomJoke').addEventListener('click', randomJokes);
}
// end random jokes API function

// function to call the modal error alert
function modalErrorAlert(error) {
  let modalAlert = document.getElementById('modal')
  document.querySelector('.modal-card-body').textContent = error;
  modalAlert.classList.add('is-active')
  
}

// reload page button
function reloadBtnAction () {
  location.reload();
}

// eventlisteners go here
document.getElementById('bored').addEventListener('click', bored);
document.getElementById('roboHash').addEventListener('click', roboHash);
document.getElementById('catFacts').addEventListener('click', catFacts);
document.getElementById('randomJokes').addEventListener('click', randomJokes);

//modal event listent to set the card to 'active'
let modalSetInactive = document.querySelectorAll('.closingClick')
console.log(modalSetInactive);
modalSetInactive.forEach(el =>
  {
    console.log(el);
    el.addEventListener('click', function () {
 let modalAlert = document.getElementById('modal')
 modalAlert.classList.remove('is-active')
})})

//modal event listener to set the card to 'inactive'
document.getElementById('theList').addEventListener('click', function(e){
  let activityIndex = e.target.dataset.activity;
  
  switch(activityIndex){
    case '1':
      catFacts();
      break;
    case '2': bored();
    break;
    case '3': roboHash();
    break;
    case '4': randomJokes();
  }
  })

//Clear favorites list
document.getElementById('clearFavorites').addEventListener('click', function (){
$('#theList').empty()
  localStorage.clear();
})

//Add to favorites list
document.getElementById('addtofavoritesList').addEventListener('click',addToFavorites)