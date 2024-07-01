document.addEventListener('DOMContentLoaded', async () => {
    const groupsList = document.getElementById('groupsList');
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '../login.html';
        return;
    }

    try {
        const response = await fetch('/api/groups', {
            headers: {
                'x-auth-token': token
            }
        });

        if (response.ok) {
            const groups = await response.json();
            groups.forEach(group => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `group.html?groupId=${group.id}`;
                a.textContent = group.name;
                li.appendChild(a);
                groupsList.appendChild(li);
            });
        } else {
            console.error('Failed to fetch groups');
        }
    } catch (err) {
        console.error(err);
    }
});
