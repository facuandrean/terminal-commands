import { commands } from "./commands.js"
import { fetchData } from "./fetch.js"
import { search } from "./search.js"

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    commands();
    fetchData();
    search();
});

