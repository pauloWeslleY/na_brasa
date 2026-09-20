import "./testimonial-card.sass";

import Image from "next/image";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    photo: string;
    description: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="testimonial__item">
      <div className="testimonial__item_photo">
        <Image
          src={testimonial.photo}
          alt="Client"
          className="testimonial__item_image"
          width={100}
          height={100}
        />
      </div>

      <div className="testimonial__item_content">
        <h2>{testimonial.name}</h2>
        <p className="testimonial__item_content_description">
          {testimonial.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
