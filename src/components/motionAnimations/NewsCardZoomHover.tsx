// Motion
import { motion } from "framer-motion";
function NewsCardZoomHover({ children }: { children: React.ReactNode }) {
  const style = {
    style: {
      height: "100%",
    },
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 300, damping: 8 },
  };

  return (
    <motion.div style={style.style} whileHover={style.whileHover} transition={style.transition}>
      {children}
    </motion.div>
  );
}

export default NewsCardZoomHover;
