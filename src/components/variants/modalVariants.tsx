
export const backgroundVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const formVariant = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      stiffness: 100
    }
  },
  exit: {
    y: -20,
    opacity: 0
  }
};

export const formTitleVariant = {
  initial: {
    opacity: 0,
    delay: 1,
    transform: "translateY(-5vh) scaleY(0)"
  },
  animate: {
    opacity: 1,
    transform: "translateY(0vw) scaleY(1)",
    y: 0,
    transition: {
      duration: 0.4,
      stiffness: 100
    }
  },
  exit: {
    opacity: 0
  }
};