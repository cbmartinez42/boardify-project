<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>




// declare variables
const rdmImageCol = document.getElementById('rdm-image')



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