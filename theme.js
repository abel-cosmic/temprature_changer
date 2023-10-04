function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
}

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", toggleTheme);
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (prefersDarkMode) {
  toggleTheme();
}
