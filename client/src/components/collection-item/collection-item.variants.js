export const CollectionItemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
