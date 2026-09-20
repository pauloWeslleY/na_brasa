export const getMenuFoodSlides = Array.from({ length: 5 }).map((_, index) => ({
  src: `/images/menu/c${index + 2}.jpeg`,
}));

export const getMenuDrinkSlides = Array.from({ length: 7 }).map((_, index) => ({
  src: `/images/drink/b${index + 1}.jpeg`,
}));
