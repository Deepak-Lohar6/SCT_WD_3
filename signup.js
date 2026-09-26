document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    let users = JSON.parse(localStorage.getItem('devacademy_users')) || [];
    if (users.find(u => u.email === email)) {
        alert('Email already registered!');
        return;
    }

    const newUser = { name, email, password, attempts: 0, bestScore: 0, lastScore: 0 };
    users.push(newUser);
    localStorage.setItem('devacademy_users', JSON.stringify(users));
    localStorage.setItem('devacademy_current_user', JSON.stringify(newUser));

    window.location.href = 'dashboard.html';
});