# Coding Quiz 

# Summary 
For this assignment, we were asked to create to create a timed quiz with multiple choice questions which will run in the browser using HTML, CSS, and JavaScript. When the quiz begins: 
- A timer must start and present the user with a question
- When a question is answered, then it will take the user to the next question
- If the question in answered incorrectly, then time will be deducted
- When all the questions are answered or if time runs out, then it will take the user to a page where they can save their name and score 

The final result was this: <!-- Website Link -->


# Getting Started
Bulding a structure for the coding quiz was one of the first things that I began to create when building this quiz. Instead of having everything like the questions, the score page, etc in one HTML file, I wanted to give everything its own page. After all the pages were built, thats when I began to build the JavaScript files for each of the pages.

# Issues
One of the main issues that I had when building this quiz was the timer, it was easy to get it running on the questions page, but whenever I would make any change to the JavaScript code, the timer would go away.

I ended up changing every variable declaration from "const" to "var" which got everything working again.

Another issue that I had was I could not figure out how to the past scores to display, so instead I made a page where it would only show the past score the user got. One of the things I would like to fix in the future is for the user to be able to see their score on the score page instead of having to memorize it and then type it in.

# Final Screenshots
<img src= '/screenshots/gameStart.png'>

<img src= '/screenshots/game.png'>

<img src= '/screenshots/gameEnd.png'>