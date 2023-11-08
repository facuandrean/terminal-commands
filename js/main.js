import { commands } from "./commands.js"
import { fetchData } from "./fetch.js"
import { search } from "./search.js"
import { viewport } from "./viewport.js";

const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", () => {
    commands();
    fetchData();
    search();
    viewport();
});

w.addEventListener("resize", () => {
    viewport();
})

