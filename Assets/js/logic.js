// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    // Change button content based on theme
    if (document.body.classList.contains("dark-theme")) {
        toggleTheme.innerHTML = "☀️"; // Moon emoji for dark mode
    } else {
        toggleTheme.innerHTML = "🌙"; // Sun emoji for light mode
    }
});
