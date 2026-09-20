const questions = [
    {
        question: "Who is the Accenture CEO?",
        answers: [
            "Julie Sweet",
            "Tobias Regenfuß",
            "Mauro Macchi"
        ],
        correct: 0
    },
    {
        question: "Which company owns LinkedIn?",
        answers: [
            "Google",
            "Microsoft",
            "Amazon"
        ],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlink Tool Management Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling websites?",
        answers: [
            "JavaScript",
            "CSS",
            "JSON"
        ],
        correct: 1
    },
    {
        question: "Which language is used for website logic?",
        answers: [
            "CSS",
            "HTML",
            "JavaScript"
        ],
        correct: 2
    }
];


const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

function startQuiz(){
    startScreen.style.display = "none";
    quizContainer.style.display = "block";

    showQuestion();
}

function showQuestion() {
    nextBtn.style.display = "none";
    answers.replaceChildren();
    const current = questions[currentQuestion];
    question.textContent = current.question;

    current.answers.forEach(function(answerText, index){
        const button = document.createElement("button");
        button.textContent = answerText;
        button.addEventListener("click", function() {
            checkAnswer(index);
        });

        answers.appendChild(button);
    });
} //CHECK!!!

function checkAnswer(selectedAnswer) {
    const current = questions[currentQuestion];

    if (selectedAnswer === current.correct) {
        score++; 
    }
    
    const buttons = answers.querySelectorAll("button");
     buttons.forEach(function(button) {
        button.disabled = true;
    });

    nextBtn.style.display = "inline-block";
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
       
    }
    else {
        showResult();
        
    }
}

function showResult() {

    quizContainer.style.display = "none";

    result.innerHTML = "";

    const heading = document.createElement("h2");

    heading.textContent =
        "Your score is " +
        score +
        " out of " +
        questions.length +
        "!";

    result.appendChild(heading);
}