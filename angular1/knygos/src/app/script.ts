import firebaseConfig from './firebaseConfig';

// Inicializuojame Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Formos elementai
const bookForm = document.getElementById('book-form') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const authorInput = document.getElementById('author') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const bookList = document.getElementById('book-list') as HTMLUListElement;

// Pridėti įrašą į Firebase
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;

    if (title && author && year) {
        database.ref('books').push({
            title,
            author,
            year
        });

        titleInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
    } else {
        alert('Užpildykite visus laukus!');
    }
});

// Atvaizduoti knygų sąrašą iš Firebase
const showBooks = () => {
    database.ref('books').on('value', (snapshot) => {
        bookList.innerHTML = '';

        snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key;
            const data = childSnapshot.val();

            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${data.title}</strong> - ${data.author} (${data.year})
                <button data-key="${key}" class="delete-btn">Ištrinti</button>
                <button data-key="${key}" class="edit-btn">Redaguoti</button>
            `;
            bookList.appendChild(li);
        });

        // Ištrinti įrašą iš Firebase
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const key = button.getAttribute('data-key');
                database.ref(`books/${key}`).remove();
            });
        });

        // Redaguoti įrašą
        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const key = button.getAttribute('data-key');
                const bookRef = database.ref(`books/${key}`);

                const newData = prompt('Įveskite naują pavadinimą, autorių ir metus (atskirtus kableliais)', '');
                const [newTitle, newAuthor, newYear] = newData.split(',');

                if (newTitle && newAuthor && newYear) {
                    bookRef.update({
                        title: newTitle.trim(),
                        author: newAuthor.trim(),
                        year: newYear.trim()
                    });
                } else {
                    alert('Neteisingai įvesti duomenys!');
                }
            });
        });
    });
};

// Nustatome, kad pradžioje rodytų knygų sąrašą
window.addEventListener('load', showBooks);

// Navigacijos valdymas
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            document.querySelectorAll('section').forEach((section) => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
            if (targetId === 'atvaizduoti') {
                showBooks();
            }
        }
    });
});