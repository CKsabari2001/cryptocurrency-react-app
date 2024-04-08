import React from "react";
// Motion
import { motion } from "framer-motion";

function SideAppBarTransition({ children, index }: { children: React.ReactNode; index: number }) {
  const style = {
    style: {},
    initial: { x: "-100px" },
    animate: { x: "0px" },
    exit: { x: "0px" },
    transition: { duration: 0.5, delay: index * 0.2 },
  };

  return (
    <motion.div
      style={style.style}
      initial={style.initial}
      animate={style.animate}
      exit={style.exit}
      transition={style.transition}>
      {children}
    </motion.div>
  );
}

export default SideAppBarTransition;
