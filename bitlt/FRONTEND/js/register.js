document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
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
        console.error('Registration failed', err);
        alert('An error occurred while trying to register');
    }
});
