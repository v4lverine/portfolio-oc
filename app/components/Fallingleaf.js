"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styled from "styled-components";

const LeafBlock = styled.div`
  height: 0px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const fallingVariant = {
  leafTwo: {
    x: 1000,
    y: [50, 190, 100, 150, 255, 300, 320],
    opacity: [0.5, 1, 0],
    rotate: [0, -15, -50, -360, -80, -100],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  leafThree: {
    x: 1200,
    y: [0, 50, 150, 220, 155, 255, 300],
    opacity: [0.5, 1, 0],
    rotate: [0, -25, -360, 50, -80, -360, -100],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Fallingleaf() {
  return (
    <LeafBlock style={{ height: "0px" }}>
      <motion.div
        variants={fallingVariant}
        animate="leafTwo"
        style={{
          width: "fit-content",
          color: "var(--greenish)",
          fontSize: "3em",
          filter: "drop-shadow(2px 2px 5px var(--greyish))",
        }}
      >
        <FontAwesomeIcon icon={faLeaf} />
      </motion.div>
      <motion.div
        variants={fallingVariant}
        animate="leafThree"
        style={{
          width: "fit-content",
          color: "#83dea4",
          fontSize: "3em",
          filter: "drop-shadow(2px 2px 5px var(--greyish))",
        }}
      >
        <FontAwesomeIcon icon={faLeaf} />
      </motion.div>
    </LeafBlock>
  );
}
