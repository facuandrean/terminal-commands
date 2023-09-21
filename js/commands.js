export function commands() {

    const cards = document.querySelectorAll('.command-card');

    cards.forEach(card => {
        const title = card.querySelector(".command-card-title");

        title.addEventListener('click', () => {

            const i = card.querySelector('.command-card-title div i');

            i.classList.toggle('fa-rotate-180');

            const content = card.querySelector('.command-card-content');

            content.classList.toggle('active');


        });

    });

}