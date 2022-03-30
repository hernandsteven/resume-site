export const springFadeIn = {
  y: 0,
  opacity: 1,
  transition: { type: "spring", duration: 1.5, bounce: 0.3 },
};

export const springFadeOut = {
  ...springFadeIn,
  y: 300,
  opacity: 0,
};

export const slideRightFadeIn = {
  x: 0,
  opacity: 1,
  transition: { duration: 2 },
};

export const slideRightFadeOut = {
  x: -200,
  opacity: 0,
  transition: { duration: 2 },
};
