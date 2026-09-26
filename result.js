document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('devacademy_current_user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const score = user.lastScore || 0;
    const pct = Math.round((score / 15) * 100);

    document.getElementById('resultScore').textContent = `${score} / 15`;
    document.getElementById('resultPercentage').textContent = `${pct}%`;

    const bestPct = Math.round(((user.bestScore || 0) / 15) * 100);
    document.getElementById('resultBest').textContent = `${bestPct}%`;
    document.getElementById('resultAttempts').textContent = user.attempts;

    const badge = document.getElementById('resultBadge');
    const feedback = document.getElementById('resultFeedback');

    if (pct >= 80) {
        badge.textContent = "Excellent!";
        badge.style.color = "var(--success)";
        feedback.textContent = "Outstanding mastery of web development principles!";
    } else if (pct >= 50) {
        badge.textContent = "Passed";
        badge.style.color = "var(--secondary)";
        feedback.textContent = "Good effort! Review missed questions to strengthen knowledge.";
    } else {
        badge.textContent = "Needs Improvement";
        badge.style.color = "var(--danger)";
        feedback.textContent = "Keep practicing and review technical concepts.";
    }
});