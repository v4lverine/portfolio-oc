"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Presentation(props) {
  return (
    <AnimatePresence>
      <motion.article
        initial={{ opacity: 0, x: -200 }} //initial values
        animate={{ x: 0 }}
        transition={{
          duration: 0.5,
          type: "keyframes",
        }}
        whileInView={{ opacity: 1 }}
      >
        <h2>{props.label}</h2>
        {props.children}
      </motion.article>
    </AnimatePresence>
  );
}
