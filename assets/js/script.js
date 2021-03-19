// declare variables
const rdmImageCol = document.getElementById('rdm-image');
const splash = $(".splash");



// favorites in the sidebar


// main splash page functionality/api. Do we want to replace the splash page, or just have it pop up with modals?


// script to save favorites in localStorage when selected


// random image for right column
const rdmImages = ['dognet.jpg', 'claire.jpg', 'claire2.jpg', 'mattwoman.jpg', 'catwoman2.jpg', 'Matt-kitt-catwoman.jpg', 'carrot-bio-biotonne-vegetables-thumb.jpeg', 'danbo-figures-love-longing-thumb.jpeg', 'horse-lizard-pfechse-photoshop-thumb.jpeg', 'nose-mouth-dog-black-thumb.jpeg', 'ostrich-animal-nature-wildlife-thumb.jpeg', 'shark-sea-ocean-blue-thumb.jpeg', 'son-of-a-bitch-inner-pig-dog-dog-pig-thumb.jpeg', 'tomatoes-ketchup-sad-food-thumb.jpeg', 'yoga-frog-relaxed-figure-thumb.jpeg', ]

const rdmImageBtn = document.createElement('button');
rdmImageBtn.setAttribute('class', 'button is-info is-small is-rounded random-image-btn');
rdmImageBtn.setAttribute('id', 'randomImageBtn');
rdmImageBtn.textContent = ("Click here for a surprise!");
rdmImageCol.append(rdmImageBtn);
rdmImageBtn.addEventListener('click', genRdmImage);

// rdm image function here
// I searched royalty free images from https://www.pickpik.com/search?q=funny&sort=aesthetic&page=2 and added some more to the images folder
// I (sdb) am not attached to any of these images, delete away if (any of) you like
function genRdmImage() {
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

  $(splash).empty();

    let apiURL = 'http://www.boredapi.com/api/activity/';
  
    fetch(apiURL)
    .then(function (response) {
        if (response.ok) {
        response.json().then(function (data) {
          boredDisplay(data);
        });
        //boredDisplay(response);
        } else {
        modalErrorAlert('Error: ' + response.statusText);  
        }
    })
    .catch(function (error) {
        modalErrorAlert('Unable to connect to Bored Database'); 
    });
  };

let boredDisplay = function (data) {
  // splash.empty();
  const activity = data.activity;
  const participants = data.participants;
  const type = data.type;

  const boredActivity = document.createElement('p');
  boredActivity.textContent = activity;

  // create button
  const submitBtn = document.createElement('button');
   submitBtn.setAttribute('id', 'newBoredActivity');
  submitBtn.classList.add('button');
  const btnText = document.createTextNode('Still feeling dull? Click for another suggestion!');
    submitBtn.appendChild(btnText);

  // meme
  const boredMeme = document.createElement('img');
  boredMeme.setAttribute('src', href='https://sayingimages.com/wp-content/uploads/are-you-bored-memes.jpg')
  
  // title text
  const title = document.createElement('h3');
  const titleText = document.createTextNode('Be Warned: I am bored.  This could get dangerous.');
    title.appendChild(titleText);
    title.appendChild(boredMeme);

  //create a div body element
  const body = document.createElement('div');
  body.classList.add('boredBody');

  //append the title, the submit button and the activity to the body
  body.appendChild(title);
  body.appendChild(submitBtn);
  body.appendChild(boredActivity)

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
  $(splash).empty();

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container')
  const submitBtn = document.createElement('button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.classList.add('button');
  submitBtn.appendChild(imgContainer)
  const btnText = document.createTextNode('Get your AVATAR!');
  submitBtn.appendChild(btnText);
  const inputDiv = document.createElement('div');
    inputDiv.classList.add('control');
  const input = document.createElement('input');
    input.setAttribute('class', 'input user-input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your random text or numbers here!');
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

  document.getElementById('submitBtn').addEventListener('click', displayAvatar);
}

const displayAvatar = function (event) {
  const imgContainer = $('.img-container');
  const userInput = document.getElementsByClassName('user-input');
  imgContainer.empty();
  let apiURL = 'https://robohash.org/' + userInput;
  
  const roboHashImage = document.createElement('img')
  roboHashImage.setAttribute('src', apiURL)
  roboHashImage.setAttribute('class', 'avatar-image')
  const avatarDiv = document.createElement('div')
  avatarDiv.appendChild(roboHashImage)
  imgContainer.append(avatarDiv)
  userInput.value = "";
}

// end roboHash API functions


// // superHero API functions
// let superHero = function (event) {

//   $(splash).empty();

//   let apiURL = 'http://superheroapi.com/api/10224580750642127';

//   fetch(apiURL)
//   .then(function (response) {
//       if (response.ok) {
//       response.json().then(function (data) {
//         superHeroDisplay(data);
//       });
//       } else {
//       modalErrorAlert('Error: ' + response.statusText);  
//       }

//   })
//   .catch(function (error) {
//       modalErrorAlert('Unable to connect to Facts Database');
//   });
// };


// let superHeroDisplay = function (data) { 
//   const id = data.id;
//   const biography = data.biography;
//   const characterImage = data.characterImage;
//   const work = data.work;
//   const container = $("<div>")
//     .html(`<h3>Superhero Superfun, Check Here</h3>
//       <p>${id}</p>
//       <p>Characters Biography; ${biography}</p>
//       <img>Superhero Image; ${characterImage}</img>
//       <p>Character's Work Occupation and Operation Base;  ${work}</p>`);
// };
// end superHero API function



// cat facts API function
let catFacts = function (event) {
  let apiURL = 'https://cat-fact.herokuapp.com/facts/random';
  // let apiURL = 'https://cat-fact.herofacts/random';                 // for testing error modal
  
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

  // const container = $("<div>")
  //     .html(`<h3>Click Fur a Cat Fact!</h3>`)


  const catFact = document.createElement('p');
  const catFactText = document.createTextNode(facts)
  catFact.appendChild(catFactText)
  const submitBtn = document.createElement('button');
   submitBtn.setAttribute('id', 'newCatFact');
  submitBtn.classList.add('button');

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
    body.appendChild(title);
    
    body.appendChild(submitBtn);
    body.appendChild(catFact)

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
  const setup = data.setup;
  const punchline = data.punchline;
  const container = $("<div>")
      .html(`<h3>Ready for a Laugh?!</h3>
      <p>Are you ready to laugh? ${setup}</p>
      <p>Here goes funny... ; ${punchline}</p>`)

}
// end random jokes API function

// 'Unable to Connect Modal goes here'

function modalErrorAlert(error) {
  let modalAlert = document.getElementById('modal')
  document.querySelector('.modal-card-body').textContent = error;
  modalAlert.classList.add('is-active')

}

// eventlisteners go here
document.getElementById('bored').addEventListener('click', bored);
document.getElementById('roboHash').addEventListener('click', roboHash);
// document.getElementById('superHero').addEventListener('click', superHero);
document.getElementById('catFacts').addEventListener('click', catFacts);
document.getElementById('randomJokes').addEventListener('click', randomJokes);




// modal event listeners for closing the alert box
//close button in top-right of box
document.querySelector('.delete').addEventListener('click', function () {
  let modalAlert = document.getElementById('modal')
  modalAlert.classList.remove('is-active')
})
//close button in the bottom left
document.querySelector('.button.is-success').addEventListener('click', function (){
  let modalAlert = document.getElementById('modal')
  modalAlert.classList.remove('is-active')

})
