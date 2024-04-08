// Motion
import { motion } from "framer-motion";
function PageFadeInOut({ children }: { children: React.ReactNode }) {
  const style = {
    initial: {
      opacity: 0,
      width: "100%",
    },

    animate: {
      opacity: 1,
      width: "100%",
    },

    exit: {
      opacity: 0,
      width: "100%",
    },

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      initial={style.initial}
      animate={style.animate}
      exit={style.exit}
      transition={style.transition}>
      {children}
    </motion.div>
  );
}

export default PageFadeInOut;
