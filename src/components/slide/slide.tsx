"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import "swiper/css/a11y";
import "swiper/css/keyboard";

import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectFade,
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, type SwiperProps } from "swiper/react";

export default function SliderCarousel({ children, ...props }: SwiperProps) {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        A11y,
        Autoplay,
        FreeMode,
        EffectFade,
        EffectCards,
        EffectCreative,
        Keyboard,
      ]}
      {...props}
    >
      {children}
    </Swiper>
  );
}
