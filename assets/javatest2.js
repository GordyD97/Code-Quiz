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

