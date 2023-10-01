export function commands() {

    const container = document.querySelector('.main');

    container.addEventListener('click', (event) => {
        const title = event.target.closest('.command-card-title');

        if (title) {
            const i = title.querySelector('div i');
            i.classList.toggle('fa-rotate-180');

            const content = title.nextElementSibling;
            content.classList.toggle('active');
        }
    });

}