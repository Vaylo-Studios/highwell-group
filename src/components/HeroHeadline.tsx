"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <h1 className="font-display max-w-2xl text-5xl uppercase leading-[0.95] md:text-8xl">
      <span className="block overflow-hidden">
        <motion.span
          className="block text-navy"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Make
        </motion.span>
      </span>
      <span className="block overflow-hidden">
        <motion.span
          className="block text-navy"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          It <span className="text-lavender">Real</span>
        </motion.span>
      </span>
    </h1>
  );
}
