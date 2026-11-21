const button = document.getElementById("Klick");
const text = document.getElementById("Nachricht");

button.addEventListener("click", () => {
    text.textContent = "Du bist ein Gooner!";
});

const button2 = document.getElementById("Klick2");
const text2 = document.getElementById("Notes");
button2.addEventListener("click", () => {
    text2.innerHTML = "<a href=\"https://de.pornhub.com/view_video.php?viewkey=691649d10e0d7\">Official Gooner Website</a>";
});

function berechne(preisId, mengeId, gesamtId) {
    const preisText = document.getElementById(preisId).textContent;
    const preis = parseFloat(preisText.replace("€", "").replace(" ", ""));
    const menge = parseInt(document.getElementById(mengeId).value, 10);

    if (Number.isNaN(preis) || Number.isNaN(menge)) {
        document.getElementById(gesamtId).textContent = "Ungültige Eingabe";
        return;
    }

    const gesamtpreis = preis * menge;
    document.getElementById(gesamtId).textContent = `${gesamtpreis.toFixed(2)} €`;
}