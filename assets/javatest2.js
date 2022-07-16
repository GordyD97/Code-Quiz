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
// question next will be a call back
    // dont have to define it now

const createAnswerButton = (textContent, rightBool, questionNext) =>{
   var button = document.createElement('button')
   button.setAttribute('data-correct', rightBool)
   button.textContent = textContent;
   button.addEventListener('click', questionNext)
   return button; 
};
let questionIndex = 0
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
    document.body.appendChild(div);
    // adding answers to answer container
    for (let i=0; i< questions[questionIndex].choices.length; i++){ 
        let textContent = questions[questionIndex].choices[i]
        let rightBool = questions[questionIndex].answer === i
        let answerButton = createAnswerButton(
            textContent,rightBool, function(){
                // if rightBool{
                //     // add to the right count
                // }
                // else
                console.log(rightBool);
                console.log(textContent);
                console.log(questionIndex+1);
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