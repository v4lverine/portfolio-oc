import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./components.module.scss";
import { Raleway } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
});

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.toggle}>
      <button
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={styles.toggleButton}
        style={
          isOpen
            ? { backgroundColor: "var(--beigish)", color: "var(--greyish" }
            : { backgroundColor: "var(--greyish)", color: "var(--beigish" }
        }
      >
        <div className={`${styles.toggleTitle} ${raleway.className}`}>
          {props.label}{" "}
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} rotation={180} />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.toggleContent}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.6 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
            >
              {props.children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
