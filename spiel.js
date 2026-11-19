const button = document.getElementById("Klick");
const text = document.getElementById("Nachricht");

button.addEventListener("click", () => {
    text.textContent = "Du hast auf den Button geklickt!";
});
