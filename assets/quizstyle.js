//create vairables 
const quizBox = document.querySelector('.quizBox');
const answers = document.querySelector('.answers');
const startBttn = document.querySelector('.startBttn');
const submitBttn = document.querySelector('.submitbttn');
const questionsEl = document.querySelector('.questions');
// const answerButtonsElement =getElementbyId('answerbtn');

//questions and answers 
        var questions = [
            {
                question:"What does CSS mean?", 
                choices:["Cascasding style sheets", "Coopers silly sling-shot", "Capiitol surf statement", "Cornering safe storks"],
                answer:0
            }, 
            {
                question:"What is the worst color?", 
                choices:["Blue", "AquaMarine", "Lemmon-Chiffon", "Purple"],
                answer:2
            },
            {
                question:"What does Preventing default do?",
                choices:["Makes the page turn green", "Releases your IP to the russian hackers", "Gives me your creditcard number", "Prevents page reload"],
                answer:3
            },
            {   
                question:"Which is NOT a propper HTML semantic tag",
                choices:["article", "footer", "elbow", "header" ],
                answer: 2
            },
            {
                question:"When you get stuck what should you do?",
                choices:["quit and ask for a refund", "cry in the corner until you passout", "get lost in the woods", "use Google"],
                answer: 3
            },
        ];


// function ansewrarray(){
//     if (answer.correct) {
//             bttn.dataset.correct = answer.correct
//     }    
//variables again
var currentQuestionIndex = 0;
var timeLeft = 60;
var timeInterval;
var score = 0;
var correct;

//quizstart
startBttn.addEventListener('click', startGame)
function startGame(){
        console.log('hello test')
        // startBttn.classList.add('hide')
        answers.classList.add
        getNextQuestion()
}

function getNextQuestion() {    
    showQuestion([currentQuestionIndex])
    if (questions.length === 0 || questionCounter > MAX_QUESTIONS)
    return
}

function showQuestion(question) {  

}
//     generateQuestion();

//     timeInterval = setInterval(function(){  
//         timeLeft--;
//         quiztimer.textcontent= 'time left ' + timeLeft;
        
//         if (timeLeft === 0) {
//                 clearInterval(timeInterval);
//                 // showscore();
//         }

//     }, 1000);
// }

// //question generation
// function generateQuestion(){   
//     var currentQuestion = questions[questionIndex];
   
// }
// //function quiz start 
// // function startQuiz() {
// //         generateQuestion();

// //         timeInterval = setInterval(function(){  
// //             timeLeft--;
// //             quiztimer.textcontent= 'time left ' + timeLeft;
            
// //             if (timeLeft === 0) {
// //                     clearInterval(timeInterval);
// //                     // showscore();
// //             }

// //         }, 1000);
// // }

// // end page 



// // function show score 











// // var questions = [
// //     {
// //         question:"What does CSS mean?", 
// //         choices:["Cascasding style sheets", "Coopers silly sling-shot", "Capiitol surf statement", "Cornering safe storks"],
// //         answer:"Cascasding style sheets"
// //     }, 
// //     {
// //         question:"What is the worst color?", 
// //         choices:["Blue", "AquaMarine", "Lemmon-Chiffon", "Purple"],
// //         answer:"Lemmon-Chiffon"
// //     },
// //     {
// //         question:"What does Preventing default do?",
// //         choices:["Makes the page turn green", "Releases your IP to the russian hackers", "Gives me your creditcard number", "Prevents page reload"],
// //         answer:"Prevents page reload"
// //     },
// //     {   
// //         question:"Which is NOT a propper HTML semantic tag",
// //         choices:["article", "footer", "elbow", "header" ],
// //         answer: "elbow"
// //     },
// //     {
// //         question:"When you get stuck what should you do?",
// //         choices:["quit and ask for a refund", "cry in the corner until you passout", "get lost in the woods", "use Google"],
// //         answer: "use Google"
// //     },
// // ]

// var button. document.queryselectorall.-------. for each function("event", addEventListener, click")




// startBttn.addEventListener("click", startQuiz)