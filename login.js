document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('devacademy_users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert('Invalid email or password!');
        return;
    }

    localStorage.setItem('devacademy_current_user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
});