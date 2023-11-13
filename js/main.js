import { commands } from "./commands.js"
import { fetchData } from "./fetch.js"
import { search } from "./search.js"
import { viewport } from "./viewport.js";
import { scrollSpy } from "./scroll-spy.js";
import { btnUp } from "./btn-up.js";

const d = document;
const w = window;
const $bash = d.querySelector(".bash");
const $utilities = d.querySelector(".utilities");

d.addEventListener("DOMContentLoaded", () => {
    commands();
    fetchData();
    search();
    viewport();
    scrollSpy();
    btnUp();
});

w.addEventListener("resize", () => {
    viewport();
})

w.addEventListener("scroll", (e) => {
    if (e.target == $bash || e.target == $utilities) {
        scrollSpy();
    }
})

