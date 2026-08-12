(function () {
    try {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.documentElement.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark");
    } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.documentElement.style.colorScheme = "dark";
    }
})();
