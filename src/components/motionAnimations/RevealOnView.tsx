// Motion
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealOnViewProps {
  children: React.ReactNode;
  index?: number;
  isHomePage?: boolean | undefined;
  isHHeight?: boolean | undefined;
}
function RevealOnView({ children, index, isHomePage, isHHeight }: RevealOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (index == undefined) {
    index = 1;
  }

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView, control]);

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={"hidden"}
      animate={control}
      transition={{ duration: 0.3, delay: isHomePage ? index * 0.06 : 0.2 }}
      style={{ height: isHHeight ? "auto" : "100%" }}>
      {children}
    </motion.div>
  );
}

export default RevealOnView;
