const button = document.getElementById("Klick");
const text = document.getElementById("Nachricht");

button.addEventListener("click", () => {
    text.textContent = "Du bist ein Gooner!";
});

const button2 = document.getElementById("Klick2");
const text2 = document.getElementById("Notes");
button2.addEventListener("click", () => {
    text2.textContent = "Tim ist der Mastergooner!";
});
