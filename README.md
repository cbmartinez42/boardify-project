# Boredify!
## An app to cure boredness!

### Description

Do you ever feel bored out of your mind during a pandemic?! If the answer is yes, you can waste your hours away using Boredify! Want to know more about cats? Who doesn't?! Let us serve up a random cat fact at will to increase your grey matter! If you have Zoom fatigue or are just dazing off in a conversation, you can look up random jokes to tickle your funny bone! Use our random activity generator for something to do to break up the monotony of the day! Want to know what your robot alter-ego looks like? Try our RoboHash app to serve up an avatar based on your input!


### User Story
```
AS A Boredify user
I WANT to be presented with options to waste my time
SO THAT I can escape boredom
```

### Acceptance Criteria
```
GIVEN I need to escape my bored reality
WHEN I open the website
THEN I am presented with options to waste my time
WHEN I choose an option
THEN I am presented with an interactive way to use it
WHEN I get bored with my first activity choice
THEN I can select from several other ridiculous options
WHEN I find activities that are entertaining
THEN I can save them in a favorites list
WHEN I get bored with an activity
THEN I can delete it 
```

### Features
* Waste your time away with multiple activities designed to give you an escape from boredom!
    * View random jokes
    * View random cat facts
    * Create a robot avatar from any random characters
    * View a random activity to try
    * More to come! 
* Includes a random image generator to elicit a giggle on demand! 
* Found an activity you like? Save it to your favorites for easy access as site content grows!

### Technical details
* Utilized vanilla JavaScript and jQuery throughout to both provide functionality as well as build DOM elements
* Utilized Bulma CSS Framework as well as custom CSS for styling
* Utilized modals in place of alerts to improve the UX

### Challenges
* As a team, we faced challenges in styling to create the rich but simple user-friendly experience. Google-fu and support/input from other developers was key in overcoming these issues! 
* Javascript was a challenge with implimenting the different DOM elements as well as interfacing with localstorage. We overcame this by constantly doing research as well as by collaborating together


## Credits
Contributors
* [Chris Martinez](https://github.com/cbmartinez42)
* [Stacy Martin](https://github.com/Stacy-Martin)
* [Kyle Florez](https://github.com/SLUDGE-GIT)
* [Jaila Primm](https://github.com/JPrimm99)

Many thanks to the below individuals who provided input and suggestions
* Mim Armand
* Stephen Simone
* Kat Poulos
* And last, but not least - *Grogu*
        
<img src="./assets/images/grogu.png">

---

This application is covered under [GNU General Public License v3.0](./LICENSE)

Published site:
[https://cbmartinez42.github.io/boredify-project/](https://cbmartinez42.github.io/boredify-project/)

Screenshots of wireframe:

<img src="./assets/images/wireframe-screenshot-1.PNG">
<img src="./assets/images/wireframe-screenshot-2.PNG">

Screenshot of published site:
<img src="./assets/images/boredify3screenshot.png">


## Features
* Waste your time away with multiple activities designed to give you an escape from boredom!
    * View random jokes
* Shows a five-day forecast including the date, temperature and humidity, as well as another icon to denote the overall conditions for the day
* Maintains a list of the previous eight searches

## Technical details
* Utilized vanilla JavaScript and jQuery throughout to both provide functionality as well as build DOM elements
* Utilized Moment.js for assistance with date elements
* Styling is a combination of Bootstrap and custom CSS

### Challenges
* I had difficulties with the sidebar at first, but was able to find some researches through cunning use of google-fu that helped with finding code. 
* I utilized Postman for assistance with analyzing the different results from multiple API URLs and implimenting the different properties into my code
* Because of the different elements involved, I had difficulty with some responsiveness. I was able to do some research through Bootstrap documentation to impliment *some* responsiveness, but plan to improve this aspect over time
* In the time given, and to be able to create a MVP, searches are limited to city name only. For the most part, this seems to be serviceable, however, cities with multiple names are an issue, and some cities return as not found even when spelled correctly (such as Maui). In time, I plan to improve the search capabilities
* Duplicate cities in the history - I have tried a few methods but haven't been successful as of yet. Stay tuned

## Credits
Many thanks to the below individuals who provided input and suggestions
* Mim Armand
* Stephen Simone
* Kat Poulos
* Mark Artim
* Katie Martinez - Photo & input on colors
* And last, but not least - *Grogu*
        
<img src="./assets/images/grogu.png">

---

### <ins>Installation</ins>
1.  Clone or download .zip file from Github to your local computer
2.  Open index.html via your preferred browser or code/text editor

#### <ins>Cloning</ins>
1. From Github, select the "Code" button, choose either HTTPS or SSH as appropriate
2. Click the copy button <img src="./assets/images/copy-button.PNG"> to add it to your clipboard
3. In your preferred command line (terminal, bash, etc), navigate to the folder you'd like to download the repository into
4. Type `git clone [pasted url from clipboard]` and press enter
5. Access the content with your code editor by either typing `code .` in your command line or by using your editor's `File > Open Folder` in your code editor menu. If only viewing in a browser, simply double click index.html to open in your default browser


#### <ins>Zip file</ins>
1. From Github, select the "Code" button, then select "Download ZIP"
2. Choose which folder to download the repository into via the dialog box that appears
3. After downloading, open the .zip file and select "Extract All" from the top of the window that appears
4. Access the content with your code editor by selecting `File > Open Folder` in your code editor menu. If only viewing in a browser, simply double click index.html to open in your default browser


---



## Screenshot below:

<img src="./assets/images/weather-dashboard.gif">