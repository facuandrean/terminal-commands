export function btnUp() {
    const $btn = document.querySelector(".btn-up");

    $btn.style.opacity = "0";
    $btn.style.visibility = "hidden";

    const scrollLimit = 1000;

    function toggleBtnUp() {
        if (window.scrollY > scrollLimit) {
            $btn.style.opacity = "1";
            $btn.style.visibility = "visible";
        } else {
            $btn.style.opacity = "0";
            $btn.style.visibility = "hidden";
        }
    }

    window.addEventListener('scroll', toggleBtnUp);

    $btn.style.transition = "all .5s ease-in";

}