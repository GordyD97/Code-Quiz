let startBttn = document.getElementById('startBttn');
let submitbttn = document.getElementById('submitbttn');
// let timerEl = document.getElementById('timer');
let tunerEl = document.querySelector('timer');
const answerContainer = document.createElement('p');
let currentQuestionsIndex = 0;


// get dom object variables 

let score = 0;
// create a question array 
var questions = [
    {
        question: "What does CSS mean?",
        choices: ["Cascasding style sheets", "Coopers silly sling-shot", "Capiitol surf statement", "Cornering safe storks"],
        answer: 0
    },
    {
        question: "What is the worst color?",
        choices: ["Blue", "AquaMarine", "Lemmon-Chiffon", "Purple"],
        answer: 2
    },
    {
        question: "What does Preventing default do?",
        choices: ["Makes the page turn green", "Releases your IP to the russian hackers", "Gives me your creditcard number", "Prevents page reload"],
        answer: 3
    },
    {
        question: "Which is NOT a propper HTML semantic tag",
        choices: ["article", "footer", "elbow", "header"],
        answer: 2
    },
    {
        question: "When you get stuck what should you do?",
        choices: ["quit and ask for a refund", "cry in the corner until you passout", "get lost in the woods", "use Google"],
        answer: 3
    },
];

//create a start quiz/ submit quiz button funciton
// function startquiz();
// question next will be a call back
// dont have to define it now


function clockTick() {
    secLeft--;
    timeEl.textContent = "Time: " + secLeft;

    // Conditions when users running out of time 
    if (secLeft <= 0) {
        // timeEl.textContent = "";
        clearInterval(secLeft);

        quizEnd();
    }
}

const createAnswerButton = (textContent, rightBool, questionNext) => {
    let button = document.createElement('button')
    button.setAttribute('data-correct', rightBool)
    button.textContent = textContent;
    button.addEventListener('click', questionNext)
    return button;
};
let questionIndex = 0
let timerId;
const startQuiz = () => {
    let element = document.getElementById("startBttn");
    element.parentNode.removeChild(startBttn);
    // function to remove button when clickd 

    // creating question container
    const div = document.createElement("div");
    div.children[0];
    // creating timer
    timerId = setInterval(clockTick, 1000);


    const questionContainer = document.createElement("h1");
    questionContainer.innerText = questions[0].question;
    // create for loop
    // for(var questions= 0; questions< 0; questions++)
    // const answerContainer = document.createElement('p');
    answerContainer.textcontent = questions[0].choices;
    console.log(questionContainer);


    document.body.appendChild(questionContainer);
    document.body.appendChild(answerContainer);
    document.body.appendChild(div);
    document.body.appendChild(timer);
    // adding answers to answer container
    // creating the answer button 
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        let textContent = questions[questionIndex].choices[i]
        let rightBool = questions[questionIndex].answer === i
        let answerButton = createAnswerButton(
            textContent, rightBool, function () {
                // if rightBool{
                //     // add to the right count
                // }
                // else
                console.log(rightBool);
                console.log(textContent);
                console.log(questionIndex + 1);
            }
        );
        answerContainer.append(answerButton);
    }



    // crteate element update attributes then append to page
    // create element tag that will be empty inside of it 
    // text content* 
    // each button has to have a specific value/data attribute for right or wrong 



    //   add question and anwer container

    // console.log('hello test')
    

}; 

// const loadNext = () => {
// let currentQuestion = questions[0]
//     questions.textContent = currentQuestion.question;

// answerContainer.innerText = "";
// };
// load next on button 
// const loadNext = () => {
//     questionIndex++;
//     for (let i = 0; i < questions[questionIndex].choices.length; i++) {
//         let textContent = questions[questionIndex].choices[i]
//         let rightBool = questions[questionIndex].answer === i
//         let answerButton = createAnswerButton(
//             textContent, rightBool, function () {
//                 // if rightBool{
//                 //     // add to the right count
//                 // }
//                 // else
//                 // console.log(rightBool);
//                 console.log(textContent);
//                 console.log(questionIndex + 1);
//             }
//         );
//         answerContainer.append(answerButton);
//     }

const loadNext = () => {
    // showQs(randomizedQs,[questionIndexNow]); 

    let currentQuestion = questions[questionIndexNow];

    let questionEl = document.getElementById('question');
    questionEl.textContent = currentQuestion.question;
    answerEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice) {
        let choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choices);
        choiceNode.textContent = choices;

        choiceNode.onclick = loadNext;
        answerEl.appendChild(choiceNode);
    })
}
    


const questionClick = () => {
    if (this.value !== questions[questionIndex].answer) {
        // seconds left???
        if (secLeft <= 0) {
            // secLeft = 0
            clearInterval(secLeft);
        }
        timeEl.textContent = "Time:" == secLeft;
        scoreEl.textContent = "score:" == score;
        feedbackEl.textContent = "INCORRECT! TIME DEDUCT.";
    }
    else {
    score += 20;
    scoreEl.textContent = "score: " + score;
    feedbackEl.textContent = "Good Job keep it up!";
    }
feedbackEl.setAttribute('class', 'feedback');
setTimeout(function () {
    feedbackEl.setAttribute('class', 'feedback hide');

}, 1000);
 
// loadNext();
// questionIndex++;
// if (questionIndex === questions.length) {
//     submitQuiz();
//     clearInterval(timerId);
//     timeEl.textContent = "";
// }
// else {
//     loadNext();
// }
    loadNext();
}

const submitQuiz = () => {
    document.body(questionContainer).add('hide');
    document.body(answerContainer).add('hide');
    document.body(div).add('hide');
}
// for (let i = 0; i < currentQuestion.choices.length; i++) {

// }

// next task to acess each one after it is selected
// iterator ++ after the ansewr is selected 

startBttn.addEventListener('click', startQuiz);

submitbttn.addEventListener('click', startQuiz);

