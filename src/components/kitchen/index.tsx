"use client";

import "./kitchen.sass";

import Image from "next/image";

import Button from "../button/button";
import { Slide, SlideItem } from "../slide";

const getSlideSteakHouse = [
  `/images/steakhouse/r1.jpg`,
  `/images/steakhouse/r2.jpeg`,
  `/images/steakhouse/r3.jpeg`,
  `/images/steakhouse/r4.jpeg`,
  `/images/steakhouse/r5.jpeg`,
];

const Kitchen = () => {
  return (
    <div className="kitchen__wrapper">
      <div className="kitchen__photo">
        <Slide
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          effect="fade"
          autoplay={{ delay: 3000 }}
          pagination={{ dynamicBullets: true }}
        >
          {getSlideSteakHouse.map((src, index) => (
            <SlideItem key={index}>
              <Image
                src={src}
                alt="imagem da CHURRASCARIA"
                className="img-thumbnail"
                width={400}
                height={400}
              />
            </SlideItem>
          ))}
        </Slide>
      </div>

      <div className="kitchen__content">
        <h1>Nossa Cozinha</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          explicabo vitae repellat praesentium quisquam vero omnis tenetur
          voluptate voluptates aut aliquid perferendis recusandae, illo deserunt
          possimus beatae officia nostrum ipsa.
        </p>

        <Button>Leia Mais</Button>
      </div>
    </div>
  );
};

export default Kitchen;
