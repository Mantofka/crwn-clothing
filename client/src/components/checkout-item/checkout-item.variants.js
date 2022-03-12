export const ItemVariants = {
    intial: { x: -50 },
    animate: { x: 0 },
    exit: {
      y: [10, -30],
      zIndex: -10,
      opacity: [1, 0],
      transition: { ease: [0.17, 0.67, 0.83, 0.67], delay: 0.1 },
    },
  };
  
  export const RemoveVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
    tap: { scale: 0.85 },
  };