# Dueling With Dad Jokes
* [live app](https://caleb-king.github.io/dueling-with-dad-jokes/)

## Summary

Dueling with Dad Jokes is a web app which provides users a fun and lighthearted experience with friends through playing a game where they face-off by telling terrible dad jokes to each other and try not to laugh. 

More detailed instructions for how to play can be found on the [home page](https://caleb-king.github.io/dueling-with-dad-jokes/index.html) of the app. There you will also find a video example of two dads facing off.

I am using the icanhazdadjoke.com API for my joke database to provide random jokes during gameplay. I am also using this API in my Find Jokes feature.

## User Stories

**As a newcomer to the web app:**
* I can understand the rules of the game
* I can watch a video of the game being played for entertainment as well as to ensure I understand the gameplay

**As a player of the game:**
* I can receive random dad jokes to read to my opponent
* I can update the score when I or my opponent laughs
* I can check the score at any point during the game
* I can to undo any updates to the score that were incorrect or accidental
* I am informed when either me or my opponent has won
* I can reset the game and play again

**As a visually impaired player:**
* I too am able to play the game

**As an admin of the website:**
* I am not responsible for updating the jokes within joke database - it is managed for me

**As a user**
* I can search the dad jokes database

## Technical Requirements

* Used fetch for AJAX calls and jQuery for DOM manipulation
* Used namespacing to adhere to good architecture practices
* Minimal global variables
* Created modules in separate files to organize my code
* Logically grouped my functions
* Used semantic HTML
* Used a responsive and mobile-first design
* Visually and functionally solid in viewports for mobile and desktop
* Followed a11y best practices
