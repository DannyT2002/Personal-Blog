// Check for user's theme preference in localStorage
const savedTheme = localStorage.getItem("theme");

// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");

// Function to toggle theme and update localStorage
function updateTheme(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add("dark-theme");
        toggleTheme.innerHTML = "☀️"; // Moon emoji for dark mode
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        toggleTheme.innerHTML = "🌙"; // Sun emoji for light mode
        localStorage.setItem("theme", "light");
    }
}

if (savedTheme === "dark") {
    // Apply dark mode if user prefers it
    updateTheme(true);
} else {
    // Apply light mode by default
    updateTheme(false);
}

toggleTheme.addEventListener("click", function() {
    const isDarkMode = document.body.classList.contains("dark-theme");
    updateTheme(!isDarkMode);
});
