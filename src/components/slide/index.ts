"use client";
import dynamic from "next/dynamic";
import { SwiperSlide as SlideItem } from "swiper/react";

const Slide = dynamic(() => import("./slide"), {
  ssr: false,
});

export { Slide, SlideItem };
