// first state variables

let startBttn = document.getElementById('startBttn');
let submitbttn = document.getElementById('submitbttn');

// get dom object variables 

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


const startQuiz = () => {
    var element = document.getElementById("startBttn");
    element.parentNode.removeChild(startBttn);
    // function to remove button when clickd 

    // creating question container
    const div = document.createElement("div");
    div.children[2];
    

    const questionContainer = document.createElement("h1");
    questionContainer.innerText = questions[0].question;
    // create for loop
    // for(var questions= 0; questions< 0; questions++)
    const answerContainer = document.createElement('p');
    answerContainer.innerText = questions[0].choices;
    console.log(questionContainer);


    document.body.appendChild(questionContainer);
    document.body.appendChild(answerContainer);
    document.body.appendChild(divcontainername);
    document.createElement();

//   add question and anwer container

        // console.log('hello test')
       
        
};

// next task to acess each one after it is selected
// iterator ++ after the ansewr is selected 

startBttn.addEventListener('click', startQuiz);

submitQuiz =>{};
//create a show question function 

//create a function that adds the correct question counter 

// create a function that counts down the timer 

//create a function for saving scores json/local storage

// create a function for brining the next question

// create a function for displaying final score plus leaader board stringify/local storage/json



//call back all functions 