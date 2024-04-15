import { getNationality } from './nationalizeApi';

const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const getInfoButton = document.getElementById('getInfoButton') as HTMLButtonElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;

getInfoButton.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    if (name) {
        const nationalities = await getNationality(name);
        outputDiv.innerHTML = nationalities.join('<br>');
    } else {
        outputDiv.textContent = 'Ivesk varda.';
    }
});