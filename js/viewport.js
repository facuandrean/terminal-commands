export function viewport() {

    const $nav = document.querySelectorAll(".content-nav");
    const $text = document.querySelectorAll(".content-text");

    const widthViewport = window.innerWidth;

    window.addEventListener('resize', (e) => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            // La pantalla tiene al menos x px de ancho
            $nav.forEach(element => {
                element.classList.remove('none');
            })

            $text.forEach(element => {
                element.style.width = "75%";
            })
        } else {
            // La pantalla tiene menos de x px de ancho
            $nav.forEach(element => {
                element.classList.add('none')
            })

            $text.forEach(element => {
                element.style.width = "100%";
            })
        }
    })

    window.addEventListener("DOMContentLoaded", () => {
        if (widthViewport < 1024) {
            $nav.forEach(element => {
                element.classList.add('none')
            })

            $text.forEach(element => {
                element.style.width = "100%";
            })
        } else {
            $nav.forEach(element => {
                element.classList.remove('none');
            })

            $text.forEach(element => {
                element.style.width = "75%";
            })
        }
    })

}