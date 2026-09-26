document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('devacademy_current_user'));
    const answers = JSON.parse(localStorage.getItem('devacademy_last_answers')) || {};
    
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const feed = document.getElementById('reviewFeed');
    feed.innerHTML = '';

    quizBank.forEach((q, idx) => {
        const userAnsIdx = answers[idx];
        const isCorrect = userAnsIdx === q.correct;

        const card = document.createElement('div');
        card.className = `review-card ${isCorrect ? 'correct' : 'incorrect'}`;

        const userChoiceText = userAnsIdx !== undefined ? q.options[userAnsIdx] : 'Not Answered';
        const correctChoiceText = q.options[q.correct];

        card.innerHTML = `
            <h4>Question ${idx + 1}: ${q.question}</h4>
            <p class="review-ans user-ans"><strong>Your Answer:</strong> ${userChoiceText}</p>
            <p class="review-ans correct-ans"><strong>Correct Answer:</strong> ${correctChoiceText}</p>
            <div class="review-explanation">
                <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;
        feed.appendChild(card);
    });
});