(function () {
    try {
        var path = window.location.pathname;
        var isDarkRoute = /-dark\/?$/.test(path);
        if (isDarkRoute) {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            return;
        }
        var theme = localStorage.getItem("theme");
        if (theme === "dark" || theme === "light") {
            document.documentElement.setAttribute("data-bs-theme", theme);
        } else {
            var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
        }
    } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
})();
