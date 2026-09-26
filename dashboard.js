document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('devacademy_current_user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('dashStudentName').textContent = user.name;
    document.getElementById('statAttempts').textContent = user.attempts || 0;

    const bestPct = Math.round(((user.bestScore || 0) / 15) * 100);
    document.getElementById('statBestScore').textContent = `${user.bestScore || 0}/15 (${bestPct}%)`;

    const lastPct = Math.round(((user.lastScore || 0) / 15) * 100);
    document.getElementById('statLastScore').textContent = user.attempts ? `${user.lastScore}/15 (${lastPct}%)` : '--';

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('devacademy_current_user');
        window.location.href = 'index.html';
    });
});