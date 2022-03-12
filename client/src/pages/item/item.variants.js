export const ImageVariants = {
  hidden: {
    y: 50,
  },
  show: {
    y: 0,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

export const InfoOrchestrationVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const InfoDetailVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 50,
    },
  },
  hidden: {
    opacity: 0,
    x: 200,
  },
};

export const SupportingDetailsVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 60,
    },
  },
  hidden: {
    opacity: 0,
    y: 30,
  },
};

export const ExitButtonVariants = {
  active: {
    y: -5,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
  passive: {},
};

export const TextVariants = {
  active: {
    y: [0, 50, 50, -50, -50, 0],
    opacity: [1, 1, 0, 0, 1, 1],
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 700,
      damping: 60,
    },
  },
  still: {
    y: 0,
  },
};
