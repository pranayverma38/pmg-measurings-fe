(function () {
    try {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.documentElement.style.colorScheme = "light";
        localStorage.setItem("theme", "light");
    } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.documentElement.style.colorScheme = "light";
    }
})();
