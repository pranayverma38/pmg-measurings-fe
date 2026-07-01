/**
 * Strip known browser-extension attributes before React hydrates.
 * Bitdefender and similar tools inject bis_* / __processed_* on many nodes,
 * which otherwise triggers hydration mismatch warnings in development.
 */
(function () {
    var EXT_ATTR_PATTERN = /^(bis_|__processed_)/;

    function stripExtensionAttrs(el) {
        if (!el || !el.getAttributeNames) return;
        el.getAttributeNames().forEach(function (name) {
            if (EXT_ATTR_PATTERN.test(name)) {
                el.removeAttribute(name);
            }
        });
    }

    function stripTree(root) {
        if (!root) return;
        stripExtensionAttrs(root);
        if (root.querySelectorAll) {
            root.querySelectorAll("*").forEach(stripExtensionAttrs);
        }
    }

    function run() {
        stripTree(document.documentElement);
    }

    run();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            run();
            requestAnimationFrame(function () {
                requestAnimationFrame(run);
            });
        }, { once: true });
    } else {
        requestAnimationFrame(function () {
            requestAnimationFrame(run);
        });
    }
})();
