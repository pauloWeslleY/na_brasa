"use client";

import { useState } from "react";

import { ImageGallery } from "./image-gallery";
import MenuCardItem from "./menu-card-item";
import { Slide, SlideItem } from "./slide";

interface MenuSlideProps {
  menus: { src: string }[];
}

const MenuSlide = ({ menus }: MenuSlideProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <>
      <Slide slidesPerView={3} spaceBetween={30} loop={true} grabCursor={true}>
        {menus.map((slide, index) => (
          <SlideItem key={index}>
            <MenuCardItem
              src={slide.src}
              onClick={() => setCurrentIndex(index)}
            />
          </SlideItem>
        ))}
      </Slide>

      <ImageGallery
        images={menus.map((menu) => ({
          src: menu.src,
          alt: "Itens do menu",
          width: 800,
          height: 600,
        }))}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
        onClose={() => setCurrentIndex(null)}
      />
    </>
  );
};

export default MenuSlide;
