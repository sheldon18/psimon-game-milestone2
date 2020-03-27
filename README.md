
# PSIMON - The P is Silent

README file for Interactive Frontend Development Milestone Project

-----

### Links

[Click to Play PSIMON](https://sheldon18.github.io/psimon-game-milestone2/) </br>
[Click for GitHub Repo](https://github.com/sheldon18/psimon-game-milestone2/)


## About this website

The P is silent and so is this game. It's the same retro single-player sequence-matching memory game from the 70's that we all know and love. 
Suitable for all ages to test their memory and skill. 


## UX

__Ideal User__
- Those who want to play a simple retro-styled game (for a change)
- Those who want to keep their memory levels up there
- Early childhood training
- Senior adults' memory exercise

__How can they achieve this?__
1. Click Start 
2. Click Strict (Optional)
3. Wait for computer's sequence to play
4. Mirror computer's sequence by clicking on the coloured buttons in the same order as the computer's sequence
5. Reach level 20 successfully to win the game.
6. Too Easy? Try the Strict mode for bit more of a challenge.
7. Strict mode too easy as well? Contact me for a quicker-paced version.


## Features

- Background image renders the feel of holding the actual retro hand-held game
- 4 distinctive colour buttons
- Corresponding lighter colours are vividly brighter when activated with smooth animation
- Power Switch toggle button
- Electronic font score display
- STRICT button for strict mode play


## Wireframes


<p align="center"><img src="https://user-images.githubusercontent.com/44424348/77587906-b2bb3680-6f4d-11ea-8786-c405c9ea38a9.JPG" /></p>

<p align="center"><img src="https://user-images.githubusercontent.com/44424348/77587948-c6ff3380-6f4d-11ea-8494-c225734a040f.JPG" /></p>

![psimonwindowview](https://user-images.githubusercontent.com/44424348/77587960-cb2b5100-6f4d-11ea-9694-0fdec6ff0622.JPG)


## Technologies and External APIs

- For wireframes, I used the __Balsamiq Wireframes__ tool (as per pictures above).
- __HTML5, CSS, JavaScript__ technologies used.
- CDNJS cloudfare for executing JavaScript.
- Google Fonts API for control board texts.
- Used GitHub issues section to generate links to add wireframe images to README.
- Non-watermarked google-sourced image was used for background image. Uploaded with postimages.org.

## Testing

#### Code Validation

- __W3C Markup Validation Service__ used to validate HTML code by direct input.
- __W3C CSS Validation Service__ used to validate CSS code by direct input.
- __Chrome dev tools__ and __Mozilla inspect element tool__ used for testing HTML and CSS.
- Browser __console log__ used for testing JavaScript and sequencing.


#### User Testing

- if player toggles play switch to PLAY, score display to change to 00
- if player toggles play switch to OFF, score display to change to --
- if player click START, play switch should toggle to PLAY and game should start (computer's sequence)
- once computer sequence is played, player can click on coloured buttons
- If player click buttons in same order of computer's sequence, then game progress to next level and next level computer's sequence starts
- If player click buttons in incorrect order, as soon as first incorrect button is pressed, the display depicts :( temporarily, thus requesting play to try same level again.
- if player click STRICT, play switch should toggle to PLAY and game should start (computer's sequence)
- (If in Strict mode) If player click buttons in incorrect order, as soon as first incorrect button is pressed, the score board displays :( temporarily and game is reset to level 1.
- If player completes level 20, score board displays :), which means game has been won.


## Deployment

This project was developed using the AWS Cloud9, and deployed to GitHub.

To deploy this page to GitHub I did the following:
1. Logged into __GitHub__
2. Clicked on _settings_ page of my milestone project repository
3. In __GitHub Pages__ section, changed Source from __None__ to __Master Branch__
4. [GitHub Link](https://sheldon18.github.io/psimon-game-milestone2/) is then generated


### Credits & Acknowledgements

- Stackoverflow
- W3schools
- CSS Tricks
- CodePen and rootech youtube channel assisted with the basic understanding of the coding of this game.
- Partial Code used in this project were from codepen challenges and tutorials.
- [Post Images](https://postimages.org/) for uploading background image
- [GitHub Guides](https://guides.github.com/features/mastering-markdown/) used for markdown
- [Mozilla Developer Tools](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) used for understanding __setInterval__
- This README file layout was based on my previous README files
- README image uploads were done with assistance from stackoverflow.
- Tutor Support assistance was used JavaScript execution


#### Media

- Background [image](https://i.postimg.cc/XNdbSVfh/psimon-background.jpg) sourced from google and was vertically flipped and uploaded using Post Images.
- Raw file in images directory


#### Disclaimer

The content of this website is for educational and milestone project purposes only.
