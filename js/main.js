import { commands } from "./commands.js"
import { fetchData } from "./fetch.js"

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    commands();
    fetchData();
});

