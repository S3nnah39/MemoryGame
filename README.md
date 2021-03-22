# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **TASHA OGOTI**

Time spent: **48** hours spent in total

Link to project: (https://mind-game.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* "Start" button toggles between "Start" and "Stop" when clicked. 
* Game buttons each light up and play a sound when clicked. 
* Computer plays back sequence of clues including sound and visual cue for each button
* Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* User wins the game after guessing a complete pattern
* User loses the game after an incorrect guess

The following **optional** features are implemented:

* Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* Buttons use a pitch (frequency) other than the ones in the tutorial
* More than 4 functional game buttons
* Computer picks a different pattern each time the game is played
* Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- Loading page animations
- Available for use by spanish speakers
- Available for view on sizeable media screens 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://i.imgur.com/eEyaagy.gif)

![](https://i.imgur.com/gXfQlMI.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
image - https://icons8.com/illustrations
landing page - https://www.youtube.com/watch?v=ccO2B40zkv4
floating keyframe - https://www.youtube.com/watch?v=aO6Ax9CuyN4e
color codes - https://coolors.co/palettes/trending
implementation of different things - https://www.w3schools.com/html/default.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Had problems having my javascript work. Went through the code to see if the syntax was correct. Noticed I had missed a bracket and I had called getElementById on a TagName
Had issues in displaying the image on the webpage, cause I would call in the source, "asset/imagename.png". After watching a youtube video I found that it required the url link that the assets folder provided.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Is there a structure to media queries?
How are you able to develop web apps suited for any device, do you have to start with one device and rebuild for others?
How does one dynamically change between webpages?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

   Game button appearance change goes beyond color (e.g. add an image). 
   Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones).
   User has a limited amount of time to enter their guess on each turn.
   Playback speeds up on each turn.


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.