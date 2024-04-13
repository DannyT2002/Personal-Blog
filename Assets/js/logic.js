// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("change", function() {
    document.body.classList.toggle("dark-theme");
    const themeText = document.getElementById("themeText");
    if (document.body.classList.contains("dark-theme")) {
        themeText.textContent = "Dark Mode";
    } else {
        themeText.textContent = "Light Mode";
    }
});
