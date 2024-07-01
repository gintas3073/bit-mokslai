document.addEventListener('DOMContentLoaded', async () => {
    const profileForm = document.getElementById('profileForm');
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '../login.html';
        return;
    }

    try {
        const response = await fetch('/api/users/profile', {
            headers: {
                'x-auth-token': token
            }
        });

        if (response.ok) {
            const user = await response.json();
            profileForm.firstName.value = user.firstName;
            profileForm.lastName.value = user.lastName;
            profileForm.email.value = user.email;
            profileForm.phone.value = user.phone;
        } else {
            console.error('Failed to fetch profile');
        }
    } catch (err) {
        console.error(err);
    }

    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstName = profileForm.firstName.value;
        const lastName = profileForm.lastName.value;
        const email = profileForm.email.value;
        const phone = profileForm.phone.value;

        try {
            const response = await fetch('/api/users/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ firstName, lastName, email, phone })
            });

            if (response.ok) {
                alert('Profile updated successfully');
            } else {
                console.error('Failed to update profile');
            }
        } catch (err) {
            console.error(err);
        }
    });
});
