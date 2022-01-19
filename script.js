var timeDisplay = document.getElementById("timeLeft");
var currentQuestion = document.getElementById("current-question");
var questionContainer = document.getElementById("questionPage");
var scoreDisplay = document.getElementById("currentScore");
var result = document.getElementById("result");

var choiceA = document.getElementById("answer-1");
var choiceB = document.getElementById("answer-2");
var choiceC = document.getElementById("answer-3");
var choiceD = document.getElementById("answer-4");

document.getElementById("answer-1").addEventListener("click", chooseA);
document.getElementById("answer-2").addEventListener("click", chooseB);
document.getElementById("answer-3").addEventListener("click", chooseC);
document.getElementById("answer-4").addEventListener("click", chooseD);


const questions = [
   // QUESTION 1: Which option is NOT used in programming / coding? 
{
    question: "Which of the following is NOT used for programming?", 
    choices: ["JavaScript", "Python", "Excel", "HTML"],
    answer: "Excel"
},

// QUESTION 2: Which option is NOT a program used to write code?
{
    question: "Which option is NOT a program used to write code?", 
    choices: ["Adobe AE", "Sublime Text", "Atom", "VS Code"],
    answer: "Adobe AE",

},

// QUESTION 3: What is VAR used for?
{
    question: "What is VAR used for in JavaScript?", 
    choices: ["To add some nice color to a page", "To declare a variable", "To create a cool header", 
    "It does nothing, use something else"],
    answer: "To declare a variable"

},


// QUESTION 4: How do you add a comment in HTML?
{
    question: "How do you add a comment in HTML?", 
    choices: ["You use '// comment' in the HTML", "You use '-- comment' in the HTML",
    "You use '/* comment */' in the HTML", "You use '<!-- comment -->' in the HTML"],
    answer: "You use '<!-- comment -->' in the HTML"
    

},

// QUESTION 5: How do do you clone a repository in the command line from GitHub?
{   
    question: "How do do you clone a repository in the command line from GitHub?", 
    choices: ["That's not possible to do in the command line", "Git Clone 'repository link' in the command line ",  
    "Git Clone 'repository name' in the command line ","Git Push 'repository link' in the command line" ],
    answer: "Git Clone 'repository link' in the command line "

},


// QUESTION 6: Is this quis AWESOME?
{
    question: "Is this coding quiz AWESOME???", 
    choices: ["Ummmm...", "Well, its okay, I guess!", "This actually sucks, so", 
    "This quiz is awesome, and so are YOU! :)" ],
    answer: "This quiz is awesome, and so are YOU! :) ",
 
    
}

] // END OF QUESTIONS
// ============================ TIMER + START QUIZ =================================

var scoreCount = 0;
var secondsLeft = 60;
var currentScore = 100;
var finalScore;

function startTimer() {
    questionIndex = 0;
    secondsLeft = 60;
   
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeDisplay.textContent = "SECONDS LEFT:" + " " + secondsLeft;
      scoreDisplay.textContent = "YOUR SCORE:" + " " + currentScore;

      if(secondsLeft === 0 ) {
        clearInterval(timerInterval);
        gameOver();
      }
  
    }, 1000);

    showQuestions();
  }

// ===================== SHOW QUESTIONS + CHECK ANSWER =========================
var questionIndex = 0;
var correctAnswers = 0;

function showQuestions(){
    nextQuestion()
}

function nextQuestion(){
    currentQuestion.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
    
}

function checkAnswer(answer){
     if(questions[questionIndex].answer === questions[questionIndex].choices[answer]){
        correctAnswers++;
            result.textContent = "Correct, good job!"
        }   else {
            result.textContent = "Sorry, that is incorrect!"
            currentScore -= 20;
            secondsLeft -= 10;
        }

        questionIndex++;
            if(questionIndex < questions.length){
                nextQuestion();
            }  else {
                gameOver();
            }

}

function chooseA() {
    checkAnswer(0);
}

function chooseB(){
    checkAnswer(1)
}

function chooseC(){
    checkAnswer(2)
}

function chooseD(){
    checkAnswer(3)
}



/* WHEN THE TIMER ENDS, IT WILL TAKE THE USER TO WHERE THEY CAN ENTER THEIR
INITIALS */
function gameOver(){
      timeDisplay.textContent = " ";
      var end = document.createElement("html")
      var gameEnd = window.location.assign("gameEnd.html");
  } 

  startTimer();

 