document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('token', token);
            window.location.href = 'student/dashboard.html';
        } else {
            console.error('Failed to login');
        }
    } catch (err) {
        console.error(err);
    }
});
