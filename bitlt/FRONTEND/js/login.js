document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = 'student/dashboard.html';
        } else {
            const errorData = await response.json();
            alert(errorData.message);
        }
    } catch (err) {
        console.error('Login failed', err);
        alert('An error occurred while trying to login');
    }
});
