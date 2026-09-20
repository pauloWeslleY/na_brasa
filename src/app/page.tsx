import { CircleArrowDown } from "lucide-react";

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Kitchen from "@/components/kitchen";
import MenuNav from "@/components/menu-nav";
import MenuSlide from "@/components/menu-slide";
import Navigation from "@/components/navigation";
import SectionHeader from "@/components/section-header";
import TeamCard from "@/components/team-card";
import TestimonialsSlide from "@/components/testimonials-slide";
import { getMenuDrinkSlides, getMenuFoodSlides } from "@/data/get-menu-slide";
import { teams } from "@/data/team.data";
import { testimonials } from "@/data/testimonials.data";

export default function Home() {
  return (
    <main>
      <Navigation />

      <header>
        <div className="container">
          <div className="row_header__bn">
            <div className="header__banner">
              <h1>
                <small>Tem</small>
                <strong>Rodízio</strong>
              </h1>

              <a
                href="#orderModal"
                className="button__order trigger_btn"
                data-toggle="modal"
              >
                Faça seu pedido
              </a>
            </div>
          </div>
        </div>

        <a href="#menu_wrapper" className="button__forward">
          <CircleArrowDown />
        </a>
      </header>

      <MenuNav />

      <section id="menu_wrapper" className="container section__wrapper">
        <SectionHeader
          iconClassName="fas fa-utensils"
          title="Pratos & Porções"
        />

        <div className="section__wrapper_content">
          <MenuSlide menus={getMenuFoodSlides} />
        </div>
      </section>

      <section id="menu_wrapper" className="container section__wrapper">
        <SectionHeader iconClassName="fas fa-beer" title="Bebidas" />

        <div className="section__wrapper_content">
          <MenuSlide menus={getMenuDrinkSlides} />
        </div>
      </section>

      <section id="about" className="container">
        <About />
      </section>

      <section id="team" className="container section__wrapper">
        <SectionHeader iconClassName="fas fa-users" title="Equipe" />

        <div className="team__content">
          {teams.map((team) => (
            <TeamCard
              key={team.name}
              team={{ ...team, imageSrc: team.photo }}
            />
          ))}
        </div>
      </section>

      <section id="kitchen" className="container">
        <Kitchen />
      </section>

      <section id="testimonials" className="container section__wrapper">
        <SectionHeader iconClassName="fas fa-comments" title="Depoimentos" />

        <div className="testimonials__content">
          <TestimonialsSlide testimonials={testimonials} />
        </div>
      </section>

      <section id="contact" className="container">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
