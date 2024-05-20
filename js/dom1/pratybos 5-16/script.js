const btn = document.querySelector('button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modalContent');
const close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener("click", closeModal)
modal.addEventListener("click", closeModal)

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {

    modalContent.classList.add("slide-up")

    setTimeout(() => {
        modalContent.classList.remove("slide-up")
        modal.style.diaplay = "none"
    }, 500ms)
}