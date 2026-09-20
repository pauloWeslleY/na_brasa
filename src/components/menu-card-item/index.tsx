"use client";

import "./menu-card-item.sass";

import Image from "next/image";
import { ComponentProps } from "react";

interface MenuCardItemProps extends ComponentProps<"article"> {
  src: string;
}

const MenuCardItem = ({ src, ...props }: MenuCardItemProps) => {
  return (
    <article className="item-container" {...props}>
      <Image
        src={src}
        alt="Item do Cardápio"
        className="img-thumbnail item-img"
        width={500}
        height={500}
      />
      <div className="image-link">
        <h1 className="item-link">ver Opções</h1>
      </div>
    </article>
  );
};

export default MenuCardItem;
