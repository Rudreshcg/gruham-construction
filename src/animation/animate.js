// src/animation/animate.js

export const SlideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut", // Good to add an ease for smoother animation
      },
    },
    exit: { // Optional: for when the component unmounts
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const SlideDown = (delay) => {
  return {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const SlideRight = (delay) => {
  return {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const FadeIn = (duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
});