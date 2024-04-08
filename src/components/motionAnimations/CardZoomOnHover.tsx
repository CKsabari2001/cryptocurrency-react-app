// Motion
import { motion } from "framer-motion";
function CardZoomOnHover({ children }: { children: React.ReactNode }) {
  const style = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 300, damping: 8 },
  };

  return (
    <motion.div whileHover={style.whileHover} transition={style.transition}>
      {children}
    </motion.div>
  );
}

export default CardZoomOnHover;
