"use client";

import { Slide, SlideItem } from "./slide";
import TestimonialCard from "./testimonial-card";

interface TestimonialsSlideProps {
  testimonials: {
    name: string;
    photo: string;
    description: string;
  }[];
}

const TestimonialsSlide = ({ testimonials }: TestimonialsSlideProps) => {
  return (
    <Slide slidesPerView={1} spaceBetween={30} loop={true} grabCursor={true}>
      {testimonials.map((testimonial, index) => (
        <SlideItem key={index}>
          <TestimonialCard testimonial={testimonial} />
        </SlideItem>
      ))}
    </Slide>
  );
};

export default TestimonialsSlide;
