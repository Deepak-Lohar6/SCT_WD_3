document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('devacademy_current_user'));
    const navActions = document.getElementById('navActions');
    const heroExploreBtn = document.getElementById('heroExploreBtn');
    const heroStartBtn = document.getElementById('heroStartBtn');

    if (user) {
        if (navActions) {
            navActions.innerHTML = `
                <a href="dashboard.html" class="btn btn-outline">Dashboard</a>
                <button class="btn btn-primary" id="globalLogout">Logout</button>
            `;
            document.getElementById('globalLogout').addEventListener('click', () => {
                localStorage.removeItem('devacademy_current_user');
                window.location.href = 'index.html';
            });
        }

        if (heroExploreBtn) {
            heroExploreBtn.setAttribute('href', 'dashboard.html');
            heroExploreBtn.textContent = 'Go to Dashboard';
        }

        if (heroStartBtn) {
            heroStartBtn.setAttribute('href', 'quiz.html');
            heroStartBtn.textContent = 'Start Quiz Now';
        }
    }
});