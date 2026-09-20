"use client";

import "./menu-card-item.sass";

import Image from "next/image";

interface MenuCardItemProps {
  src: string;
}

const MenuCardItem = ({ src }: MenuCardItemProps) => {
  return (
    <article className="item-container">
      <Image
        src={src}
        alt="Item do Cardápio"
        className="img-thumbnail item-img"
        width={500}
        height={500}
      />
      <a className="image-link" href={src}>
        <h1 className="item-link">ver Opções</h1>
      </a>
    </article>
  );
};

export default MenuCardItem;
