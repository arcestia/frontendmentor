const componentEl = document.getElementById("compEl");
const diceEl = document.getElementById("diceEl");
const loadingEl = document.getElementById("loadingEl");
const adviceNumberEl = componentEl.querySelector(".advice-number");
const adviceTextEl = componentEl.querySelector(".advice-text");

const url = "https://api.adviceslip.com/advice";

window.addEventListener("load", () => {
    loadAdvice();
    componentEl.classList.remove("hidden");
});

diceEl.addEventListener("click", loadAdvice);
diceEl.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
        event.preventDefault();
        loadAdvice();
    }
});

async function loadAdvice() {
    loadingEl.setAttribute("aria-hidden", false);

    try {
        const response = await fetch(url, { cache: "no-cache" });
        const data = await response.json();

        setTimeout(() => {
            loadingEl.setAttribute("aria-hidden", true);

            if (!data) {
                adviceTextEl.textContent =
                    "Sorry, no advice right now, but please check again later!";
            } else {
                adviceNumberEl.textContent = `Advice #${data.slip.id}`;
                adviceTextEl.innerHTML = `“${data.slip.advice}”`;
                document.body.focus();
            }
        }, 1000);
    } catch (error) {
        console.log("Error caught:", error);
    }
}