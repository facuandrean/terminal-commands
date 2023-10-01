export function search() {
    const d = document;

    const $search = d.getElementById('search-command');
    const $fetch = d.querySelector('.main');
    
    d.addEventListener('keyup', (e) => {
        
        if (e.target == $search) {
    
            if (e.key === "Escape") {
                e.target.value = "";
            }

            $fetch.childNodes.forEach(element => {

                if (element.nodeType === 1) {
                    // Intentamos obtener el elemento h3 dentro de cada hijo
                    const h3Element = element.querySelector('h3');

                    // Verificamos si existe el elemento h3 y si su texto incluye lo buscado
                    if (h3Element && h3Element.textContent.toLowerCase().includes(e.target.value)) {
                        element.classList.remove('none');
                    } else {
                        element.classList.add('none');
                    }

                }

            });

        }
    });

}
