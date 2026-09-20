"use client";

import "./icon-button-back-to-top.sass";

import { useEffect, useState } from "react";

const IconButtonBackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(
      "#back_to_top, .navbar__brand",
    );

    const handleClick = (event: MouseEvent): void => {
      const link = event.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href");

      if (!targetId || !targetId.startsWith("#")) {
        return;
      }

      const target = document.querySelector<HTMLElement>(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const offset = 25;
      const position =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const updateVisibility = () => {
      setShowBackToTop(navbar.classList.contains("navbar-top"));
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <a
      href="#icons_top"
      id="back_to_top"
      title="Voltar ao Topo da pagina"
      className={`button_to_top ${showBackToTop ? "show" : "hidden"}`}
    >
      <i className="fas fa-arrow-circle-up" />
    </a>
  );
};

export default IconButtonBackToTop;
