import type { Variants, Transition } from "framer-motion";

const precisionEase = [0.16, 1, 0.3, 1] as const;
const enterEase = [0, 0, 0.2, 1] as const;
const exitEase = [0.4, 0, 1, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [...precisionEase] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const axisLineDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [...precisionEase], delay: 0.3 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [...precisionEase] },
  },
};

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [...enterEase] },
  },
};

export const pageExit: Variants = {
  visible: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: [...exitEase] },
  },
};

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [...precisionEase],
};
