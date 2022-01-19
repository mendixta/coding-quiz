var nameInput = document.querySelector("#nameInput");
var scoreInput = document.querySelector("#scoreInput");
var submitBtn = document.querySelector("#btnScore");
var nameSpan = document.querySelector("#oldName");
var scoreSpan = document.querySelector("#oldScore");
var finalScore = document.querySelector("#finalScore");

renderLastScore();

function renderLastScore(){
    var name = localStorage.getItem("name");
    var score = localStorage.getItem("score");

    if(!name || !score ){
        return;
    }
    
    nameSpan.textContent = name;
    scoreSpan.textContent = score;
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var name = document.querySelector("#nameInput").value;
    var score = document.querySelector("#scoreInput").value;
  
      localStorage.setItem("name", name);
      localStorage.setItem("score", score);
      renderLastScore();
    }
  );




