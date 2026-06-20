"use client";

import { useEffect } from "react";
import { useMobileMenuCloneRefs } from "@/components/layout/MobileMenuCloneContext";

/**
 * Clone desktop menu (.at-mobile-menu-active > ul) into ALL offcanvas navs
 * (.at-offcanvas .at-offcanvas-menu nav and .at-offcanvas-2-area .at-offcanvas-menu nav)
 * and bind toggle for submenus (slideDown/slideUp) like main.js section 08.
 */
export default function MenuClone() {
  const { menuSourceRef, offcanvasRootRef } = useMobileMenuCloneRefs();

  useEffect(() => {
    const sourceUl = menuSourceRef.current;
    const root = offcanvasRootRef.current;
    if (!sourceUl || !root) return;

    const targetNavs = root.querySelectorAll(
      ".at-offcanvas .at-offcanvas-menu nav, .at-offcanvas-2-area .at-offcanvas-menu nav"
    );

    if (!targetNavs.length) return;

    const slideDown = (el: HTMLElement) => {
      el.style.display = "block";
      el.style.overflow = "hidden";
      el.style.transition = "height 0.3s linear";
      const h = el.scrollHeight;
      el.style.height = "0px";
      // Force reflow so transition runs from 0 → h (not same frame)
      void el.offsetHeight;
      requestAnimationFrame(() => {
        el.style.height = `${h}px`;
        const onEnd = () => {
          el.style.transition = "none";
          el.style.height = "";
          el.style.overflow = "";
          el.removeEventListener("transitionend", onEnd);
        };
        el.addEventListener("transitionend", onEnd);
      });
    };

    const slideUp = (el: HTMLElement) => {
      el.style.overflow = "hidden";
      el.style.transition = "height 0.3s linear";
      const h = el.scrollHeight;
      el.style.height = `${h}px`;
      void el.offsetHeight;
      requestAnimationFrame(() => {
        el.style.height = "0px";
        const onEnd = () => {
          el.style.display = "none";
          el.style.transition = "none";
          el.style.height = "";
          el.style.overflow = "";
          el.removeEventListener("transitionend", onEnd);
        };
        el.addEventListener("transitionend", onEnd);
      });
    };

    const setupClone = (clone: HTMLElement) => {
      // Strip .at-link-swap wrappers — offcanvas uses plain text, no hover swap animation
      clone.querySelectorAll<HTMLElement>(".at-link-swap").forEach((swap) => {
        const text = swap.querySelector(".text-1")?.textContent ?? swap.textContent ?? "";
        swap.replaceWith(document.createTextNode(text));
      });

      const submenus = clone.querySelectorAll(".at-submenu");
      submenus.forEach((sub) => {
        const parentLi = sub.parentElement;
        if (!parentLi) return;
        const existingBtn = parentLi.querySelector("button.at-menu-close");
        if (existingBtn) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "at-menu-close";
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Toggle submenu");
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        parentLi.appendChild(btn);
      });

      const toggleSubmenu = (li: Element) => {
        const sub = li.querySelector(".at-submenu") as HTMLElement | null;
        if (!sub) return;
        const isOpen = li.classList.contains("active");
        li.classList.toggle("active");
        const menuCloseBtn = li.querySelector("button.at-menu-close");
        if (menuCloseBtn) menuCloseBtn.setAttribute("aria-expanded", String(!isOpen));
        if (isOpen) {
          slideUp(sub);
        } else {
          slideDown(sub);
        }
      };

      clone.querySelectorAll(".at-submenu").forEach((sub) => {
        (sub as HTMLElement).style.display = "none";
      });

      const handleToggle = (e: Event) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const btn = target.closest("button.at-menu-close");
        const link =
          target.closest(".has-dropdown > a") ||
          target.closest("li.has-dropdown ul li.menu-item-has-children > a");
        const li = (btn?.parentElement || link?.closest("li.has-dropdown") || link?.closest("li")) as Element | null;
        if (!li) return;
        const sub = li.querySelector(".at-submenu");
        if (!sub) return;
        toggleSubmenu(li);
      };

      const targets = clone.querySelectorAll(
        "button.at-menu-close, ul > li.has-dropdown > a, li.has-dropdown ul li.menu-item-has-children > a"
      );
      targets.forEach((el) => el.addEventListener("click", handleToggle));
      return () => {
        targets.forEach((el) => el.removeEventListener("click", handleToggle));
      };
    };

    const cleanups: (() => void)[] = [];

    targetNavs.forEach((targetNav) => {
      const clone = sourceUl.cloneNode(true) as HTMLElement;
      targetNav.innerHTML = "";
      targetNav.appendChild(clone);
      const cleanup = setupClone(clone);
      if (cleanup) cleanups.push(cleanup);
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
    // Refs from context are stable for the app lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- menuSourceRef/offcanvasRootRef are stable RefObjects
  }, []);

  return null;
}
