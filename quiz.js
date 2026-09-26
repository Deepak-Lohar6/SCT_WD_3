let currentQuestionIndex = 0;
let userAnswers = {};
let timerInterval = null;
let timeRemaining = 1800;

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('devacademy_current_user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    renderQuestion();
    startTimer();

    document.getElementById('prevBtn').addEventListener('click', () => navigateQuiz(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateQuiz(1));
    document.getElementById('submitBtn').addEventListener('click', confirmSubmitQuiz);
});

function startTimer() {
    const display = document.getElementById('timerDisplay');
    timerInterval = setInterval(() => {
        timeRemaining--;
        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function renderQuestion() {
    const q = quizBank[currentQuestionIndex];
    document.getElementById('quizCurrentIndex').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = q.question;

    const pct = ((currentQuestionIndex + 1) / 15) * 100;
    document.getElementById('quizProgressBar').style.width = `${pct}%`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const keys = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${userAnswers[currentQuestionIndex] === idx ? 'selected' : ''}`;
        btn.onclick = () => selectOption(idx);
        btn.innerHTML = `<span class="opt-key">${keys[idx]}</span> ${opt}`;
        optionsContainer.appendChild(btn);
    });

    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').style.display = currentQuestionIndex === 14 ? 'none' : 'inline-flex';
    document.getElementById('submitBtn').style.display = currentQuestionIndex === 14 ? 'inline-flex' : 'none';
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

function navigateQuiz(dir) {
    currentQuestionIndex += dir;
    renderQuestion();
}

function confirmSubmitQuiz() {
    if (confirm("Are you sure you want to submit your assessment?")) {
        submitQuiz();
    }
}

function submitQuiz() {
    clearInterval(timerInterval);

    let score = 0;
    quizBank.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) {
            score++;
        }
    });

    let user = JSON.parse(localStorage.getItem('devacademy_current_user'));
    user.attempts = (user.attempts || 0) + 1;
    user.lastScore = score;
    if (score > (user.bestScore || 0)) {
        user.bestScore = score;
    }

    localStorage.setItem('devacademy_current_user', JSON.stringify(user));
    localStorage.setItem('devacademy_last_answers', JSON.stringify(userAnswers));

    let users = JSON.parse(localStorage.getItem('devacademy_users')) || [];
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
        users[idx] = user;
        localStorage.setItem('devacademy_users', JSON.stringify(users));
    }

    window.location.href = 'result.html';
}