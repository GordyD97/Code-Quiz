// stating variables.
const start = document.getElementById('start')
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questionContainer = document.getElementById('questionContainer')
const questionsTitle = document.getElementById('question')
const questionChoices = document.getElementById('questionChoices')
const saveBtn = document.getElementById('save')

// setting timer properities up.
let timer = 60;
const timeEl = document.getElementById('time');
let index = 0
let score = 0
let interval;

// proposing questions 
var quizData = [
    {
        question: "What does CSS mean?",
        choices: ["Cascasding style sheets", "Coopers silly sling-shot", "Capiitol surf statement", "Cornering safe storks"],
        correct: "Cascasding style sheets",
    },
    {
        question: "What is the worst color?",
        choices: ["Blue", "AquaMarine", "Lemmon-Chiffon", "Purple"],
        correct: "AquaMarine",
    },
    {
        question: "What does Preventing default do?",
        choices: ["Makes the page turn green", "Releases your IP to the russian hackers", "Gives me your creditcard number", "Prevents page reload"],
        correct: "Prevents page reload",
    },
    {
        question: "Which is NOT a propper HTML semantic tag",
        choices: ["article", "footer", "elbow", "header"],
        correct: "elbow",
    },
    {
        question: "When you get stuck what should you do?",
        choices: ["quit and ask for a refund", "cry in the corner until you passout", "get lost in the woods", "use Google"],
        correct: "use Google",
    },
];

// quiz start
function startQuiz() {

    questionContainer.classList.remove('hide')
    start.setAttribute("class", "hide")


    timeEl.textContent = timer;
    interval = setInterval(function () {
        timer--;
        timeEl.textContent = timer;

        if (timer <= 0) {
            stopQuiz();
        }

    }, 1000

    )

    loadQuestions();

}

function loadQuestions() {
    let currentQuestion = quizData[index]
    questionsTitle.textContent = currentQuestion.question;

    questionChoices.innerHTML = '';

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        //appending buttons for choices
        let btn = document.createElement('button');
        btn.textContent = currentQuestion.choices[i]
        btn.setAttribute('value', currentQuestion.choices[i])

        btn.onclick = checkAnswers;

        questionChoices.append(btn)

    }

}

function checkAnswers() {
    console.log(this.value)

    // WHEN I answer a question incorrectly THEN time is subtracted from the clock
    if (this.value !== quizData[index].correct) {
        timer -= 15;
        timeEl.textContent = timer;

        if (timer < 0) {
            timer = 0;
        }
    }

    //  WHEN I answer a question THEN I am presented with another question 
    index++;

    // we need to check if there are more questions left in the array if not the game is over
    if (quizData.length === index) {
        stopQuiz();
    }
    else {
        loadQuestions();
    }
};

function stopQuiz() {

    // WHEN all questions are answered or the timer reaches 0
    clearInterval(interval)

    //show the gameover container
    const gameOverEl = document.getElementById('game-over-container');

    gameOverEl.classList.remove('hide')
    questionContainer.classList.add('hide')


}

function saveScore() {
    // THEN the game is over WHEN the game is over THEN I can save my initials and my score...NEED TO SAVE TO LOCAL STORAGE
    const initialsVal = document.getElementById('initials').value;


    // Add a condition that will check if the initials is empty
    if (initialsVal !== "") {

        const score = {
            score: timer,
            initials: initialsVal
        }

        //get the saved highscores from local storage if no scores exists set this as an empty array
        const highScore = JSON.parse(localStorage.getItem('highscores')) || [];

        highScore.push(score);

        localStorage.setItem('highscores', JSON.stringify(highScore));

        //reload page when initials are saved
        location.reload();
    }

}

start.addEventListener('click', startQuiz)

saveBtn.addEventListener('click', saveScore)