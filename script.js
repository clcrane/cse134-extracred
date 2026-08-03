const themeButton = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

function updateButtonText() {
    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Switch to Earth Theme";
    } else {
        themeButton.textContent = "Switch to Light Theme";
    }
}

updateButtonText();

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "earth");
    }

    updateButtonText();
});