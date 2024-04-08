// Motion
import { motion } from "framer-motion";
function NewsCardImgZoomHover({ children, isHover }: { children: React.ReactNode; isHover: boolean }) {
  const style = {
    animate: { scale: isHover ? 1.1 : 1 },
    transition: { type: "spring", stiffness: 300, damping: 8 },
  };

  return (
    <motion.div animate={style.animate} transition={style.transition}>
      {children}
    </motion.div>
  );
}

export default NewsCardImgZoomHover;
