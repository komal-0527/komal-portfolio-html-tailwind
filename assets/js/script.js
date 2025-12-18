const sideMenu = document.getElementById("sideMenu");
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");
const html = document.documentElement;

// Mobile menu
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-16rem";
}

// Load saved theme
if (localStorage.theme === "dark") {
  html.classList.add("dark");
  icon.classList.replace("ri-moon-fill", "ri-sun-fill");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    icon.classList.replace("ri-moon-fill", "ri-sun-fill");
    localStorage.theme = "dark";
  } else {
    icon.classList.replace("ri-sun-fill", "ri-moon-fill");
    localStorage.theme = "light";
  }
});
