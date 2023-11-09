export function scrollSpy() {

    const sections = document.querySelectorAll(".title");
    const navLinks = document.querySelectorAll(".content-nav a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(function(section) {

            // const sectionTop = section.offsetTop - 10;
            // const sectionHeight = section.clientHeight;
            // if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            //     current = section.getAttribute("id");
            // }

            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight * 0.05) {
              current = section.getAttribute("id");
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

}