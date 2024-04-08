// Motion
import { motion } from "framer-motion";

function AppBarTransition({ children }: { children: React.ReactNode }) {
  const style = {
    style: {
      width: "100%",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    initial: { y: "-100px" },
    animate: { y: "0px" },
    exit: { y: "0px" },
    transition: { type: "spring", stiffness: 200, damping: 50 },
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

export default AppBarTransition;
