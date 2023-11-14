export function lazyload() {

    // Función para cargar datos de forma lazy cuando la sección es visible
    function lazyLoadSection(section) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Si la sección es visible, carga los datos
                    fetchDataForSection(section);

                    // Deja de observar la sección después de cargar los datos
                    observer.unobserve(section);
                }
            });
        });
        // Comienza a observar la sección
        observer.observe(section);
    }

    // Llama a lazyLoadSection con la sección que deseas cargar de forma lazy
    // Por ejemplo:
    const bashSection = document.querySelector('.bash');
    lazyLoadSection(bashSection);

    // Agrega un evento de desplazamiento (scroll)
    window.addEventListener("scroll", function() {
        // Verifica si la sección está cerca del área visible de la página
        var section = document.querySelector(".bash");
        var boundingBox = section.getBoundingClientRect();

        // Puedes ajustar este valor según tu preferencia
        var offset = 200;

        if (boundingBox.top - offset < window.innerHeight) {
            // La sección está cerca del área visible, carga el contenido
            fetchDataForSection("bash"); // Asegúrate de tener una función fetchDataForSection implementada
            // Además, puedes eliminar el evento de desplazamiento después de cargar el contenido para evitar cargarlo múltiples veces
            window.removeEventListener("scroll", arguments.callee);
        }
    });

}








