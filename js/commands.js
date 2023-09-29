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
    
    // const cards = document.querySelectorAll('.command-card');

    // cards.forEach(card => {
    //     const title = card.querySelector(".command-card-title");

    //     title.addEventListener('click', () => {
    //         console.log('Clicked!');

    //         const i = card.querySelector('.command-card-title div i');

    //         i.classList.toggle('fa-rotate-180');

    //         const content = card.querySelector('.command-card-content');

    //         content.classList.toggle('active');

    //     });

    // });

}