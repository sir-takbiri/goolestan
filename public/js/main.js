const SwitchTheme = document.querySelector("#themeSwitch");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || systemTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");

    localStorage.setItem("theme", "dark");
  }
};

SwitchTheme?.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
