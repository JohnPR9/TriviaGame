console.log("my javascript is linked")

var correct = 0;
var incorrect = 0;
var windowTimeout;
// var seconds = 0;
var intervalId = 0;


var questions = [{
    question: "Which of the below animals in the most prolific killer in the world?",
    answers: ["Butterfly Fish", "Shark", "Baracuda", "human"],
    correct: 3
}, {
    question: "A diver that runs out of air should:",
    answers: ["Panic", "Share air with your buddy", "Ignore it", "Swim to the nearest bar"],
    correct: 2
}, {
    question: "Divers can help protect the marine environment by",
    answers: ["Staying away from the reef", "Don't worry about it", "Blaming their buddy", "None of the above"],
    correct: 1
}, {
    question: "The condition in which certain colors are diminished as depth increases is called:",
    answers: ["Absorbtion", "Refraction", "Hang Over", "Night"],
    correct: 1,
}, {
    question: "Water comprises about what percentage of the earth's surface?",
    answers: ["10%", "100%", "85%", "72%"],
    correct: 3,
}, {
    question: "An object immersed in water will be buoyed up by a force ______ the weight of the water is displaces",
    answers: ["Greater than", "Less than", "equal to", "2 times"],
    correct: 2,
}, {
    question: "Salt water weighs ____ pounds per cubic foot and freshwater weighs ____ pounds per cubic foot?",
    answers: ["50/50", "64/62.5", "10/90", "They both weigh the same"],
    correct: 1,
}, {
    question: "One of the primary factors contributing to heat loss is?",
    answers: ["Refraction", "Absorption", "Diffusion", "Convection"],
    correct: 3,
}, {
    question: "A scuba tank for recreational diving should be filled with?",
    answers: ["Compress air", "Tequila", "Hydrogen", "Water"],
    correct: 0,
}, {
    question: "The greatest relative pressure change in sea water happens between ____ and ____feet.",
    answers: ["99/132", "33/66", "0/33", "66/99"],
    correct: 2,
}];


//start button to start the game
$("#start_button").click(function () {
    //hides the start button after being clicked.
    $(this).hide(); //hides the start button 
    //creates a timer for the game length
    startTimer();
    startGame();
})



function startGame() {

    renderQuestions();

    var score = document.getElementById("score").checked;
    console.log(score);            
}

function startTimer() {
    var timer = 60, minutes, seconds;

    var handle = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#time").text(minutes + ":" + seconds);

        if (--timer == 0) {
            clearInterval(handle);
            $("#time").text("Game Over");
        }
    }, 1000);

}

function renderQuestions() {

    //for loop to display the questions to the screen;
    for (var i = 0; i <= questions.length; i++) {
        $("#questions").append(`
            <div class="question-container">
                <div class="question">${questions[i].question}</div>
                    <label class="choice">${questions[i].answers[0]}
                        <input type="checkbox" name="quest">
                        <span class="checkmark"></span>
                    </label>
                    <label class="choice">${questions[i].answers[1]}
                        <input type="checkbox" name="quest">
                        <span class="checkmark"></span>
                    </label>
                    <label class="choice">${questions[i].answers[2]}
                        <input type="checkbox" name="quest">
                        <span class="checkmark"></span>
                    </label>
                    <label class="choice">${questions[i].answers[3]}
                        <input type="checkbox" name="quest">
                        <span class="checkmark"></span>
                    </label>        
            </div>
        `);
    
    }

}

