document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const groupId = urlParams.get('groupId');
    const lecturesList = document.getElementById('lecturesList');
    const groupName = document.getElementById('groupName');
    const token = localStorage.getItem('token');

    if (!token || !groupId) {
        window.location.href = '../login.html';
        return;
    }

    try {
        const groupResponse = await fetch(`/api/groups/${groupId}`, {
            headers: {
                'x-auth-token': token
            }
        });

        if (groupResponse.ok) {
            const group = await groupResponse.json();
            groupName.textContent = group.name;

            const lecturesResponse = await fetch(`/api/lectures/${groupId}`, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (lecturesResponse.ok) {
                const lectures = await lecturesResponse.json();
                lectures.forEach(lecture => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `lecture.html?lectureId=${lecture.id}`;
                    a.textContent = lecture.name;
                    li.appendChild(a);
                    lecturesList.appendChild(li);
                });
            } else {
                console.error('Failed to fetch lectures');
            }
        } else {
            console.error('Failed to fetch group');
        }
    } catch (err) {
        console.error(err);
    }
});
