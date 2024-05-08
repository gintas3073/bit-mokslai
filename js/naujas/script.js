const acc = documeent.querySelectorAll(".acordeon");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active")
        const desc = this.nextElementSibling

        if (defaults.style.maxHeight) {
            desc.style.maxHeight = null;
        } else {
            desc.style.maxHeight = descScrollHeight + px
        }



    })
}