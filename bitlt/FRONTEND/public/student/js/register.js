document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password, role: 1 })
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('token', token);
            window.location.href = 'student/dashboard.html';
        } else {
            console.error('Failed to register');
        }
    } catch (err) {
        console.error(err);
    }
});
