document.getElementById('forgotForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    const newPassword = document.getElementById('forgotNewPassword').value;

    let users = JSON.parse(localStorage.getItem('devacademy_users')) || [];
    const user = users.find(u => u.email === email);

    if (!user) {
        alert('Email address not found!');
        return;
    }

    user.password = newPassword;
    localStorage.setItem('devacademy_users', JSON.stringify(users));
    alert('Password updated successfully!');
    window.location.href = 'login.html';
});