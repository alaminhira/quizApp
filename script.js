const quizData = [
    {
        question: 'Whdsat is the most popular programming language?',
        options: ['C++', 'Javascript', 'Ruby', 'Python'],
        corAns: 2
    },
    {
        question: 'What is the sum of 2 + 2?',
        options: [2, 3, 4, 6],
        corAns: 3
    },
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Javascript', 'Ruby', 'Python'],
        corAns: 1
    },
    {
        question: 'How much time is required to learn JS?',
        options: ['1 month', '3 weeks', '1 year', 'Depends on the Coder'],
        corAns: 4
    },
    {
        question: 'Which month does come after "May"?',
        options: ['December', 'January', 'June', 'July'],
        corAns: 3
    }
];

const quiz = document.querySelector('.quiz');
const quizContent = document.querySelector('.quiz__content');
const quizQuestion = document.querySelector('.quiz__question');
const quizOptions = document.querySelectorAll('.quiz__option');
const quizLabels = document.querySelectorAll('.quiz__label');
const btnSubmit = document.querySelector('.quiz__submit');

let score = 0;
let curQuiz = 0;
const loadQuiz = function (cur) {
    quizQuestion.textContent = quizData[cur].question;
    quizLabels.forEach((label, i) => {
        label.textContent = quizData[cur].options[i];
    });
};
loadQuiz(curQuiz);

const reloadUI = function() {
    btnSubmit.textContent = 'Reload Quiz';
//     btnSubmit.setAttribute('onclick', 'window.location.reload()');
       btnSubmit.setAttribute('onclick', 'window.history.go()');
};

const displayScores = function() {
    quizContent.innerHTML = `Congress! You have scored ${score}/${quizData.length}`;

    // Reload UI
    reloadUI();
};

const updateResult = function (e) {
    // Prevent form from submitting
    e.preventDefault();

    quizOptions.forEach(opt => {
        if (opt.checked) {

            // Update score
            +opt.id === quizData[curQuiz].corAns ? score++ : score;
            opt.checked = false;

            // Update quiz
            curQuiz++;
            curQuiz < quizData.length ? loadQuiz(curQuiz) : displayScores();
        }
    });
};
quiz.addEventListener('submit', updateResult);
