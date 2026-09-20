"use client";

import MenuCardItem from "./menu-card-item";
import { Slide, SlideItem } from "./slide";

interface MenuSlideProps {
  menus: { src: string }[];
}

const MenuSlide = ({ menus }: MenuSlideProps) => {
  return (
    <Slide slidesPerView={3} spaceBetween={30} loop={true} grabCursor={true}>
      {menus.map((slide, index) => (
        <SlideItem key={index}>
          <MenuCardItem src={slide.src} />
        </SlideItem>
      ))}
    </Slide>
  );
};

export default MenuSlide;
