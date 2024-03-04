import { motion } from "framer-motion";

import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { FC } from "react";


const StarWrapper = (Component : FC , idName: string | undefined) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;