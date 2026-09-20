"use client";

import "./menu-nav.sass";

import Image from "next/image";
import { useEffect, useState } from "react";

import Button from "../button/button";

const MENU_NAV_LIST = [
  { href: "#icons_top", label: "Home" },
  { href: "#menu_card", label: "Cardápio" },
  { href: "#about", label: "Sobre" },
  { href: "#testimonials", label: "Recomendações" },
  { href: "#team", label: "Equipe" },
  { href: "#kitchen", label: "Cozinha" },
  { href: "#contact", label: "Contato" },
];

const MenuNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const btn = document.querySelectorAll(".bar");
    const navbar = document.querySelector(".navbar__container");
    if (!btn || btn.length === 0 || !navbar) {
      return;
    }
    if (isMobileMenuOpen) {
      btn.forEach((bar) => bar.classList.add("change"));
      navbar.classList.add("open");
    } else {
      btn.forEach((bar) => bar.classList.remove("change"));
      navbar.classList.remove("open");
    }
  }, [isMobileMenuOpen]);

  const handleToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Image
          src="/images/logo/ilaranjaescuro.png"
          alt="Logotipo Menu na Brasa"
          width={50}
          height={50}
        />
      </div>

      <button
        className="btn__navbar_mobile"
        type="button"
        data-target="#btn_menu_nav"
        onClick={handleToggle}
      >
        <div className="btn__navbar_mobile__icons">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </div>
      </button>

      <div className="navbar__container">
        <ul className="navbar-nav">
          {MENU_NAV_LIST.map(({ href, label }) => (
            <li className="nav-item" key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Button>Pedir Agora</Button>
      </div>
    </nav>
  );
};

export default MenuNav;
